import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    label: "Main",
    id: 1,
  },
  {
    path: "/about",
    label: "About",
    id: 2,
  },
  {
    path: "/users",
    label: "Users",
    id: 3,
  },
];
function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const onBackHandler = () => {
    navigate(location.state?.from || location.pathname);
  };
  return (
    <div>
      {routes.map(({ id, path, label }) => {
        return (
          <Link
            state={{ from: location.pathname }}
            to={path}
            key={id}
            style={{ marginLeft: 30 }}
          >
            {label}
          </Link>
        );
      })}
      <hr />
      <button onClick={onBackHandler}>BACK</button>
    </div>
  );
}

export default Header;
