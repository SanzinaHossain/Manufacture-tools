import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Register/Login";
import Register from "./Pages/Register/Register";
import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Shared/Blogs/Blogs';
import Tools from './Pages/Tools/Tools';
import Purchased from './Pages/Purchased/Purchased';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import NoPageFound from './Pages/NoPageFound/NoPageFound';
import MyProfile from './Pages/DashBoard/MyProfile';
import MyReview from './Pages/DashBoard/MyReview';
import MyOrder from './Pages/DashBoard/MyOrder';
import DashBoard from './Pages/DashBoard/DashBoard';
import AllUsers from './Pages/DashBoard/AllUsers';
import RequireAdmin from "./Hooks/RequireAdmin"
function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/register" element={<Register></Register>}></Route>
       <Route path="/footer" element={<Footer></Footer>}></Route>
       <Route path="/blogs" element={<Blogs></Blogs>}></Route>
       <Route path="/tools" element={<Tools></Tools>}></Route>
       <Route path="/purchased/:id" element={
        <RequireAuth>
             <Purchased></Purchased>
        </RequireAuth>
        }></Route>
         <Route path="/dashboard" element={
        <RequireAuth>
             <DashBoard/>
        </RequireAuth>
        }>
           <Route index element={<MyProfile></MyProfile>}></Route>
           <Route path="myreview" element={<MyReview></MyReview>}></Route>
           <Route path="allusers" element={<AllUsers></AllUsers>}></Route>
            </Route>
        <Route path="*" element={<NoPageFound></NoPageFound>}></Route>
     </Routes>
     <ToastContainer/>
    </div>
  );
}

export default App;
