import {
  MenuIcon,
  ArrowLeftIcon,
  LogoutIcon,
} from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import variables from "../assets/variables/variables";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [cookie, removeCookie] = useCookies();
  const [isBackHidden, setIsBackHidden] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname !== "/") setIsBackHidden(false);
  }, []);

  const goBackClickHandler = () => {
    navigate(-1);
  };

  const logout = () => {
    removeCookie("user");
    window.location.reload();
  };

  return (
    <nav className="max-w-full flex items-center justify-center m-0 bg-slate-100 sticky top-0 w-full z-50 shadow-lg p-2">
      <div className="max-w-screen-lg w-full px-3 flex justify-between items-center max-h-12">
        <div
          className={isBackHidden ? "hidden" : "hidden xs:inline"}
          onClick={() => goBackClickHandler()}
        >
          <ArrowLeftIcon className="h-7 fill-slate-500" />
        </div>
        <div>
          <a href={`${variables.site_url}`}>
            <div className="w-12 h-12 flex items-center justify-center pt-1.5">
              <img
                className="bg-contain "
                src={require("../assets/img/logo.png")}
                alt="Logo"
              />
            </div>
          </a>
        </div>
        <div className="flex flex-row items-center sm:space-x-1">
          {cookie.user !== undefined && (
            <img
              src={cookie.user.profilePhoto}
              alt=""
              className="h-7 rounded-full mr-1 cursor-pointer"
              onClick={() => navigate("/profil")}
            ></img>
          )}
          <Menu as="div" className="relative inline-block text-left">
            <div className="flex items-center justify-center">
              <Menu.Button>
                <MenuIcon className="h-8 fill-slate-500" aria-hidden="true" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={logout}
                        className={`${
                          active
                            ? "bg-blue-500 text-white"
                            : "text-blue-500 font-semibold"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm font-semibold`}
                      >
                        {active ? (
                          <LogoutIcon
                            className="w-5 h-5 mr-2 text-blue-400"
                            aria-hidden="true"
                          />
                        ) : (
                          <LogoutIcon
                            className="w-5 h-5 mr-2 text-blue-400"
                            aria-hidden="true"
                          />
                        )}
                        Çıkış Yap
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;