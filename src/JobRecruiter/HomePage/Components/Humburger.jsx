import { useState } from "react";
import { Home, MessageCircle, Briefcase, X ,User,LayoutDashboard, LogOut} from "lucide-react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast";
import {clearAuth} from "../../../Redux/authSlice";
import {AUTH_API_ENDPOINT} from "../../../APIs/Data";
import NextStep from "../../../Authorisation/Images/logo.png";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.accessToken);
  const userEmail = useSelector(state => state.auth.userEmail);
  const userPass = useSelector(state => state.auth.userPass);

  const handleLogOut = async () => {
    setLoading(true);
    try{
      await axios.post(`${AUTH_API_ENDPOINT}/logout`,
        {
          email:userEmail,
          password:userPass
        },
        {
          headers:{
            Authorization:`Bearer ${accessToken}`
          }
        }
      );
      toast.success("Logged Out Successfully!");
      localStorage.removeItem("accessToken");
      dispatch(clearAuth());
      navigate("/");
    }
    catch{
      toast.error("Error!")
    }finally{
      setLoading(false);
    }
  };

  return (
    <>
    {loading && (
        <div className="fixed inset-0 z-50 bg-white/80 flex flex-col items-center justify-center">
          {/* Logo */}
          <img
          src={NextStep}
          alt="Loading"
          className="w-20 mb-6"
          />
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="mt-4 text-blue-600 font-bold text-m">
            Logging you out...
          </p>
        </div>
      )}
      <button 
        onClick={toggleMenu}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Menu"
      >
        <span className={`w-3 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-3 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-3 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
      </button>

      {isOpen && (
        <div 
          onClick={closeMenu}
          className="fixed inset-0 bg-gray  z-40 md:hidden"
        ></div>
      )}

      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="flex justify-end p-4">
          <button onClick={closeMenu} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <nav className="flex flex-col px-4 gap-2">
          <Link 
            to="/jobrecruiter/profile" 
            onClick={closeMenu}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <User className="w-5 h-5 text-gray-700" />
            <span className="text-gray-700 font-medium">Profile</span>
          </Link>

          <Link  
            to="/jobrecruiter/dashboard" 
            onClick={closeMenu}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <LayoutDashboard className="w-5 h-5 text-gray-700" />
            <span className="text-gray-700 font-medium">Dashboard</span>
          </Link>

          <Link 
            to="/jobrecruiter/home" 
            onClick={closeMenu}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <Home className="w-5 h-5 text-gray-700" />
            <span className="text-gray-700 font-medium">Home</span>
          </Link>

          <Link 
            to="/chats" 
            onClick={closeMenu}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-gray-700" />
            <span className="text-gray-700 font-medium">Chats</span>
            <span className="ml-auto bg-blue-600 text-white text-xs px-2 py-1 rounded-full">0</span>
          </Link>

          <button 
        className="w-full px-4 py-2 text-left hover:bg-red-200 flex items-center gap-3 text-red-600 transition-colors" 
        onClick={handleLogOut}>
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
        </nav>
      </div>
    </>
  );
}

export default Hamburger;