//import { Darkmode } from "./components/file_master/Darkmode";
import { AppRouter } from "./router/AppRouter";
import { FaRegSun } from "react-icons/fa";

export const App = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const changeDarkMode = () => {
    const toggle = document.documentElement.classList.toggle("dark");
    toggle ? (localStorage.theme = "dark") : (localStorage.theme = "light");
  };
  return (
    <>
      
      <AppRouter />
      <div className="">
        <button
          className=" fixed top-5 right-10 duration-100 dark:bg-slate-700 bg-gray-100 rounded"
          onClick={changeDarkMode}
        >
          <FaRegSun />
        </button>
      </div>
    </>
  );
};
