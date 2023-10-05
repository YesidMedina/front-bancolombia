import { useEffect, useState } from "react";
import { getUserId } from "../helpers/ServiceUser";
import jwt_decode from "jwt-decode";
import { DarkMode } from "./DarkMode";
import { Link } from "react-router-dom";
const date: Date = new Date();
const now = date.toLocaleTimeString("en-US");


export const Navbar = (props: any) => {
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
    setLastName(respData.data.last_name)   
  };

  const closeSesion = () => {
    localStorage.clear();
  };

  useEffect(() => {
    userId();
  }, []);

  return (
    <div className="">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
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
            <a href="" className="mr-6 text-xs  text-gray-500 hover:underline">
              {now}
            </a>

            <div>
              <a
                onClick={() => setOpen(!open)}
                className=" inline-flex items-center border justify-center w-8 h-8 ml-8 overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600"
              >
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {props.avatar}
                  {userAvatar}
                </span>
              </a>

              {open && (
                <div className=" h-28 w-56 shadow-xl absolute bg-red-100  rounded-xl border-2 -ml-12 dark:bg-gray-800">
                 
                  <ul>
                    <li className="mt-4 mb-4 text-xs text-center">
                      <a >¡Hola,{' '}{name}{' '}{lastName}!</a>
                    </li>
                    <li className=" mb-4 text-xs text-center">
                      <a >{userEmail}</a>
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
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <a
                  href={props.linkOne}
                  className="text-white hover:underline hover:text-yellow-300"
                  aria-current="page"
                >
                  {props.menuOne}
                </a>
              </li>
              <li>
                <a
                  href={props.linkTwo}
                  className="text-white hover:underline hover:text-yellow-300"
                  aria-current="page"
                >
                  {props.menuTwo}
                </a>
              </li>
              <li>
                <a
                  href={props.linkThree}
                  className="text-white hover:underline hover:text-yellow-300"
                  aria-current="page"
                >
                  {props.menuThree}
                </a>
              </li>
              <li>
                <a
                  href={props.linkFour}
                  className="text-white hover:underline hover:text-yellow-300"
                  aria-current="page"
                >
                  {props.menuFour}
                </a>
              </li>
              {isAdmin === true && (
                <li>
                  <a
                    href={props.linkFive}
                    className="text-white hover:underline hover:text-yellow-300"
                    aria-current="page"
                  >
                    {props.menuFive}
                  </a>
                </li>
              )}
              <li>
                <a className="text-orange-400 ml-36" aria-current="page">
                  {props.menuTitle}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
