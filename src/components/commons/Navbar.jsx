import { useEffect, useState } from "react";
import { getUserId } from "../helpers/ServiceUser";
import jwt_decode from "jwt-decode";
import { DarkMode } from "./DarkMode";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export const Navbar = (props) => {
  const navigate = useNavigate();

  const [userAvatar, setUserAvatar] = useState();
  const [userEmail, setUserEmail] = useState();
  const [isAdmin, setIsAdmin] = useState();
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [open, setOpen] = useState(false);

  const userId = async () => {
    const resp = localStorage.getItem("token");
    const decode = jwt_decode(resp);
    const respData = await getUserId(decode["id"]);

    setUserEmail(respData.data.email);
    const avatar = respData.data.username.charAt(0).toUpperCase();
    setUserAvatar(avatar);
    setIsAdmin(respData.data.is_staff);
    setName(respData.data.first_name);
    setLastName(respData.data.last_name);
  };

  const closeSesion = () => {
    localStorage.clear();
  };

  const hour_clock = () => {
    const date = new Date();

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hour < 10) {
      hour = "0" + hour;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    document.getElementById("reloj").innerHTML =
      hour + ":" + minutes + ":" + seconds;

      setTimeout(hour_clock, 1000);
  };

  setTimeout(hour_clock, 1000);

  useEffect(() => {
    userId();
  }, []);

  useEffect(() => {
    const timeout = () => {
      localStorage.clear('token');
      Swal.fire({
        title: "Se agotó su tiempo",
        text: `Debe volver a registrarse`,
      }).then((response) => {
        if (response.isConfirmed) {
          navigate("/");
        }
      });
    };

    window.setTimeout(timeout, 600000);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 relative">
        <div className="flex flex-wrap justify-between items-center mx-36  p-2">
          <a className="flex items-center">
            <DarkMode />
            <img
              src={props.image}
              className="h-8 mr-3 fill-current dark:bg-gray-600 dark:text-white"
              alt="Flowbite Logo"
            />
          </a>
          <div>
            <a className="self-center text-2xl whitespace-nowrap text-black shrink mr-30 dark:text-white">
              {props.title}
            </a>
          </div>

          <div className="flex items-center">
            <a
              href={props.linkCatalogue}
              className=" w-20 text-center text-xs py-1 mr-8 bg-yellow-400
            hover:bg-yellow-200 text-gray-500 rounded-lg"
            >
              {props.catalogue}
            </a>
            <a href="" className="mr-6 text-xs  text-gray-500 hover:underline" id="reloj">
              
            </a>

            <div>
              <a
                onClick={() => setOpen(!open)}
                className=" inline-flex items-center border justify-center w-8 h-8 ml-8 overflow-hidden bg-gray-300 rounded-full
                 dark:bg-gray-600 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2"
              >
                <span className="font-medium text-gray-600 dark:text-gray-300 ">
                  {props.avatar}
                  {userAvatar}
                </span>
              </a>

              {open && (
                <div className=" h-28 w-56 shadow-xl absolute bg-red-100  rounded-xl border-2 -ml-12 dark:bg-gray-800">
                  <ul>
                    <li className="mt-4 mb-4 text-xs text-center">
                      <a>
                        ¡Hola, {name} {lastName}!
                      </a>
                    </li>
                    <li className=" mb-4 text-xs text-center">
                      <a>{userEmail}</a>
                    </li>
                  </ul>
                  <ul className="">
                    <li className="text-xs text-blue-600 text-center hover:underline hover:text-gray-800">
                      <Link onClick={() => closeSesion()} to="/">
                        {" "}
                        {props.clouse}{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <nav className=" bg-gray-700 ">
        <div className="max-w-screen-xl px-4 py-1 mx-36">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-xs">
              <li className="hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2">
                <a
                  href={props.linkOne}
                  className="text-white hover:underline hover:text-yellow-300 "
                  aria-current="page"
                >
                  {props.menuOne}
                </a>
              </li>
              <li className="hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2">
                <a
                  href={props.linkTwo}
                  className="text-white hover:underline hover:text-yellow-300"
                  aria-current="page"
                >
                  {props.menuTwo}
                </a>
              </li>
              <li className="hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2">
                <a
                  href={props.linkThree}
                  className="text-white hover:underline hover:text-yellow-300"
                  aria-current="page"
                >
                  {props.menuThree}
                </a>
              </li>
              <li className="hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2">
                <a
                  href={props.linkFour}
                  className="text-white hover:underline hover:text-yellow-300"
                  aria-current="page"
                >
                  {props.menuFour}
                </a>
              </li>
              {isAdmin === true && (
                <li className="hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2">
                  <a
                    href={props.linkFive}
                    className="text-white hover:underline hover:text-yellow-300"
                    aria-current="page"
                  >
                    {props.menuFive}
                  </a>
                </li>
              )}
              {isAdmin === true && (
                <li className="hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2">
                  <a
                    href={props.linkSix}
                    className="text-white hover:underline hover:text-yellow-300"
                    aria-current="page"
                  >
                    {props.menuSix}
                  </a>
                </li>
              )}
              <li className="hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2">
                <a
                  href={props.linkSeven}
                  className="text-white hover:underline hover:text-yellow-300"
                  aria-current="page"
                >
                  {props.menuSeven}
                </a>
              </li>
              <li className="hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2">
                <a
                  href={props.linkEight}
                  className="text-white hover:underline hover:text-yellow-300"
                  aria-current="page"
                >
                  {props.menuEight}
                </a>
              </li>
              {isAdmin === true && (
                <li className="hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2">
                  <a
                    href={props.linkNine}
                    className="text-white hover:underline hover:text-yellow-300"
                    aria-current="page"
                  >
                    {props.menuNine}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
