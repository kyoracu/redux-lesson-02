import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles.css";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setUser(json));
  });
  return (
    <div className="newPage">
      <h1>{user && JSON.stringify(user, 2, 2)}</h1>
    </div>
  );
}

export default UserDetail;
