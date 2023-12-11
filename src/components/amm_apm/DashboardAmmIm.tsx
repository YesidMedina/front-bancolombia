import { useEffect, useState } from "react";
import { Card, Title, DonutChart } from "@tremor/react";
import {
  getDashboardAmmIm,
  getDashboardAmmImFull,
  getDashboardFilial,
  
} from "../helpers/ServiceAmmIm";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getDashboardAmmApm, getDashboardAmmApmFull, getDashboardFilialApm, getDashboardjobApm } from "../helpers/ServiceAmmApm";

const valueFormatter = (number: number) =>
  ` ${Intl.NumberFormat("us").format(number).toString()}`;

export const DashboardAmmApm = () => {
  const [information, setInformation] = useState();
  const [totalState, setTotalState] = useState();
  const [filiales, setFiliales] = useState();
  const [totalJob, setTotalJob] = useState();

  // const [im, setIm] = useState();
  // const [spec, setSpec] = useState();
  // const [count, setCount] = useState();
  // const [diag, setDiag] = useState();

  const data = async () => {
    const resp = await getDashboardAmmApm();
    setInformation(resp.data);
  };

  const dataFull = async () => {
    const resp = await getDashboardAmmApmFull();
    setTotalState(resp.data);
  };

  const jobFull = async () => {
    const resp = await getDashboardjobApm();
    setTotalJob(resp.data);
  };


  const dataFilial = async () => {
    const resp = await getDashboardFilialApm();
    setFiliales(resp.data);
    console.log({ resp });
  };

  console.log();

  useEffect(() => {
    data();
    dataFull();
    dataFilial();
    jobFull()
  }, []);

  const getPath = (x: any, y: any, width: any, height: any) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props: any) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <>
      <div className="md:grid md:grid-cols-2 dark:bg-gray-900 md:w-full">
        <div className="mt-12 py-8 px-4 mx-10 md:w-90 border dark:border-gray-200">
          <h1 className=" text-slate-800">Herramientas</h1>
          <ResponsiveContainer aspect={2.4}>
            <BarChart
              data={information}
              width={500}
              height={300}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={information} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Cola" fill="#8884d8" label={{ position: "top" }} />
              <Bar dataKey="Job" fill="#EC407A" label={{ position: "top" }} />
              <Bar dataKey="Métrica" fill="#5ac346" label={{ position: "top" }} />
              <Bar dataKey="Método" fill="#d1edf0" label={{ position: "top" }} />
              <Bar dataKey="Canal" fill="#3877ad" label={{ position: "top" }} />
              <Bar dataKey="Flujo" fill="#912f91" label={{ position: "top" }} />
              <Bar dataKey="Performance" fill="#d68197" label={{ position: "top" }} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-12 py-8 px-4 mx-10 md:w-90 border dark:border-gray-200">
          <h1 className=" text-slate-800">Filiales</h1>
          <div>
            <BarChart
              width={500}
              height={300}
              data={filiales}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={filiales} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="Bancolombia"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              />
              <Bar
                dataKey="Banistmo"
                fill="#800080"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              />
              <Bar
                dataKey="Filiales Exterior"
                fill="#0088FE"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              />
              <Bar
                dataKey="Factoring"
                fill="#00C49F"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              />
            </BarChart>
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 dark:bg-gray-900 md:w-full">
        <div className="mt-12 py-6 px-12 mx-10 md:w-90 border dark:border-gray-200">
           <h1 className="text-center -mt-4">Jobs</h1>
          <div className="grid lg:grid-cols-2 ms:grid-cols-1 mt-8">
            <Card className="mx-auto border border-gray-600 -ml-2">
              <Title className="text-xs">Jobs Eliminados</Title>
              <DonutChart
                className=""
                data={totalJob}
                category="false"
                valueFormatter={valueFormatter}
                colors={["red"]}
              />
            </Card>
            <Card className="max-w-xs border border-gray-600">
              <Title className="text-xs">Jobs Activos</Title>
              <DonutChart
                className=""
                data={totalJob}
                category="true"
                valueFormatter={valueFormatter}
                colors={["green"]}
              />
            </Card>
          </div> 
        </div>
        <div className="mt-20 py-8 flex  dark:border-gray-200  w-10/12">
          <div className="grid lg:grid-cols-3 ms:grid-cols-1 mx-auto ">
            <Card className="max-w-xs border border-gray-600">
              <Title className="text-xs">Servicios Eliminados</Title>
              <DonutChart
                className=""
                data={totalState}
                category="false"
                valueFormatter={valueFormatter}
                colors={["red"]}
              />
            </Card>
            <Card className="max-w-xs border border-gray-600 ml-4">
              <Title className="text-xs">Servicios Activos</Title>
              <DonutChart
                className=""
                data={totalState}
                category="true"
                valueFormatter={valueFormatter}
                colors={["green"]}
              />
            </Card>
            <Card className="max-w-xs border border-gray-600 ml-8">
              <Title className="text-xs"> Mantenimiento </Title>
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
      </div>
    </>
  );
};
