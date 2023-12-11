import { useNavigate, useParams } from "react-router-dom";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Email } from "../../interfaces/amm_im";
import {
  createEmailAmmApm,
  getEmailAmmApmId,
  updateEmailAmmApmId,
} from "../helpers/ServiceAmmApm";
import { toast } from "react-toastify";
import Fondo from "../../assets/fondoapm.jpg"
import EmailIcon from "../../assets/mail-modified.svg"

type InputChange = ChangeEvent<HTMLInputElement>;

export const CreateEmailApm = () => {
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
        title: 'Que bien parce!!!',
        text: 'Los datos fueron registrados correctamente',
        icon: 'success',
        confirmButtonColor: 'gray',
        color: 'black'

      })
      toast.success("Correo creado Exitosamente");
      setInfo(initialForm);
      
    } else {
      await updateEmailAmmApmId(params.id, info);
      Swal.fire({
        title: 'Mijo... Excelente!',
        text: 'Los cambios fueron exitósos',
        icon: 'success',
        confirmButtonColor: 'gray',
        color: 'black'

      })
    }
    navigate("/email_apm");
  };

  const getInfo = async(id: any) => {
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
    <>
    <div
    style={{ backgroundImage: `url(${Fondo})` }}
    className="h-screen bg-no-repeat bg-center bg-[length:1600px_800px] py-12"
    >
      <div 
      
      className="bg-white w-1/2 rounded-lg p-6 mx-auto shadow-lg shadow-gray-800 border border-gray-300  dark:bg-gray-800">
        <form onSubmit={handleSubmit}>
          <img src={EmailIcon} alt="" className="w-16 mx-auto hover:scale-125 duration-200" />
          <h1 className="text-center">Grupo de correos APM</h1>
          <div className="mx-12 py-8 text-xs">
            <div>
              <div className="relative mb-6">
                <input
                  type="text"
                  className=" w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black  "
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
                  className=" w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black  "
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
                  className=" w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black  "
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
                  className=" w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black  "
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
                className="text-black bg-yellow-400 hover:bg-yellow-300 py-2  rounded-lg text-sm px-5 .5 mx-auto"
              >
                Actualizar
              </button>
            ) : (
              <button
                type="submit"
                className="text-black bg-yellow-400 hover:bg-yellow-300 py-2  rounded-lg text-sm px-5 .5 mx-auto"
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
