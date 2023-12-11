import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  createEmailAmmApm,
  getEmailAmmApmId,
  updateEmailAmmApmId,
} from "../helpers/ServiceAmmApm";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { Email } from "../../interfaces/amm_im";

type propType = {
  open: boolean;
  onclose: () => void;
  id:any
};

type InputChange = ChangeEvent<HTMLInputElement>;

export const ModalCreateEmail: React.FC<propType> = ({
  open,
  onclose,

  
}) => {
  const navigate = useNavigate();
  const params = useParams();

  const initialForm = {
    id: 0,
    group_email: "",
    name: "",
    email_notification: "",
    order_oc: "",
  };

  const [info, setInfo] = useState<Email>(initialForm);

  const handleInput = (e: InputChange) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await createEmailAmmApm(info);
      Swal.fire({
        title: "Que bien parce!!!",
        text: "Los datos fueron registrados correctamente",
        icon: "success",
        confirmButtonColor: "gray",
        color: "black",
      });
      toast.success("Correo creado Exitosamente");
      setInfo(initialForm);
    } else {
      await updateEmailAmmApmId(params.id, info);
      Swal.fire({
        title: "Mijo... Excelente!",
        text: "Los cambios fueron exitósos",
        icon: "success",
        confirmButtonColor: "gray",
        color: "black",
      });
    }
    navigate("/email_apm");
  };

  const getInfo = async (id: any) => {
    const resp = await getEmailAmmApmId(id);

    const { group_email, name, email_notification, order_oc } = resp.data;
    setInfo({
      id,
      group_email,
      name,
      email_notification,
      order_oc,
    });
  };

  useEffect(() => {
    if (params.id) getInfo(params.id);
  }, []);
  return (
    <div className="w-full">
      <div
        className={`fixed inset-0 flex justify-center items-center
          transition-colors ${open ? "visible" : "invisible"}`}
        onClick={onclose}
      >
        <div
          className={` rounded-lg shadow p-6 transition-all w-3/6 border-black border dark:border-gray-300 bg-gray-300 dark:bg-gray-900
        ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
          onClick={(e) => e.stopPropagation()}
        >

          <h1 className="text-center">Crear grupos de correos</h1>
          <button
            className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-400
            bg-white hover:bg-gray-50 hover:text-gray-600"
            onClick={onclose}
          >
            x
          </button>

          <form onSubmit={handleSubmit}>
            <div className="mx-12 py-12 text-xs">
              <div>
                <div className="relative mb-6">
                  <input
                    type="text"
                    className=" w-full rounded border border-gray-500 px-3 py-2 text-black dark:text-gray-400  "
                    onChange={handleInput}
                    name="group_email"
                    value={info.group_email}
                    placeholder="Grupo email"
                    required
                  />
                </div>

                <div className="relative mb-6">
                  <input
                    type="text"
                    className=" w-full rounded border border-gray-500  px-2 py-2 text-black dark:text-gray-400  "
                    onChange={handleInput}
                    name="name"
                    value={info.name}
                    placeholder="Nombre"
                    required
                  />
                </div>
                <div className="relative mb-6">
                  <input
                    type="text"
                    className=" w-full rounded border border-gray-500 px-2 py-2 text-black dark:text-gray-400  "
                    onChange={handleInput}
                    name="email_notification"
                    value={info.email_notification}
                    placeholder="Correo notificación"
                    required
                  />
                </div>
                <div className="relative mb-6">
                  <input
                    type="text"
                    className=" w-full rounded border border-gray-500 px-2 py-2 text-black dark:text-gray-400  "
                    onChange={handleInput}
                    name="order_oc"
                    value={info.order_oc}
                    placeholder="Numero de Orden OC"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="-mt-8 ml-12">
              {params.id ? (
                <button
                  type="submit"
                  className="text-black bg-yellow-400 hover:bg-yellow-300 py-2 rounded-lg text-xs px-5 .5 mx-auto"
                >
                  Actualizar
                </button>
              ) : (
                <button
                  onClick={onclose}
                  type="submit"
                  className="text-black bg-yellow-400 hover:bg-yellow-300 py-2 rounded-lg text-xs px-5 .5 mx-auto"
                >
                  Guardar
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
