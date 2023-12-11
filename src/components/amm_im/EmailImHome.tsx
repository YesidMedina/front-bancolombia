import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Email } from "../../interfaces/amm_im";
import {
  deleteEmailAmmIm,
  getAmmImId,
  getEmailAmmIm,
  getEmailAmmImId,
} from "../helpers/ServiceAmmIm";
import { Table } from "../commons/Table";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import InfiniteScroll from "react-infinite-scroll-component";
import { ModalEmail } from "./ModalEmail";
import { getUserId } from "../helpers/ServiceUser";
import { ModalCreateEmail } from "./ModalCreateEmail";

export const EmailImHome = () => {
  const navigate = useNavigate();

  const [information, setInformation] = useState<Email[]>([]);
  const [currenPage, setCurrenPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const [modalMoreView, setModalMoreView] = useState<{
    open: boolean;
    info?: Object;
  }>({ open: false, info: {} });

  const [modalCreate, setModalCreate] = useState<{
    open: boolean;
    info?: Object;
  }>({ open: false, info: {} });

  const loadAmmIm = async (page: any, searchTxt: any) => {
    if (searchTxt !== "") {
      const respData = await getEmailAmmIm(page, searchTxt);
      setInformation([...respData.data.results]);
    } else {
      const respData = await getEmailAmmIm(page, "");
      if (respData.data.next === null) {
        setHasMore(false);
      }
      setInformation([...respData.data.results]);
    }
  };

  const loadPagination = async (page: any) => {
    const respData = await getEmailAmmIm(page, "");
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
    loadAmmIm(1, e.target.value);
  };

  const handleDelete = async (id: number) => {
    await deleteEmailAmmIm(id);
    loadAmmIm(currenPage, "");
  };

  const handleClick = (id: any) => {
    Swal.fire({
      title: "Alerta",
      text: `Si eliminas este registro ID ${id} no se podrá recuperar`,
      icon: "error",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText: "Si",
      confirmButtonColor: "red",
      denyButtonColor: "yellow",
      denyButtonAriaLabel: "black",
    }).then((response) => {
      if (response.isConfirmed) {
        Swal.fire("Correo eliminado", "Siga en lo que estaba", "success");
        handleDelete(id);
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
      <div className="bg-gray-400 h-auto from-gray-400 dark:bg-gray-600">
        <div className="relative w-1/2 mx-auto mt-4">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-xs text-gray-800 bg-gray-50 rounded-lg border-2 border-gray-400 "
            placeholder="Buscar por Servicio, Nombre dispositivo ó IP..."
            onChange={handleChange}
          />
        </div>

        <div>
          {userInfo === true && (
            <div className="flex flex-col items-end sm:mr-12 -mt-8">
              <button
                onClick={() => setModalCreate({ open: true })}
                className="bg-green-600 rounded-lg w-20 h-8 text-white mr-8 text-xs"
              >
                Crear
              </button>
            </div>
          )}
        </div>

        <InfiniteScroll
          dataLength={information.length}
          next={() => setCurrenPage(currenPage + 1)}
          hasMore={hasMore}
          loader={<div>...</div>}
        >
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 mx-16">
            <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400">
              <Table
                titleE="ID"
                title="Grupo de correo"
                title1="Nombre"
                title2="Correo de notificación"
                title3="OC"
              />
              <tbody>
                {information.map((info) => {
                  return (
                    <tr
                      className="bg-white border-b hover:bg-gray-300 text-gray-900 dark:bg-gray-900 dark:text-gray-200"
                      key={info.id}
                    >
                      <td className="px-2 py-2 capitalize font-bold">
                        {info.id}
                      </td>

                      <td>
                        <p className="px-2 py-2 w-60 truncate ...">
                          {" "}
                          {info.group_email}
                        </p>
                      </td>

                      <td>
                        <p className="px-2 py-2 w-60 truncate ...">
                          {" "}
                          {info.name}
                        </p>
                      </td>

                      <td>
                        <p className="px-2 py-2 w-60 truncate ...">
                          {" "}
                          {info.email_notification}
                        </p>
                      </td>
                      <td>
                        <p className="px-2 py-2 w-40 truncate ...">
                          {" "}
                          {info.order_oc}
                        </p>
                      </td>

                      <td className="px-2 py-2 text-right w-40">
                        <button
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          onClick={() => setModalMoreView({ open: true, info })}
                        >
                          Ver
                        </button>
                        {userInfo === true && (
                          <>
                            <button
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
                              onClick={()=> navigate(`/update_email/${info.id}`)}
                            >
                              Editar
                            </button>
                            <button
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
                              onClick={() => handleClick(info.id)}
                            >
                              Eliminar
                            </button>
                          </>
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
      <ModalEmail
        open={modalMoreView.open}
        onclose={() => setModalMoreView({ open: false, info: {} })}
        info={modalMoreView.info}
      />

      <ModalCreateEmail
        open={modalCreate.open}
        onclose={() => setModalCreate({ open: false, info: {} })}
        id={modalCreate.info}
      />
    </>
  );
};
