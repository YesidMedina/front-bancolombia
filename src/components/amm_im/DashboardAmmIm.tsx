import { useEffect, useState } from "react";
import { Card, Title, DonutChart } from "@tremor/react";
import { getDashboardAmmIm } from "../helpers/ServiceAmmIm";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// const colors = ["#ce93d8", "#5c6bc0", "#b39ddb"];

const valueFormatter = (number: number) =>
  ` ${Intl.NumberFormat("us").format(number).toString()}`;

export const DashboardAmmIm = () => {
  const [information, setInformation] = useState();
  // const [im, setIm] = useState();
  // const [spec, setSpec] = useState();
  // const [count, setCount] = useState();
  // const [diag, setDiag] = useState();

  const data = async () => {
    const resp = await getDashboardAmmIm();
    setInformation(resp.data);
  };

  console.log(information);

  useEffect(() => {
    data();
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 dark:bg-gray-900 ">
        <div className="py-24 mx-16 md:w-90">
          <ResponsiveContainer width="100%" aspect={2}>
            <BarChart
              data={information}
              width={500}
              height={300}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={information} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Spectrum" fill="#8884d8" />
              <Bar dataKey="UIM" fill="#22c55e" />
              <Bar dataKey="ELK" fill="#00000" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-32">
          <div className="grid lg:grid-cols-2 ms:grid-cols-1">
            <Card className="max-w-xs border-2 border-gray-600">
              <Title className="">Spectrum</Title>
              <DonutChart
                className=""
                data={information}
                category="Spectrum"
                valueFormatter={valueFormatter}
                colors={["violet"]}
              />
            </Card>
            <Card className="max-w-xs border-2 border-gray-600">
              <Title className="">UIM</Title>
              <DonutChart
                className=""
                data={information}
                category="UIM"
                valueFormatter={valueFormatter}
                colors={["green"]}
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
