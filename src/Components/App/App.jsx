import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UserDetail, User } from "../../Components/pages";

import Header from "../Header/Header";
import First from "../pages/First";
import Second from "../pages/Second";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/about" element={<Second />} />
        <Route path="/users">
          <Route path="/users" element={<User />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/users/info" element={<>User Info</>} />
        </Route>
        <Route path="*" element={<>404 NOT FOUND</>} />
      </Routes>
    </Router>
  );
};

export default App;
