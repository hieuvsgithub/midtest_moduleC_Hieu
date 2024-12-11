import { Route } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import Home from "../pages/User/Home";
import ProductList from "../pages/Admin/ProductList";
import AddvsUpdateForm from "../pages/Admin/AddvsUpdateForm";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import NotFound from "../pages/NotFound";
import AdminLayout from "../layout/AdminLayout/AdminLayout";

const publicRouter = (
  <>
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Home />} />
    </Route>
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<ProductList />} />
      <Route path="/admin/add_product" element={<AddvsUpdateForm />} />
      <Route path="/admin/update_product/:id" element={<AddvsUpdateForm />} />
    </Route>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={<NotFound />} />
  </>
);

export default publicRouter;
