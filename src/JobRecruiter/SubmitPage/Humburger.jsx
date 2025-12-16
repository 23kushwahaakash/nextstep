import { useState } from "react";
import { Home, MessageCircle, Briefcase, X ,User,LayoutDashboard} from "lucide-react";
import {Link} from 'react-router-dom'

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
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
        </nav>
      </div>
    </>
  );
}

export default Hamburger;