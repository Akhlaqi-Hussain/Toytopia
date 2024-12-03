"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChartLine, FaBox } from "react-icons/fa";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  // Close the sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    // Add event listener to document
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50 border-b-2 bg-white">
        <nav className="bg-gray-50 border-gray-200 px-4 lg:px-6 py-4">
          <div className="flex flex-wrap justify-between items-center mx-auto py-3">
            <div className="space-x-2">
              <button
                onClick={toggleSidebar}
                type="button"
                className="inline-flex items-center p-2 ml-1 md:hidden text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded={isSidebarOpen}
              >
                <span className="sr-only">Open sidebar</span>
                {isSidebarOpen ? (
                  <FaTimes className="w-4 h-4" />
                ) : (
                  <FaBars className="w-4 h-4" />
                )}
              </button>
              <Link
                href={"/"}
                className="self-center text-xl lg:text-2xl font-bold whitespace-nowrap"
              >
                Toytopia
              </Link>
            </div>

            <div className="flex items-center lg:order-2">
              <Link
                href={"/main"}
                className="text-white bg-gray-800 font-semibold rounded-full text-sm px-5 py-2.5 me-2 hover:bg-gray-100 hover:text-black"
              >
                Login
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        id="default-sidebar"
        className={`fixed top-24 left-0 z-40 w-64 h-screen transition-transform border-r-2 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 bg-gray-50 dark:bg-gray-800`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/main/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={closeSidebar} // Close sidebar on click
              >
                <FaChartLine className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400" />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/main/products"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={closeSidebar} // Close sidebar on click
              >
                <FaBox className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Products</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
