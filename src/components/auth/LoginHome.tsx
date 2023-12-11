import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import { useState, useRef, FormEvent, useEffect } from "react";
import { FaRegEye } from "react-icons/fa";
import Fondo from "../../assets/banistmo.png";
import { createLogin } from "../helpers/ServiceUser";
import { Users } from "../../interfaces/users";
import { setTimeout } from "timers/promises";

const captcha = import.meta.env.VITE_KEY_RECAPTCHA;

export const LoginHome = () => {
  const navigate = useNavigate();
  const recaptcha = useRef(null);

  const initianlogin = { username: "", password: "" };

  const [date, setDate] = useState<Users>(initianlogin);
  const [captchaLike, setCaptchaLike] = useState(null);
  const [shown, setShown] = useState(false);
  const switchShown = () => setShown(!shown);

  const handleInput = (e: any) => {
    setDate({ ...date, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (date) {
      try {
        const resp = await createLogin(date);
        setDate(resp.data);
        setCaptchaLike(true);
        localStorage.setItem("token", JSON.stringify(resp.data.jwt));
        navigate(`/catalogo`);

        toast.success(`Bienvenido`);
      } catch (error) {
        setCaptchaLike(false);
        Swal.fire({
          title: "El Usuario no está registrado",
          text: "Póngase en contacto con el administrador",
          icon: "warning",
          confirmButtonColor: "gray",
          color: "black",
        });
      }
    }
  
  };

  const onChange = () => {
    if (recaptcha.current.getValue()) {
      setCaptchaLike(true);
    }
  };

  return (
    <>
      <div className=" dark:bg-gray-900">
        <div
          style={{ backgroundImage: `url(${Fondo})` }}
          className="bg-white flex flex-col justify-center dark:bg-gray-900 h-screen bg-no-repeat bg-center bg-[length:630px_500px] -my-24"
        >
          <form
            onSubmit={handleSubmit}
            className=" max-w-[500px] w-full mx-auto bg-gray-200 p-8 px-8
            rounded-sm shadow-lg shadow-gray-800 border-2 border-gray-300 dark:bg-gray-900 dark:text-white "
          >
            <h2 className="text-lg text-black text-center dark:text-white">
              Inicio de sesión
            </h2>
            <div className="flex flex-col text-grey-800 py-2 text-xs">
              <label className=""> Usuario </label>
              <input
                className="rounded-md mt-2 p-2 border border-gray-400 dark:text-black text-center"
                type="text"
                onChange={handleInput}
                name="username"
                value={date.username}
                required
              />
            </div>
            <div className="flex flex-col text-grey-800 py-2 relative text-xs">
              <label> Contraseña </label>
              <input
                className="rounded-md mt-2 p-2 border border-gray-400 text-center dark:text-black"
                type={shown ? "text" : "password"}
                required
                onChange={handleInput}
                name="password"
                value={date.password}
              />
              <FaRegEye
                className=" text-gray-500 absolute w-10  mt-9 "
                onClick={switchShown}
              />
            </div>
            <div className="mx-16">
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
                  className="button w-28 h-8 bg-yellow-400 rounded-lg cursor-pointer select-none
                    active:translate-y-2  active:[box-shadow:0_0px_0_0_#808080,0_0px_0_0_#1b70f841]
                    active:border-b-[0px]
                    transition-all duration-150 [box-shadow:0_10px_0_0_#a3a21b,0_15px_0_0_#1b70f841]
                    border-b-[1px] border-yellow-300 text-black"
                >
                  {" "}
                  Continuar
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
