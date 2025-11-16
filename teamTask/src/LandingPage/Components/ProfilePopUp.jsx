import { useRef, useEffect } from "react";
import { User, Settings, LogOut, UserCircle, Mail,LayoutDashboard} from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProfilePopUp({ onClose }) {
  const popoverRef = useRef(null);
  const navigate = useNavigate();

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
      className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[60]"
    >
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

        <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3 text-gray-700 transition-colors" onClick={()=>navigate("/settings")}>
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
      </div>

      <div className="border-t border-gray-200 py-1">
        <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3 text-red-600 transition-colors" onClick={()=>navigate("/logout")}>
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default ProfilePopUp;