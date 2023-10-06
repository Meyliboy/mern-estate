import { Routes, Route } from "react-router-dom";
import { About, Home, Profile, Signin, Signout } from "../components";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signout" element={<Signout />} />
    </Routes>
  );
};

export default AppRoutes;
