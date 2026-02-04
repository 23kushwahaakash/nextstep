import { useRef, useEffect, useState } from "react";
import { User, Settings, LogOut, UserCircle, Mail,LayoutDashboard} from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast";
import {clearAuth} from "../../Redux/authSlice";
import {clearProfile} from "../../Redux/profileSlice";
import {AUTH_API_ENDPOINT} from "../../APIs/Data";
import NextStep from "../../Authorisation/Images/logo.png";

function ProfilePopUp({ onClose }) {
  const popoverRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.accessToken);
  const userEmail = useSelector(state => state.auth.userEmail);
  const userPass = useSelector(state => state.auth.userPass);
  const [loading, setLoading] = useState(false);

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
      localStorage.removeItem("accessToken");
      toast.success("Logged Out Successfully!");
      dispatch(clearAuth());
      dispatch(clearProfile());
      navigate("/");
    }
    catch{
      toast.error("Error!")
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={popoverRef}
      className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-60"
    >
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
      <div className="px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="bg-[#0A2A5E] p-2 rounded-full">
            <User className="text-white w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Team-3</h3>
            <p className="text-sm text-gray-500">Team3@google.com</p>
          </div>
        </div>
      </div>

     
      <div className="py-1">
        <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3 text-gray-700 transition-colors" onClick={()=>navigate("/jobseeker/profile")}>
          <UserCircle className="w-5 h-5" />
          <span>View Profile</span>
        </button>

        <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3 text-gray-700 transition-colors" onClick={()=>navigate("/jobseeker/dashboard")}>
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard</span>
        </button>
        
        <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3 text-gray-700 transition-colors" onClick={()=>navigate("/chats")}>
          <Mail className="w-5 h-5" />
          <span>Messages</span>
        </button>

        <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3 text-gray-700 transition-colors" onClick={()=>navigate("/jobseeker/settings")}>
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
      </div>

      <div className="border-t border-gray-200 py-1">
        <button 
        className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3 text-red-600 transition-colors" 
        onClick={handleLogOut}>
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default ProfilePopUp;