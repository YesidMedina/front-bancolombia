import { useEffect } from "react";
import { DarkMode } from "./DarkMode";

export const NavbarHome = (props) => {

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

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 relative">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 ">
          <a className="flex items-center">
            <DarkMode />
            <img src={props.image} className="h-8 mr-3 " alt="Flowbite Logo" />
          </a>
          <div>
            <a className="self-center text-2xl mx-auto whitespace-nowrap text-black shrink mr-48 dark:text-white">
              {props.title}
            </a>
          </div>

          <div className="flex items-center">
            <a
              href=""
              className="mr-6 text-sm  text-gray-500 hover:underline"
              id="reloj"
            ></a>
            <a
              onClick={() => closeSesion()}
              href="/"
              className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
            >
              {props.clouse}
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-500 dark:bg-gray-700">
        <div className="px-2 py-2 mx-auto"></div>
      </nav>
    </div>
  );
};
