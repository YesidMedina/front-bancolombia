import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  getAmmImFalse,
  getAmmImId,
  updateAmmImId,
} from "../helpers/ServiceAmmIm";
import jwt_decode from "jwt-decode";
import { Amm_im } from "../../interfaces/amm_im";
import { Table } from "../commons/Table";
import { ModalView } from "./ModalView";
import InfiniteScroll from "react-infinite-scroll-component";
import { getUserId } from "../helpers/ServiceUser";
import { getJobAmmApmFalse, getJobAmmApmId, updateJobAmmApmId } from "../helpers/ServiceAmmApm";
import { Job } from "../../interfaces/amm_apm";

export const RetiredJobHome = () => {
  const [information, setInformation] = useState<Job[]>([]);
  const [search, setSearch] = useState();
  const [currenPage, setCurrenPage] = useState(1);
  const [userInfo, setUserInfo] = useState();

  const [hasMore, setHasMore] = useState(true);
  const [modalMoreView, setModalMoreView] = useState<{
    open: boolean;
    info?: Object;
  }>({ open: false, info: {} });

  const loadJobAmmApmFalse = async (page: any, searchTxt: any) => {
    if (searchTxt !== "") {
      const respData = await getJobAmmApmFalse(page, searchTxt);
      setInformation([...respData.data.results]);
    } else {
      const respData = await getJobAmmApmFalse(page, "");
      if (respData.data.next === null) {
        setHasMore(false);
      }
      setInformation([...respData.data.results]);
    }
  };

  const loadPagination = async(page: any) => {
    const respData = await getJobAmmApmFalse(page, "");
      if (respData.data.next === null) {
        setHasMore(false);
      }
      setInformation([...information, ...respData.data.results]);

  }

  const userId = async () => {
    const resp = localStorage.getItem("token");
    const decode = jwt_decode(resp);
    const respData = await getUserId(decode["id"]);
    setUserInfo(respData.data.is_staff);
  };

  const handleChange = (e: any) => {
    setSearch(e.target.value);
    loadJobAmmApmFalse(1, e.target.value);
  };

  const handleDelete = async (id: number, oc_order: any) => {
    const resp = await getJobAmmApmId(id);
    const order = resp.data.order_oc;
    console.log(resp.data.order_oc);
    
    resp.data.status = true;
    resp.data.order_oc = order.concat(", ", oc_order);

    await updateJobAmmApmId(id, resp.data);
    loadJobAmmApmFalse(currenPage, "");
  };

  const reload = () => {
    window.location.reload();
  };

  const handleClick = (id: any) => {
    Swal.fire({
      title: "Alerta",
      text: `¿Está seguro que desea ingresar este registro ID ${id}?, Ingresa la OC`,
      icon: "error",
      input: "text",
      inputAttributes: {
        autocapitalize: "value",
      },
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText: "Si",
      confirmButtonColor: "red",
      denyButtonColor: "blue",
    }).then((response) => {
      if (response.isConfirmed) {
        Swal.fire(
          "Ya se Ingresó", `Registro ID ${id}`, "success"
        );
        handleDelete(id, response.value);
      } else if (response.isDenied) {
        Swal.fire("Ciudado", "No me asuste", "info");
      }
    });
  };

  useEffect(() => {

    loadPagination(currenPage);
  }, [currenPage]);

  useEffect(() => {
    userId();
  }, []);

  return (
    <>
      <div className="bg-emerald-600 h-auto dark:bg-gray-800">
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

        <InfiniteScroll
          dataLength={information.length}
          next={() => setCurrenPage(currenPage + 1)}
          hasMore={hasMore}
          loader={<div>...</div>}
        >
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 mx-4 ">
            <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400">
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
                {information?.map((info) => {
                  return (
                    <tr
                      className="bg-white border-b  hover:bg-gray-300 text-gray-900 dark:bg-gray-900 dark:text-gray-200"
                      key={info.id}
                    >
                      {info.status === true ? (
                        <input className="w-2 h-2 ml-1 bg-green-700 rounded-lg" />
                      ) : (
                        <input className="w-2 h-2 ml-1 bg-red-800 rounded-lg" />
                      )}
                      <td className="px-2 py-2 text-xs font-bold">{info.id}</td>
                      <td className="px-2 py-2 truncate capitalize">
                        {info.isiries}
                      </td>
                      <td className="px-2 py-2 capitalize">{info.subsistem}</td>
                      <td className="px-2 py-2 capitalize">
                        {info.instances}
                      </td>
                      <td>
                        <p className="px-2 py-2 w-28 truncate ...">
                          {" "}
                          {info.instances_affectation}
                        </p>
                      </td>
                      <td>
                      <p className="px-2 py-2 w-28 truncate ... capitalize">
                        {info.name_menu}
                      </p>
                      </td>
                      <td>
                      <p className="px-2 py-2 w-28 truncate ... capitalize">{info.id_divice}</p>
                      </td>
                      <td>
                      <p className="px-2 py-2 w-28 truncate ...">{info.menu_chksys}</p>
                      </td>
                      <td>
                        <p className="px-2 py-2 w-28 truncate ...">
                          {info.order_oc}
                        </p>
                      </td>
                      <td className="px-2 py-2 text-right">
                        <button
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          onClick={() => setModalMoreView({ open: true, info })}
                        >
                          Ver
                        </button>
                        {userInfo === true && (
                          <button
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
                            onClick={() => handleClick(info.id)}
                          >
                            {info.status ? false : true}
                            Activar
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </InfiniteScroll>
      </div>

      <ModalView
        open={modalMoreView.open}
        onclose={() => setModalMoreView({ open: false, info: {} })}
        info={modalMoreView.info}
      />
    </>
  );
};
