import React from "react";
import { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [user, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className="users">
      {user.map((item) => {
        return (
          <div className="user" key={item.id}>
            <span>
              <h1>{item.id}</h1>
              <h2>
                {item.name}
                {item.username}
              </h2>
            </span>

            <button onClick={() => navigate(`/users/${item.id}`)}>MORE</button>
          </div>
        );
      })}
    </div>
  );
};

export default User;
