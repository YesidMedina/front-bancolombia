import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import { useState, useRef, FormEvent, useEffect } from "react";
import { FaRegEye } from "react-icons/fa";
import Fondo from "../../assets/fondologin.jpeg";
import { createLogin, getUserId, getUsers } from "../helpers/ServiceUser";
import { log } from "util";
import { Users } from "../../interfaces/users";
import { userInfo } from "os";
import { error } from "console";
import { AxiosError } from "axios";
import jwt_decode from "jwt-decode";

const captcha = import.meta.env.VITE_KEY_RECAPTCHA;

export const LoginHome = () => {
  const navigate = useNavigate();

  const initianlogin = { username: "", password: "" };

  const [date, setDate] = useState<Users>(initianlogin);

  const getUser = async (username: any, password: any) => {
    try {
      const users = await createLogin(date);
      localStorage.setItem("token", JSON.stringify(users.data.jwt));
      setDate(users.data.jwt);
      console.log(users.data.jwt);
      const decode = jwt_decode(users.data.jwt);
      console.log(decode);
      const resp = await getUserId(decode.id)
      console.log(resp);
      

    } catch (error) {
      console.log(error);
    }

    if (date) {
      
      
      

      navigate(`/catalogo`);
      toast.success(`Bienvenido ${username}`);
    } else {
      console.log(AxiosError.ERR_BAD_RESPONSE);
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

  const handleInput = (e: any) => {
    setDate({ ...date, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (date) {
      const resp = await createLogin(date);
      setDate(resp.data);
      console.log(resp.data);
      getUser(date, resp);
      JSON.parse(localStorage.getItem(resp.data));
      navigate(`/catalogo`);
    } else {
      Swal.fire({
        title: "El Usuario no está registrado",
        text: "Póngase en contacto con el administrador",
        icon: "warning",
        confirmButtonColor: "gray",
        color: "black",
      });
    }
  };

  const [shown, setShown] = useState(false);
  const switchShown = () => setShown(!shown);

  useEffect(() => {}, []);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${Fondo})` }}
        className="bg-auto bg-no-repeat bg-center "
      >
        <div className=" mt-12 h-screen w-full py-12 dark:bg-gray-900">
          <div className="bg-white flex flex-col justify-center dark:bg-gray-900">
            <form
              onSubmit={handleSubmit}
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
                  onChange={handleInput}
                  name="username"
                  value={date.username}

                  // {...register("username", { required: true })}
                />
              </div>
              <div className="flex flex-col text-grey-800 py-2 relative">
                <label> Contraseña </label>
                <input
                  className="rounded-md mt-2 p-2 border-2 border-gray-400 text-center dark:text-black"
                  type={shown ? "text" : "password"}
                  required
                  onChange={handleInput}
                  name="password"
                  value={date.password}

                  // {...register("password", { required: true })}
                />
                <FaRegEye
                  className=" text-gray-500 absolute w-10  mt-11 "
                  onClick={switchShown}
                />
              </div>
              {/* <div className="mx-20">
                <ReCAPTCHA
                  ref={recaptcha}
                  sitekey={captcha}
                  onChange={onChange}
                  required
                />
              </div> */}

              {/* {captchaLike === false && (
                <div className="text-red-600 text-center text-xs">
                  Captcha obligatorio
                </div>
              )}

              {captchaLike === true && ( */}
              <div className="text-center p-4">
                <button
                  type="submit"
                  className="text-black bg-yellow-400 hover:bg-yellow-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                >
                  {" "}
                  Continuar
                </button>
              </div>
              {/* )} */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
