const Link = ({ route }) => {
  const { path, name } = route;
  return (
    <li>
      <a href={path}> {name} </a>
    </li>
  );
};

export default Link;
