import { useEffect, useState } from "react";
import { getUserId } from "../helpers/ServiceUser";

const date: Date = new Date();
const now = date.toLocaleTimeString("en-US");

export const Navbar = (props: any) => {
  const [userInfo, setUserInfo] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const userId = localStorage.getItem("user_id");

  const userData = async (id: any) => {
    const resp = await getUserId(id);
    console.log(resp.data);
    
    setUserInfo(resp.data.username);
    setUserAvatar(resp.data.username.substring(0, 1).toUpperCase());
  };

  useEffect(() => {
    userData(userId);
  }, []);

  return (
    <div className="">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="/catalogo" className="flex items-center">
            <img
              src={props.image}
              className="h-8 mr-3 fill-current dark:bg-gray-600 dark:text-white"
              alt="Flowbite Logo"
            />
          </a>
          <div>
            <a className="self-center text-2xl font-semibold whitespace-nowrap text-black shrink mr-30 dark:text-white">
              {props.title}
            </a>
          </div>

          <div className="flex items-center">
            <a
              href={props.linkCatalogue}
              className=" w-20 text-center py-1 mr-8 bg-yellow-400
            hover:bg-yellow-200 text-gray-500 rounded-lg"
            >
              {props.catalogue}
            </a>
            <a href="" className="mr-6 text-sm  text-gray-500 hover:underline">
              {now}
            </a>
            <a
              href="/"
              className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
            >
              {props.clouse}
            </a>
            <a className=" inline-flex items-center justify-center w-10 h-10 ml-8 overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600">
              <span className="font-medium text-gray-600 dark:text-gray-300">
                {props.avatar}
                {userAvatar}
              </span>
            </a>
            <span className="text-xs ml-2">{userInfo}</span>
          </div>
        </div>
      </nav>
      <nav className=" bg-gray-700 ">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
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
              <li>
                <a
                  href={props.linkFive}
                  className="text-white hover:underline hover:text-yellow-300"
                  aria-current="page"
                >
                  {props.menuFive}
                </a>
              </li>
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
