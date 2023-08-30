import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getAmmApm, deleteAmmApmId } from "../helpers/ServiceAmmApm";
import { Amm_apm } from "../../interfaces/amm_apm";
import { Modal } from "../commons/Modal";
import { useNavigate } from "react-router-dom";
import { Table } from "../commons/Table";

export const ArchiveApmHome = () => {
  const navigate = useNavigate();
  const [information, setInformation] = useState<Amm_apm[]>([]);
  const [modal, setModal] = useState(false);
  const [table, setTable] = useState<Amm_apm[]>([]);
  const [search, setSearch] = useState("");
  const [currenPage, setCurrenPage] = useState(0);

  const loadAmmIm = async () => {
    const respData = await getAmmApm();
    setInformation(respData.data);
    setTable(respData.data);
  };

  const page = information.slice(currenPage, currenPage + 15);

  const back = () => {
    if (currenPage > 0) {
      setCurrenPage(currenPage - 15);
    }
  };

  const next = () => {
    setCurrenPage(currenPage + 15);
  };

  const handleChange = (e: any) => {
    setSearch(e.target.value);
    filter(e.target.value);
  };

  const filter = (see: any) => {
    const result = table.filter((element) => {
      if (
        element.service_manager
          .toString()
          .toLowerCase()
          .includes(see.toLowerCase()) ||
        element.name_device
          .toString()
          .toLowerCase()
          .includes(see.toLowerCase()) ||
        element.description
          .toString()
          .toLowerCase()
          .includes(see.toLowerCase()) ||
        element.metric_configuration
          .toString()
          .toLowerCase()
          .includes(see.toLowerCase()) ||
        element.ip_divice.includes(see.toLowerCase())
      ) {
        return element;
      }
    });
    console.log(result);
    setInformation(result);
  };

  const handleDelete = async (id: number) => {
    await deleteAmmApmId(id);

    loadAmmIm();
  };

  const handleClick = (id: number) => {
    Swal.fire({
      title: "Mosca pues...",
      text: "Está seguro que desea eliminar este registro?... Ingresa la OC",
      icon: "error",
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText: "Si",
      confirmButtonColor: "red",
      denyButtonColor: "blue",
    }).then((response) => {
      if (response.isConfirmed) {
        Swal.fire("Parce ya se eliminó", "Siga en lo que estaba", "success");
        handleDelete(id);
      } else if (response.isDenied) {
        Swal.fire("Ojo socio...", "No me asuste", "info");
      } else {
        Swal.fire("Error", "Oh!!, Algo no esperado", "error");
      }
    });
  };
  useEffect(() => {
    loadAmmIm();
  }, []);

  return (
    <>
      <div className="bg-yellow-100 bg-gradient-to-r from-gray-400">
        <div className="relative w-1/2 mx-auto mt-4">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-800 bg-gray-50 rounded-lg  border-2  border-gray-400 "
            placeholder="Buscar por Servicio, Nombre dispositivo ó IP..."
            value={search}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col items-end sm:mr-12 mr-2 -mt-8">
        <button className="bg-red-400 rounded-lg w-20 h-8 text-white"
        onClick={() => handleDelete}
        >Eliminar</button>
        </div>

       

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 mx-2 sm:mx-12 ">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <Table
              title1="Colección global"
              title2="Filial"
              title3="Servicio"
              title4="Gestor"
              title5="Descripción"
              title6="IP"
              title7="Correo"
              title8="OC"
            />
            <tbody>
              {page?.map((info) => {
                return (
                  <tr
                    className="bg-white border-b  hover:bg-gray-300 text-gray-900"
                    key={info.id}
                  >
                    <td className="px-2 py-2 truncate capitalize">
                      {info.global_collection}
                    </td>
                    <td className="px-2 py-2 capitalize">{info.filial}</td>
                    <td className="px-2 py-2 capitalize">
                      {info.service_manager}
                    </td>
                    <td>
                      <p className="px-2 py-2 w-80 truncate ...">
                        {" "}
                        {info.description}
                      </p>
                    </td>
                    <td className="px-2 py-2 truncate capitalize">
                      {info.gestor_broker}
                    </td>
                    <td className="px-2 py-2">{info.ip_divice}</td>
                    <td className="px-2 py-2">{info.email}</td>
                    <td className="px-2 py-2">{info.order_number_oc}</td>
                    <td className="px-2 py-2 text-right">
                      <button
                        onClick={() => setModal(true)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Ver
                        <Modal
                          visible={modal}
                          onClose={() => setModal(false)}
                          onClick={`${info.id}`}
                        />
                      </button>
                      <button
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
                        onClick={() => navigate(`/update_apm/${info.id}`)}
                      >
                        Editar
                      </button>
                      <button
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
                        onClick={() => handleClick(info.id)}
                      >
                        Eliminar
                      </button>
                      <div className="mr-4">
                        <input
                          id="link-checkbox"
                          type="checkbox"
                          value=""
                          className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                       
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className=" p-12 relative flex flex-col items-center">
            <button
              className="w-28 mr-24  text-center py-2 bg-yellow-400
              hover:bg-yellow-200 text-black rounded-lg absolute"
              onClick={back}
            >
              Back
            </button>

            <button
              className="w-28 ml-40 py-2 bg-yellow-400
          hover:bg-yellow-200 text-black rounded-lg absolute"
              onClick={next}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
