
import Home from "./pages/Home";

import { Route,BrowserRouter,Routes } from "react-router-dom";
import Getposts from "./components/posts/Getposts";
import Shop from "./pages/shop/Shop";
import Basket from "./pages/shop/Basket";
import AdminRoutes from "./admin/AdminRoutes";
import Reservation from "./pages/Reservation";
import ShowPost from "./components/posts/Showpost"


function App() {
  return (
    <>
   <div className="overflow-hidden d-flex flex-column justify-content-center ">
    <BrowserRouter>
    
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/admin/*" element={<AdminRoutes/>}/>
      <Route path="/getposts" element={<Getposts/>}/>
      <Route path="/posts/:postId" element={<ShowPost/>}/>
      <Route path="/shopping" element={<Shop/>}/>
      <Route path="/basket" element={<Basket/>}/>
      <Route path="/reservation" element={<Reservation/>}/>
    </Routes>
    
   
    </BrowserRouter>
    </div>
    </> 
    
    
  
   )
}

export default App;
