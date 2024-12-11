import { Routes } from "react-router-dom";
import publicRouter from "../router/publicRouter";

const Layout = () => {
  return (
    <>
      <Routes>{publicRouter}</Routes>
    </>
  );
};

export default Layout;
