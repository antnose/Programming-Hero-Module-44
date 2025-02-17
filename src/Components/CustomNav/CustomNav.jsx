import Link from "../Link/Link";

const CustomNav = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/blog", name: "Blog" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/dashboard", name: "Dashboard" },
  ];

  return (
    <nav>
      <ul className="md:flex gap-4">
        {routes.map((route) => (
          <Link route={route} key={route.id} />
        ))}
      </ul>
    </nav>
  );
};

export default CustomNav;
