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
    <nav>
      <div onClick={() => setOpen(!open)} className="md:hidden">
        {open ? <IoMdClose /> : <TiThMenuOutline />}
      </div>
      <ul className="md:flex gap-4">
        {routes.map((route) => (
          <Link route={route} key={route.id} />
        ))}
      </ul>
    </nav>
  );
};

export default CustomNav;
