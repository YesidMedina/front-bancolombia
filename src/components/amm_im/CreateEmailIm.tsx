import { useNavigate, useParams } from "react-router-dom";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Email } from "../../interfaces/amm_im";
import {
  createEmailAmmIm,
  getEmailAmmImId,
  updateEmailAmmImId,
} from "../helpers/ServiceAmmIm";
import { toast } from "react-toastify";
import EmailIcon from "../../assets/mail-modified.svg"
import Fondo from "../../assets/fondoim.jpg"

type InputChange = ChangeEvent<HTMLInputElement>;

export const CreateEmailIm = () => {
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
      await createEmailAmmIm(info);
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
      await updateEmailAmmImId(params.id, info);
      Swal.fire({
        title: "Mijo... Excelente!",
        text: "Los cambios fueron exitósos",
        icon: "success",
        confirmButtonColor: "gray",
        color: "black",
      });
    }
    navigate("/email");
  };

  const getInfo = async (id: any) => {
    const resp = await getEmailAmmImId(id);

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
    <>
      <div
        style={{ backgroundImage: `url(${Fondo})` }}
        className="bg-white flex flex-col justify-center dark:bg-gray-900 h-screen bg-no-repeat bg-center bg-[length:1600px_800px] -my-16"
      >
        <div className="bg-white w-1/2 rounded-lg p-6 mx-auto my-24 shadow-lg shadow-gray-800 border border-gray-300 text-xs">
          <form onSubmit={handleSubmit}>
          <img src={EmailIcon} alt="" className="w-16 mx-auto hover:scale-125 duration-200" />
          <h1 className="text-center">Grupo de correos IM</h1>
            <div className="mx-12 py-12 ">
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
    </>
  );
};
