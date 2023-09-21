import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import { useState, useRef } from "react";
import { FaRegEye } from "react-icons/fa";
import Fondo from "../../assets/fondologin.jpeg";
import { getUsers } from "../helpers/ServiceUser";


const captcha = import.meta.env.VITE_KEY_RECAPTCHA;

export const LoginHome = () => {
  let params = useParams();
  
  
  const recaptcha = useRef(null);

  const navigate = useNavigate();

  const [captchaLike, setCaptchaLike] = useState(null);

  const getUser = async (username: any, password: any) => {
    const users = await getUsers();
    

    const user = users.data.find((value: any) => {
      const userExist =
        value.username === username && value.password === password;
      return userExist;
    });
    if (user) {
      localStorage.setItem('user_id', user.id)
      navigate(`/catalogo`);
      toast.success(`Bienvenido ${username}`);
    } else {
      Swal.fire({
        title: "El Usuario no está registrado",
        text: "Póngase en contacto con el administrador",
        icon: "warning",
        confirmButtonColor: "gray",
        color: "black",
      });
      toast.error("El Usuario no esta registrado");
    }
  };

  const onChange = () => {
    if (recaptcha.current.getValue()) {
      setCaptchaLike(true);
    }
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((values: any) => {
    if (recaptcha.current.getValue()) {
      getUser(values.username, values.password);
      setCaptchaLike(true);
    } else {
      setCaptchaLike(false);
    }
  });

  const [shown, setShown] = useState(false);
  const switchShown = () => setShown(!shown);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${Fondo})` }}
        className="bg-auto bg-no-repeat bg-center "
      >
        <div className=" mt-12 h-screen w-full py-12 dark:bg-gray-900">
          <div className="bg-white flex flex-col justify-center dark:bg-gray-900">
            <form
              onSubmit={onSubmit}
              className="max-w-[500px] w-full mx-auto bg-gray-100 p-8 px-8
            rounded-sm shadow-lg shadow-gray-800 border-2 border-gray-300 dark:bg-gray-900 dark:text-white"
            >
              <h2 className="text-lg text-black text-center dark:text-white">
                Inicio de sesión
              </h2>
              <div className="flex flex-col text-grey-800 py-2">
                <label> Usuario </label>
                <input
                  className="rounded-md mt-2 p-2 border-2 border-gray-400 dark:text-black"
                  type="text"
                  required
                  {...register("username", { required: true })}
                />
              </div>
              <div className="flex flex-col text-grey-800 py-2 relative">
                <label> Contraseña </label>
                <input
                  className="rounded-md mt-2 p-2 border-2 border-gray-400 text-center dark:text-black"
                  type={shown ? "text" : "password"}
                  required
                  {...register("password", { required: true })}
                />
                <FaRegEye
                  className=" text-gray-500 absolute w-10  mt-11 "
                  onClick={switchShown}
                />
              </div>
              <div className="mx-20">
                <ReCAPTCHA
                  ref={recaptcha}
                  sitekey={captcha}
                  onChange={onChange}
                  required
                />
              </div>

              {captchaLike === false && (
                <div className="text-red-600 text-center text-xs">
                  Captcha obligatorio
                </div>
              )}

              {captchaLike === true && (
                <div className="text-center p-4">
                  <button
                    type="submit"
                    className="text-black bg-yellow-400 hover:bg-yellow-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                  >
                    {" "}
                    Continuar
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
