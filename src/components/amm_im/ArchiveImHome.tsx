import { useRef } from "react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { DownloadTableExcel } from "react-export-table-to-excel";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
import {
  getAmmIm,
  getAmmImId,
  updateAmmImId,
  updateSeveralAmmIm,
} from "../helpers/ServiceAmmIm";
import InfiniteScroll from "react-infinite-scroll-component";
import { Amm_im } from "../../interfaces/amm_im";
import { useNavigate } from "react-router-dom";
import { Table } from "../commons/Table";
import { Modal } from "../commons/Modal";

export const ArchiveImHome = () => {
  const navigate = useNavigate();
  const [information, setInformation] = useState<Amm_im[]>([]);
  const [table, setTable] = useState<Amm_im[]>([]);
  const [search, setSearch] = useState("");
  const [selection, setSelection] = useState<Amm_im[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [modalMoreView, setModalMoreView] = useState<{
    open: boolean;
    info?: Object;
  }>({ open: false, info: {} });
  const [arrayInfo, setArrayInfo] = useState([]);
  const tableRef = useRef(null);

  // const {
  //   transcript,
  //   listening,
  //   resetTranscript,
  //   browserSupportsSpeechRecognition,
  // } = useSpeechRecognition();

  // if (!browserSupportsSpeechRecognition) {
  //   return <span>Browser doesn't support speech recognition.</span>;
  // }

  const loadAmmIm = async () => {
    try {
      const respData = await getAmmIm(true);
      setTimeout(() => {
        setInformation(respData.data.results);

        setTable(respData.data.results);
      }, 500);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: any) => {
    setSearch(e.target.value);
    filter(e.target.value);
  };

  const filter = (see: any) => {
    const result = table.filter((element) => {
      if (
        element.id?.toString().toLowerCase().includes(see.toLowerCase()) ||
        element.service_manager
          ?.toString()
          .toLowerCase()
          .includes(see.toLowerCase()) ||
        element.name_device
          ?.toString()
          .toLowerCase()
          .includes(see.toLowerCase()) ||
        element.description
          ?.toString()
          .toLowerCase()
          .includes(see.toLowerCase()) ||
        element.item_configuration
          ?.toString()
          .toLowerCase()
          .includes(see.toLowerCase()) ||
        element.ip_divice?.includes(see.toLowerCase())
      ) {
        return element;
      }
    });
    setInformation(result);
  };

  const handleDelete = async (id: number, oc_order: any) => {
    const resp = await getAmmImId(id);

    const order = resp.data.order_number_oc;
    resp.data.status = false;
    resp.data.order_number_oc = order.concat(", ", oc_order);

    await updateAmmImId(id, resp.data);

    loadAmmIm();
  };

  const handleDeleteCheckbox = async (
    infoToUpdate: Array<{}>,
    oc_order: any
  ) => {
    await updateSeveralAmmIm(infoToUpdate, oc_order);

    loadAmmIm();
  };

  const handleClick = (id: any) => {
    Swal.fire({
      title: "Cuidado pues...",
      text: "Está seguro que desea eliminar este registro?... Ingresa la OC",
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
        console.log(response);
        Swal.fire("Ya se eliminó", "Siga en lo que estaba", "success");
        handleDelete(id, response.value);
        deleteCheckbox(response.value);
      } else if (response.isDenied || response.value == "") {
        Swal.fire("Ojo!!...", "No me asuste", "info");
      } else if (response.isDismissed) {
        Swal.fire("Ocurrió un error inesperado", "error");
      } else {
        Swal.fire("Error de servidor", "error");
      }
    });
  };

  // const ver = async(id:any) => {
  //   const resp = await getAmmImId(id)
  //   setSelection(resp.data)
  //   console.log(resp.data);

  // }

  const deleteCheckbox = (oc_order: any) => {
    handleDeleteCheckbox(arrayInfo, oc_order);
  };

  const clickCheckBox = (arrayInfo: any) => {
    setArrayInfo((previousInfo) => [...previousInfo, arrayInfo]);
  };

  console.log(arrayInfo);

  useEffect(() => {
    loadAmmIm();
  }, []);

  return (
    <>
      {/* <div>
        <p>Microphone: {listening ? "on" : "off"}</p>
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
      </div> */}

      <div className="bg-gray-400 dark:bg-gray-800">
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
        <div>
          <div className="flex flex-col items-end sm:mr-12 -mt-8">
            <button
              onClick={() => handleClick(information.find((index) => index.id))}
              className="bg-red-400 rounded-lg w-20 h-8 text-white mr-8"
            >
              Eliminar
            </button>
          </div>
          <DownloadTableExcel
            filename="AMM_IM"
            sheet="AMM_IM"
            currentTableRef={tableRef.current}
          >
            <div className="flex justify-end mr-44 -mt-8 ">
              <button className="bg-green-600 rounded-lg w-28 h-8 text-white  ">
                {" "}
                Export excel{" "}
              </button>
            </div>
          </DownloadTableExcel>
        </div>
        <div
          className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 mx-16"
          id="scroll-table"
        >
          <InfiniteScroll
            dataLength={information.length}
            next={loadAmmIm}
            hasMore={hasMore}
            loader={
              <div className="mx-auto w-32 h-56">
                <svg
                  aria-hidden="true"
                  className="w-24 h-24 mr-2 mt-24 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            }
            scrollableTarget="scroll-table"
          >
            <table
              ref={tableRef}
              className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <Table
                titleE=" "
                title="Id"
                title1="Herramienta"
                title2="Filial"
                title3="Servicio"
                title4="Descripción"
                title5="Nombre Dispositivo"
                title6="IP"
                title7="Correo"
                title8="OC"
              />
              <tbody>
                {information?.map((info) => {
                  return (
                    <tr
                      className="bg-white border-b  hover:bg-gray-300 text-gray-900 dark:bg-gray-900 dark:text-white"
                      key={info.id}
                    >
                      {info.status === true ? (
                        <input className="w-2 h-2 ml-1 bg-green-700 rounded-lg" />
                      ) : (
                        <input className="w-2 h-2 bg-red-800 rounded-lg" />
                      )}
                      <td className="px-2 py-2 text-xs font-bold ">
                        {info.id}
                      </td>
                      <td className="px-2 py-2 truncate capitalize">
                        {info.tool}
                      </td>
                      <td className="px-2 py-2 capitalize">{info.filial}</td>
                      <td>
                        <p className="px-2 py-2 w-40 truncate ...">
                          {" "}
                          {info.service_manager}
                        </p>
                      </td>
                      <td>
                        <p className="px-2 py-2 w-40 truncate ...">
                          {" "}
                          {info.description}
                        </p>
                      </td>
                      <td>
                        <p className="px-2 py-2 w-40 truncate ...">
                          {" "}
                          {info.name_device}
                        </p>
                      </td>
                      <td className="px-2 py-2">{info.ip_divice}</td>
                      <td>
                        <p className="px-2 py-2 w-36 truncate ...">
                          {" "}
                          {info.email}
                        </p>
                      </td>
                      <td>
                        <p className="px-2 py-2 w-28 truncate ...">
                          {info.order_number_oc}
                        </p>
                      </td>
                      <td className="px-2 py-2 text-right">
                        {/* <button
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          onClick={() => navigate(`/vista/${info.id}`)}
                        >
                          Ver
                        </button> */}
                        <button
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          onClick={() => setModalMoreView({ open: true, info })}
                        >
                          Ver
                        </button>

                        <button
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
                          onClick={() => navigate(`/update/${info.id}`)}
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
                          className=" ml-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </InfiniteScroll>
        </div>
      </div>
      <Modal
        open={modalMoreView.open}
        onclose={() => setModalMoreView({ open: false, info: {} })}
        info={modalMoreView.info}
      />
    </>
  );
};
