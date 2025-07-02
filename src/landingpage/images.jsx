import React from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";

function Photo() {
  const [theme, settheme] = React.useState(() => {
    return localStorage.getItem("theme");
  });

  const [open, setopen] = React.useState(false);

  const photos = ["one.jpg", "two.jpg", "three.jpg", "four.jpg", "five.jpg"];

  //darkmode
  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  //toggle light and dark mode

  const toogle = () => {
    settheme(theme === "light" ? "dark" : "light");
  };



  //toggle menu and X

  const togglemenu = () => {
    setopen((prev) => !prev);
  };

  return (
    <div className=" dark:border-gray-700  bg-white dark:bg-gray-900 transition-colors duration-300 md:h-screen md:w-auto h-auto">
      {/*desktop navbar */}
      <nav className="hidden md:flex bg-white text-black w-full uppercase tracking-[0.22px] md:text-[22px] p-11">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <div className="font-bold text-4xl">SASTO PASAL</div>
          <ul className="hidden md:flex flex-row gap-16 justify-end items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/feedback">Feedback</Link>
            </li>
            <li>
              <Link to="/img">Images</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <button
                onClick={toogle}
                className="text-2xl"
                title="Toggle Theme"
              >
                {theme === "light" ? "🌑" : "☀️"}
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {/* navbar for mobile */}
      <div className="md:hidden flex justify-end items-center p-3 bg-white relative z-50 ">
        <button onClick={togglemenu}>
          {open ? <X size={33} /> : <Menu size={33} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col items-start px-2 py-2 gap-5 text-base z-10 absolute w-full bg-black text-white ">
          <Link to="/" onClick={togglemenu}>
            Home
          </Link>
          <Link to="img" onClick={togglemenu}>
            Images
          </Link>
          <Link to="/feedback" onClick={togglemenu}>
            Feedback
          </Link>
          <Link to="/login" onClick={togglemenu}>
            Login
          </Link>
            <button
                onClick={toogle}
                className="text-2xl"
                title="Toggle Theme"
              >
                {theme === "light" ? "🌑" : "☀️"}
              </button>
        </div>
      )}

      <h1 className="text-center text-5xl font-bold mt-10  dark:text-white" > Images Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {photos.map((src, index) => (
          <div
            className="m-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800"
            key={index}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photo;
