    import { Link } from "react-router-dom";
import { Avator } from "../components/BlogCard";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Appbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
  
    const handleLogout = () => {
      localStorage.removeItem("token");
      window.dispatchEvent(new Event('storage'));
      navigate("/signin");
      setIsOpen(false);
    };
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    return (
      <div className="border-b flex border-slate-200 justify-between px-10 py-4 relative">
        <div className="flex justify-center flex-col">
          <Link to={"/blogs"} className="flex flex-col justify-center font-bold text-xl">
            Lumevo
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to={"/publish"} className="cursor-pointer">
            <button
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-Lumevo rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 cursor-pointer"
            >
              New
            </button>
          </Link>
          <div className="relative" ref={dropdownRef}>
            <div 
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer"
            >
              <Avator name="Murali" size="big" />
            </div>
            
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                <Link
                  to={"/profile"}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };