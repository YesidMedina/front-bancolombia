import { useEffect } from "react";
import { FaRegSun } from "react-icons/fa";

export const DarkMode = () => {
  const closeSesion = () => {
    localStorage.getItem("");
  };

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

  useEffect(() => {
    closeSesion();
  }, []);
  return (
    <>
      <button
        className=" dark:bg-slate-700 bg-gray-100 rounded "
        onClick={changeDarkMode}
      >
        <FaRegSun />
      </button>
    </>
  );
};
