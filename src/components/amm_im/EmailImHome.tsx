import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Email } from "../../interfaces/amm_im";
import { deleteEmailAmmIm, getEmailAmmIm } from "../helpers/ServiceAmmIm";
import { Table } from "../commons/Table";
import { useNavigate } from "react-router-dom";

export const EmailImHome = () => {
  const navigate = useNavigate();

  const [information, setInformation] = useState<Email[]>([]);
  const [table, setTable] = useState<Email[]>([]);
  const [search, setSearch] = useState("");
  const [currenPage, setCurrenPage] = useState(0);

  const loadAmmIm = async () => {
    const respData = await getEmailAmmIm();
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

  const filter = (bomba: any) => {
    const result = table.filter((element) => {
      if (
        element.id
          .toString()
          .toLowerCase()
          .includes(bomba.toLowerCase()) ||
        element.group_email
          .toString()
          .toLowerCase()
          .includes(bomba.toLowerCase()) ||
        element.name.toString().toLowerCase().includes(bomba.toLowerCase())
      ) {
        return element;
      }
    });
    setInformation(result);
  };

  const handleDelete = async (id: number) => {
     await deleteEmailAmmIm(id);
    

    loadAmmIm();
  };

  const handleClick = (id: any) => {
    Swal.fire({
      title: "Alerta",
      text: "Si eliminas este registro no se podrá recuperar",
      icon: "error",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText: "Si",
      confirmButtonColor: "red",
      denyButtonColor: "yellow",
      denyButtonAriaLabel: 'black'
    }).then((response) => {
      console.log(response);

      if (response.isConfirmed) {
        Swal.fire(
          "Correo eliminado",
          "Siga en lo que estaba",
          "success"
        );
        handleDelete(id);
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
      <div className="bg-yellow-100 bg-gradient-to-r h-auto from-gray-400 dark:bg-gray-600">
        <div className="relative w-1/2 mx-auto mt-4">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-800 bg-gray-50 rounded-lg border-2 border-gray-400 "
            placeholder="Buscar por Servicio, Nombre dispositivo ó IP..."
            value={search}
            onChange={handleChange}
          />
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 mx-32">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <Table
              title= 'ID'
              title1="Grupo de correo"
              title2="Nombre"
              title3="Correo de notificación"
              title4="Orden de cambio"
            />
            <tbody>
              {page.map((info) => {
                return (
                  <tr
                    className="bg-white border-b hover:bg-gray-300 text-gray-900 dark:bg-gray-900 dark:text-gray-200"
                    key={info.id}
                  >
                    <td className="px-2 py-2 capitalize">{info.id}</td>
                    <td className="px-2 py-2 capitalize">{info.group_email}</td>
                    <td className="px-2 py-2 capitalize">{info.name}</td>
                    <td className="px-2 py-2">{info.email_notification}</td>
                    <td className="px-2 py-2">{info.order_oc}</td>

                    <td className="px-2 py-2 text-right">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
                        onClick={() => navigate(`/update_email/${info.id}`)}
                      >
                        Editar
                      </a>
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
                        onClick={() => handleClick(info.id)}
                      >
                        Eliminar
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="p-12 relative flex flex-col items-center">
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
