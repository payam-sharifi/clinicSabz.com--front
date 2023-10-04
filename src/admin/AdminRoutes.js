import { Route, Routes, Navigate } from "react-router-dom";
import ShowPostPage from "./pages/ShowPostsPage";
import Logout from "./component/Logout";
import Failauth from "./component/Failauth";
import ProductsPage from "./pages/ProductsPage";
import PostPage from "./pages/PostsPage";
import LoginAdmin from "./pages/AdminPanel";
import LoginForm from "./component/LoginForm";
import { memo } from "react";


const AdminRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/AdminPanel" element={<LoginAdmin />} />
      <Route path="/logout" element={<Logout />} />
    {/*   <Route
        path="/showposts"
        element={isLogin ? <ShowPostPage /> : <Navigate to={"/admin"} />}
      />
      <Route
        path="/addproducts"
        element={isLogin ? <ProductsPage /> : <Navigate to="/admin" />}
      />
      <Route
        path="/addposts"
        element={isLogin ? <PostPage /> : <Navigate to="/admin" />}
      /> */}
    </Routes>
  );
};
export default memo(AdminRoutes);
