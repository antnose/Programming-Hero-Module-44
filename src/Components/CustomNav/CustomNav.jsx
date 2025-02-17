import { useState } from "react";
import Link from "../Link/Link";
// import { BsFillMenuButtonWideFill, IoMdClose } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { TiThMenuOutline } from "react-icons/ti";

const CustomNav = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/blog", name: "Blog" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/dashboard", name: "Dashboard" },
  ];

  return (
    <nav className="text-black bg-yellow-200 p-6 ">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        {open ? <IoMdClose /> : <TiThMenuOutline />}
      </div>
      <ul
        className={`md:flex duration-1000 gap-4 absolute bg-yellow-200 px-6 ${
          open ? "top-16" : "-top-60 md:static"
        } `}
      >
        {routes.map((route) => (
          <Link route={route} key={route.id} />
        ))}
      </ul>
    </nav>
  );
};

export default CustomNav;
