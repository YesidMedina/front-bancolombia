import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Table } from "../commons/Table";
import { ModalView } from "./ModalView";
import InfiniteScroll from "react-infinite-scroll-component";
import { getUserId } from "../helpers/ServiceUser";
import jwt_decode from "jwt-decode";
import {
  getJobAmmApmId,
  getJobAmmApmTrue,
  updateJobAmmApmId,
} from "../helpers/ServiceAmmApm";
import { Job } from "../../interfaces/amm_apm";
import { ModalJob } from "./ModalJob";

export const JobHome = () => {
  const navigate = useNavigate();
  const [information, setInformation] = useState<Job[]>([]);
  const [currenPage, setCurrenPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [modalMoreView, setModalMoreView] = useState<{
    open: boolean;
    info?: Object;
  }>({ open: false, info: {} });

  const [arrayInfo, setArrayInfo] = useState([]);
  const [userInfo, setUserInfo] = useState();

  const loadJobAmmApmTrue = async (page: any, searchTxt: any) => {
    if (searchTxt !== "") {
      const respData = await getJobAmmApmTrue(page, searchTxt);
      setInformation([...respData.data.results]);
    } else {
      const respData = await getJobAmmApmTrue(page, "");
      if (respData.data.next === null) {
        setHasMore(false);
      }
      setInformation([...respData.data.results]);
    }
  };

  const loadPagination = async (page: any) => {
    const respData = await getJobAmmApmTrue(page, "");
    if (respData.data.next === null) {
      setHasMore(false);
    }
    setInformation([...information, ...respData.data.results]);
  };

  const userId = async () => {
    const resp = localStorage.getItem("token");
    const decode = jwt_decode(resp);
    const respData = await getUserId(decode["id"]);
    setUserInfo(respData.data.is_staff);
  };

  const handleChange = (e: any) => {
    loadJobAmmApmTrue(1, e.target.value);
  };

  const handleDelete = async (id: number, oc_order: any) => {
    const resp = await getJobAmmApmId(id);
    const order = resp.data.order_oc;
    resp.data.status = false;
    resp.data.order_oc = order.concat(", ", oc_order);

    await updateJobAmmApmId(id, resp.data);
    loadJobAmmApmTrue(currenPage, "");
  };


  const handleClick = (id: any) => {
    Swal.fire({
      title: "Cuidado pues...",
      text: `¿Está seguro que desea eliminar este registro ID ${id}?, Ingresa la OC`,
      icon: "error",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },

      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText: "Si",
      confirmButtonColor: "red",
      denyButtonColor: "blue",
    }).then((response) => {
      if (!response.value) {
        return Swal.fire("Necesita ingresar la OC", "error");
      }
      // if (!response.isDenied) {
      //   return Swal.fire("Error en el sistema", "error");
      // }
      if (response.isConfirmed) {
        Swal.fire("Ya se eliminó", `Registro ID ${id}`, "success");
        handleDelete(id, response.value);

        // deleteCheckbox(response.value); // esto se debe de cambiar para otro boton aparte
      } else if (response.isDenied) {
        return Swal.fire("Ojo!!...", "No me asuste", "info");
      } else if (response.isDismissed) {
        Swal.fire("Ocurrió un error inesperado", "error");
      } else {
        Swal.fire("Error de servidor", "error");
      }
    });
  };

  // const deleteCheckbox = (oc_order: any) => {
  //   handleDeleteCheckbox(arrayInfo, oc_order);
  //   console.log(arrayInfo, oc_order);
  // };

  const clickCheckBox = (arrayInfo: any) => {
    setArrayInfo((previousInfo) => [...previousInfo, arrayInfo]);
    console.log(arrayInfo);
  };

  const reload = () => {
    window.location.reload();
  };

  useEffect(() => {
    loadPagination(currenPage);
  }, [currenPage]);

  useEffect(() => {
    userId();
  }, []);

  return (
    <>
      <div className="bg-emerald-600 dark:bg-gray-800">
        <div className=" w-1/2 mx-auto mt-4 sticky ">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-xs text-gray-800 bg-gray-50 rounded-lg  border-2  border-gray-400 "
            placeholder="Buscar por Servicio, Nombre dispositivo ó IP..."
            onChange={handleChange}
          />
          <div className=" flex flex-col items-end  ">
            <a onClick={reload} className="absolute -mt-8 mr-3.5">
              X
            </a>
          </div>
        </div>

        <div>
          {userInfo === true && (
            <div className="flex flex-col items-end sm:mr-12 -mt-8">
              <button
                onClick={() =>
                  handleClick(information.find((index) => index.id))
                }
                className="bg-red-400 rounded-lg w-20 h-8 text-white mr-8"
              >
                Eliminar
              </button>
            </div>
          )}
        </div>

        <InfiniteScroll
          dataLength={information.length}
          next={() => setCurrenPage(currenPage + 1)}
          hasMore={hasMore}
          loader={<div>Loading</div>}
        >
          <div className=" overflow-x-auto shadow-md sm:rounded-lg mt-4 mx-4">
            <table className="overflow-y-auto w-full text-xs text-left text-gray-500 dark:text-gray-400">
              
              <Table
                titleE=""
                title="ID"
                title1="Isiries"
                title2="Sub sistema"
                title3="Intancias"
                title4="Afectación"
                title5="N. Menú"
                title6="id_divice"
                title7="Menú CHKSYS"
                title8="OC"
              />
              <tbody>
                {information?.map((info, index) => {
                  return (
                    <tr
                      className="bg-white border-b  hover:bg-green-200 text-gray-900 dark:bg-gray-900 dark:text-gray-400"
                      key={index}
                    >
                      {info.maintenance === true ? (
                        <input className="w-2 h-2 ml-2 mt-3.5 bg-violet-500 rounded-lg" />
                      ) : (
                        <input className="w-2 h-2 ml-2 mt-3.5 bg-green-500 rounded-lg" />
                      )}
                      <td className="px-2 py-2 text-xs font-bold ">
                        {info.id}
                      </td>
                      <td className="px-2 py-2 truncate capitalize">
                        {info.isiries}
                      </td>
                      <td>
                        <p className="px-2 py-2 w-28 truncate ...">
                          {" "}
                          {info.subsistem}
                        </p>
                      </td>
                      <td>
                        <p className="px-2 py-2 w-28 truncate ...">
                          {" "}
                          {info.instances}
                        </p>
                      </td>
                      <td>
                        <p className="px-2 py-2 w-28 truncate ...">
                          {" "}
                          {info.instances_affectation}
                        </p>
                      </td>
                      <td>
                        <p className="px-2 py-2 w-28 truncate ...">{info.name_menu} </p>
                      </td>
                      <td>
                        <p className="px-2 py-2 w-28 truncate ...">
                          {" "}
                          {info.id_divice}
                        </p>
                      </td>
                      <td>
                        <p className="px-2 py-2 w-28 truncate ...">
                          {info.menu_chksys}
                        </p>
                      </td>
                      <td>
                        <p className="px-2 py-2 w-28 truncate ...">
                          {info.order_oc}
                        </p>
                      </td>
                      <td className="px-2 py-2 text-right">
                        <div>
                          <button
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            onClick={() =>
                              setModalMoreView({ open: true, info })
                            }
                          >
                            Ver
                          </button>

                          {userInfo === true && (
                            <>
                              <button
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
                                onClick={() => navigate(`/update_job/${info.id}`)}
                              >
                                Editar
                              </button>
                              <button
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
                                onClick={() => handleClick(info.id)}
                              >
                                Eliminar
                              </button>

                              <input
                                onClick={() => clickCheckBox(info)}
                                id="link-checkbox"
                                type="checkbox"
                                value=""
                                className="ml-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </InfiniteScroll>
      </div>
      <ModalJob
        open={modalMoreView.open}
        onclose={() => setModalMoreView({ open: false, info: {} })}
        info={modalMoreView.info}
      />
    </>
  );
};
