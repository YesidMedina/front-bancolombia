import { useEffect, useState } from "react";
import { getBaseLine } from "../helpers/ServiceAmmIm";
import { BaseLine } from "../../interfaces/amm_im";
import { Table } from "../commons/Table";
import { ModalBaseLine } from "./ModalBaseLine";

export const BaseLineHome = () => {
  const [data, setData] = useState<BaseLine[]>([]);
  const [modalMoreView, setModalMoreView] = useState<{
    open: boolean;
    info?: Object;
  }>({ open: false, info: {} });

  const infoBaseLine = async () => {
    const resp = await getBaseLine();
    setData(resp.data);
    console.log(resp.data.results);
  };

  useEffect(() => {
    infoBaseLine();
  }, []);

  return (
    <>
      <div className="mt-8 ">
        <div className=" overflow-x-auto shadow-md sm:rounded-lg mt-4 mx-4 border border-gray-300 h-[32rem]">
          <table className="overflow-y-auto w-full text-xs text-left text-gray-500 dark:text-gray-400">
            <Table
              className={"fixed"}
              titleE="Nombre linea Base"
              title="Tipo configuración"
              title1="Item confoguración"
              title2="Mayor"
              title3="Crítico"
              title4="Grupo Soporte"
              title5="Impacto"
              title6="Detalle"
            />

            <tbody>
              {data.map((info, index) => {
                return (
                  <tr
                    className="bg-gray-300 border-b  hover:bg-gray-400 text-gray-900 dark:bg-gray-900 dark:text-gray-400"
                    key={index}
                  >
                    <td className="px-2 py-2 text-xs font-bold w-28 truncate ...">
                      {info.name_baseline}
                    </td>
                    <td className="px-2 py-2 truncate capitalize">
                      {info.type_configuration}
                    </td>
                    <td className="px-2 py-2 capitalize">
                      {info.item_configuration}
                    </td>
                    <td>
                      <p className="px-2 py-2 w-28 truncate ...">
                        {" "}
                        {info.major}
                      </p>
                    </td>
                    <td>
                      <p className="px-2 py-2 w-28 truncate ...">
                        {" "}
                        {info.critical}
                      </p>
                    </td>
                    <td>
                      <p className="px-2 py-2 w-28 truncate ...">
                        {" "}
                        {info.group_support}
                      </p>
                    </td>
                    <td>
                      <p className="px-2 py-2 w-28 truncate ...">
                        {info.impact}
                      </p>
                    </td>
                    <td>
                      <p className="px-2 py-2 w-36 truncate ...">
                        {" "}
                        {info.details}
                      </p>
                    </td>
                    <td>
                      <button
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                         onClick={() =>
                           setModalMoreView({ open: true, info })
                         }
                      >
                        Ver
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <ModalBaseLine
        open={modalMoreView.open}
        onclose={() => setModalMoreView({ open: false, info: {} })}
        info={modalMoreView.info}
      />
    </>
  );
};


