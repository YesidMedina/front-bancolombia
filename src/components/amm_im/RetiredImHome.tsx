import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getAmmIm, getAmmImId, updateAmmImId } from "../helpers/ServiceAmmIm";
import { Amm_im } from "../../interfaces/amm_im";
import { useNavigate } from "react-router-dom";
import { Table } from "../commons/Table";

export const RetiredImHome = () => {
  const navigate = useNavigate();
  const [information, setInformation] = useState<Amm_im[]>([]);
  const [table, setTable] = useState<Amm_im[]>([]);
  const [search, setSearch] = useState("");

  const loadAmmIm = async () => {
    const respData = await getAmmIm(false);
    setInformation(respData.data.results.sort());
    setTable(respData.data.results);
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
    console.log(result);
    setInformation(result);
  };

  const handleDelete = async (id: number, oc_order: any) => {
    const resp = await getAmmImId(id);
    const order = resp.data.order_number_oc;
    resp.data.status = true;
    resp.data.order_number_oc = order.concat(", ", oc_order);

    await updateAmmImId(id, resp.data);

    loadAmmIm();
  };

  const handleClick = (id: any) => {
    Swal.fire({
      title: "Alerta",
      text: "Está seguro que desea ingresar este registro?... Ingresa la OC",
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
      console.log(response);

      if (response.isConfirmed) {
        Swal.fire(
          "Ya se ingreso el servicio",
          "Siga en lo que estaba",
          "success"
        );
        handleDelete(id, response.value);
      } else if (response.isDenied) {
        Swal.fire("Ciudado", "No me asuste", "info");
      }
    });
  };

  useEffect(() => {
    loadAmmIm();
  }, []);

  return (
    <>
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

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 mx-16 ">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <Table
              titleE=" "
              title="ID"
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
                      {info.tool}
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
                      {info.name_device}
                    </td>
                    <td className="px-2 py-2">{info.ip_divice}</td>
                    <td className="px-2 py-2">{info.email}</td>
                    <td>
                      <p className="px-2 py-2 w-28 truncate ...">
                        {info.order_number_oc}
                      </p>
                    </td>
                    <td className="px-2 py-2 text-right">
                      <button
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => navigate(`/vista/${info.id}`)}
                      >
                        Ver
                      </button>
                      <button
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
                        onClick={() => handleClick(info.id)}
                      >
                        {info.status ? false : true}
                        Activar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
