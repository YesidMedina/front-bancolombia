import { useEffect, useState } from "react";
import { Card, Title, DonutChart } from "@tremor/react";
import {
  getDashboardAmmIm,
  getDashboardAmmImFull,
} from "../helpers/ServiceAmmIm";
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
  const [totalState, setTotalState] = useState();
  // const [im, setIm] = useState();
  // const [spec, setSpec] = useState();
  // const [count, setCount] = useState();
  // const [diag, setDiag] = useState();

  const data = async () => {
    const resp = await getDashboardAmmIm();
    setInformation(resp.data);
    console.log(resp.data);
  };

  const dataFull = async () => {
    const resp = await getDashboardAmmImFull();
    setTotalState(resp.data);
    console.log(resp.data);
  };

  console.log();

  useEffect(() => {
    data();
    dataFull();
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 dark:bg-gray-900 w-full">
        <div className="mt-12 py-8 px-8 mx-16 md:w-90 border-2 border-black dark:border-gray-200">
          <h1 className="font-semibold text-xl text-slate-800">Herramientas</h1>
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
              <Bar dataKey="OpenShift" fill="#00000" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-32 py-8 px-12 mx-16 md:w-90 border-2 border-black dark:border-gray-200">
          <h1 className="text-center -mt-4">Herramientas mas usadas</h1>
          <div className="grid lg:grid-cols-2 ms:grid-cols-1 mt-4">
            <Card className="max-w-xs border-4 border-gray-600">
              <Title className="">Spectrum</Title>
              <DonutChart
                className=""
                data={information}
                category="Spectrum"
                valueFormatter={valueFormatter}
                colors={["violet"]}
              />
            </Card>
            <Card className="max-w-xs border-4 border-gray-600">
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
     
      <div className="mt-12 py-8 flex border-2 border-black dark:border-gray-200 ml-32 w-10/12">
        <div className="grid lg:grid-cols-3 ms:grid-cols-1 mx-auto ">
          <Card className="max-w-xs border-2 border-gray-600">
            <Title className="">Servicios Eliminados</Title>
            <DonutChart
              className=""
              data={totalState}
              category="false"
              valueFormatter={valueFormatter}
              colors={["red"]}
            />
          </Card>
          <Card className="max-w-xs border-2 border-gray-600 ml-4">
            <Title className="">Servicios Activos</Title>
            <DonutChart
              className=""
              data={totalState}
              category="true"
              valueFormatter={valueFormatter}
              colors={["green"]}
            />
          </Card>
          <Card className="max-w-xs border-2 border-gray-600 ml-8">
            <Title className=""> Mantenimiento </Title>
            <DonutChart
              className=""
              data={information}
              category="true"
              valueFormatter={valueFormatter}
              colors={["violet"]}
            />
          </Card>
        </div>
      </div>
      {/* <div className="mt-12 py-8 px-8 mx-16 md:w-90 border-2">
          <span>Activas o en Mantenimiento</span>
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
              <Bar dataKey="false" fill="#22c55e" />
              <Bar dataKey="true" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div> */}
      {/* <div className="mt-32 py-8 px-12 mx-16 md:w-90 border-2 border-black dark:border-gray-200">
        <span>Cantidad de servicios Activos o en mantenimiento</span>
          <div className="grid lg:grid-cols-2 ms:grid-cols-1">
            <Card className="max-w-xs border-2 border-gray-600">
              <Title className="">Activas</Title>
              <DonutChart
                className=""
                data={information}
                category="false"
                valueFormatter={valueFormatter}
                colors={["green"]}
              />
            </Card>
            <Card className="max-w-xs border-2 border-gray-600">
              <Title className=""> Mantenimiento </Title>
              <DonutChart
                className=""
                data={information}
                category="true"
                valueFormatter={valueFormatter}
                colors={["violet"]}
              />
            </Card>
          </div>
        </div> */}

      {/* <div className="py-24 mx-16 md:w-90">
          <span>Servicios activos y eliminados</span>
          <ResponsiveContainer width="100%" aspect={2}>
            <BarChart
              data={totalState}
              width={500}
              height={300}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={totalState} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="false" fill="#ff0000" />
              <Bar dataKey="true" fill="#008000" />
            </BarChart>
          </ResponsiveContainer>
        </div> */}
       
    </>
  );
};
