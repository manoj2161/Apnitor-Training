import clsx from "clsx";
import { Menu } from "lucide-react";
import { Search } from "lucide-react";
import { Bell } from "lucide-react";
import { CircleUser } from "lucide-react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { X } from "lucide-react";
import { House } from "lucide-react";
import { Users } from "lucide-react";
import { FolderClosed } from "lucide-react";
import { Calendar } from "lucide-react";
import { Files } from "lucide-react";
import { ChartPie } from "lucide-react";
import { Settings } from "lucide-react";

export const Header = () => {
  const [profile, setProfile] = useState(false);
  const [side, setSide] = useState(false);
  return (
    <>
      <div className="flex ">
        <div>
          <aside className="border-r border-gray-200 w-86 h-screen hidden md:block">
            <div className="flex flex-col h-screen justify-between">
              <div>
                <img
                  src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.0~s.iziag2xd..svg"
                  alt=""
                  className="w-16 pt-8 ml-8"
                />
              </div>
              <div className="flex flex-col mb-50">
                <div>
                  <nav className="flex flex-col gap-2 ml-8 ">
                    <p className="flex gap-2 text-[#50BDF8] bg-gray-100 p-2 mr-2 rounded-lg">
                      <span>
                        <House />
                      </span>
                      <span> Dashboard</span>
                    </p>
                    <p className="flex gap-2 hover:text-[#50BDF8] hover:hover:bg-gray-100 p-2 mr-2 rounded-lg">
                      <span >
                        <Users className="text-gray-500" />
                      </span>
                      <span> Team</span>
                    </p>
                    <p className="flex gap-2 hover:text-[#50BDF8] hover:bg-gray-100 p-2 mr-2 rounded-lg">
                      <span>
                        <FolderClosed className="text-gray-500" />
                      </span>
                      <span> Projects</span>
                    </p>
                    <p className="flex gap-2 hover:text-[#50BDF8] hover:bg-gray-100 p-2 mr-2 rounded-lg">
                      <span>
                        <Calendar className="text-gray-500" />
                      </span>
                      <span> Calendar</span>
                    </p>
                    <p className="flex gap-2 hover:text-[#50BDF8] hover:bg-gray-100 p-2 mr-2 rounded-lg">
                      <span>
                        <Files className="text-gray-500" />
                      </span>
                      <span> Documents</span>
                    </p>
                    <p className="flex gap-2 hover:text-[#50BDF8] hover:bg-gray-100 p-2 mr-2 rounded-lg">
                      <span>
                        <ChartPie className="text-gray-500" />
                      </span>
                      <span> Reports</span>
                    </p>
                  </nav>
                </div>
                <div className="mt-4 ml-10">
                  <h3 className="text-gray-500 font-bold">Your teams</h3>
                  <nav className="flex flex-col gap-6 mt-4">
                    <p>
                      <span className="border p-1 rounded-md border-gray-400 text-gray-500 text-xs mr-2">
                        H
                      </span>
                      <span className="font-semibold">Heroicons</span>
                    </p>
                    <p>
                      <span className="border p-1 rounded-md border-gray-400 text-gray-500 text-xs mr-2">
                        T
                      </span>
                      <span className="font-semibold">Tailwind Labs</span>
                    </p>
                    <p>
                      <span className="border p-1 rounded-md border-gray-400 text-gray-500 text-xs mr-2">
                        W
                      </span>
                      <span className="font-semibold">Workcation</span>
                    </p>
                  </nav>
                </div>
              </div>
              <div className="ml-10 flex gap-2 mb-6">
                <span>
                  <Settings className="text-gray-500" />
                </span>
                <span>Settings</span>
              </div>
            </div>
          </aside>
        </div>
        <div>
          <div>
            <header className="flex justify-between items-center h-18 border-b-1 border-gray-300 w-auto">
              {/* {!side && (
                <div className="border-r border-gray-300 text-gray-600 ml-6">
                  <Menu className="mr-4" onClick={() => setSide(true)} />
                </div>
              )} */}
              <div className="flex ml-10">
                <label htmlFor="search">
                  <Search className="w-5 mt-1" />
                </label>

                <input
                  className={clsx(
                    "w-222 h-8 focus:outline-none ml-4",
                    side && "lg:w-100",
                  )}
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                />
              </div>
              <div className="flex">
                <span className="border-r border-gray-300">
                  <Bell className="w-5 mr-4 text-gray-500 " />
                </span>
                <CircleUser
                  className="mx-2 w-14"
                  onClick={() => {
                    profile ? setProfile(false) : setProfile(true);
                  }}
                />
                <span
                  className="hidden md:block"
                  onClick={() => {
                    profile ? setProfile(false) : setProfile(true);
                  }}
                >
                  Tom Cook
                </span>
                <span>
                  <button
                    onClick={() => {
                      profile ? setProfile(false) : setProfile(true);
                    }}
                  >
                    {profile && (
                      <span>
                        <ChevronDown className="w-4 mx-2  text-gray-600" />
                      </span>
                    )}
                    {profile ? (
                      <div className="absolute right-4 py-2 top-18 shadow-xl rounded-lg border-1 border-gray-100 text-left bg-white">
                        <p className="px-6 py-2 hover:bg-gray-100 ">
                          Your Profile
                        </p>
                        <p className="px-6 py-2 hover:bg-gray-100 ">Sign Out</p>
                      </div>
                    ) : (
                      <ChevronDown className="w-4 mx-2 text-gray-600" />
                    )}
                  </button>
                </span>
              </div>
            </header>
          </div>
          <div>
            <section>
              <p className="border-3 border-dotted rounded-lg h-186 m-8 border-gray-400">
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
