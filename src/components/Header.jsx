import { Link } from "react-router-dom";
import { BiSun } from "react-icons/bi";
import { BsMoonStars } from "react-icons/bs";
import { useEffect, useState } from "react";
function Header() {
  const themes = {
    dark: "dark",
    light: "light",
  };

  const getThemeFromLocalStorage = () => {
    return localStorage.getItem("theme" || themes.light);
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []);
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const handleTheme = () => {
    const { dark, light } = themes;
    const newTheme = theme === light ? dark : light;
    document.documentElement.setAttribute("data-theme", theme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <header className="pt-10 pb-14 flex justify-between gap-10 items-center">
      <button className="btn btn-neutral md:text-4xl text-xl">CRUD</button>
      <h1 className="gap-5 sm:block hidden md:text-4xl text-xl">
        An app built with React Redux || {"  "}
        <a
          className="md:text-xl text-xs hover:underline"
          href="https://t.me/WWW_Dasturchi">
          By Usmonov Maqsadbek
        </a>
      </h1>
      <Link to="/create" className="btn btn-outline btn-warning">
        Create +
      </Link>
      <label className="swap swap-rotate">
        <input type="checkbox" onClick={handleTheme} />
        <BiSun className="swap-on h-6 w-6" />
        <BsMoonStars className="swap-off h-6 w-6" />
      </label>
    </header>
  );
}

export default Header;
