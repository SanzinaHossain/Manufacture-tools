import logo from './logo.svg';
import './App.css';
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Register/Login";
import Register from "./Pages/Register/Register";
import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Shared/Blogs/Blogs';
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
     </Routes>
    </div>
  );
}

export default App;
