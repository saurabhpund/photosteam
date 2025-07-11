import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LoginCTX } from "../context/LoginContext";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {isLogin, setIsLogin} = React.useContext(LoginCTX); // simulate logged-in user
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setUserDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-semibold text-gray-900">
            PhotoSteam
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">
              Home
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-indigo-600">
              Gallery
            </Link>
            <Link to="/creators" className="text-gray-700 hover:text-indigo-600">
              Creators
            </Link>
            <Link to="/upload" className="text-gray-700 hover:text-indigo-600">
              Upload
            </Link>
          </div>

          {/* Right-side Controls */}
          <div className="flex items-center space-x-4">
            {/* User Avatar Dropdown (if logged in) */}
            {isLogin ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="focus:outline-none"
                >
                  <img
                    src="https://randomuser.me/api/portraits/men/10.jpg"
                    alt="User Avatar"
                    className="w-9 h-9 rounded-full border-2 border-gray-200"
                  />
                </button>
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow z-10">
                    <div className="px-4 py-3 text-sm text-gray-700">
                      <p className="font-medium">John Doe</p>
                      <p className="text-xs text-gray-500 truncate">
                        john@example.com
                      </p>
                    </div>
                    <ul className="text-sm text-gray-700">
                      <li>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/favorites"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Favorites
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/settings"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Settings
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setIsLogin(false);
                            setUserDropdownOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              // Auth Buttons (when not logged in)
              <div className="hidden md:flex space-x-2">
                <Link
                  to="/auth/login"
                  className="px-4 py-1 text-gray-700 border border-gray-600 rounded hover:bg-gray-800 hover:text-white"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-1 bg-gray-900 text-white rounded hover:bg-gray-700"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Hamburger Icon */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 shadow">
          <div className="flex flex-col space-y-4">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>
              Gallery
            </Link>
            <Link to="/creators" onClick={() => setMobileMenuOpen(false)}>
              Creators
            </Link>
            <Link to="/upload" onClick={() => setMobileMenuOpen(false)}>
              Upload
            </Link>
            {!isLogin ? (
              <>
                <Link to="/auth/login" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Link>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link to="/profile" onClick={() => setMobileMenuOpen(false)}>
                  Profile
                </Link>
                <Link to="/favorites" onClick={() => setMobileMenuOpen(false)}>
                  Favorites
                </Link>
                <Link to="/settings" onClick={() => setMobileMenuOpen(false)}>
                  Settings
                </Link>
                <button
                  onClick={() => {
                    setIsLogin(false);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
