import clsx from "clsx";
import {
  Menu,Search,
  Bell,
  CircleUser,
  ChevronDown,
  X,
  House,
  Users,
  FolderClosed,
  Calendar,
  Files,
  ChartPie,
  Settings,
} from "lucide-react";

import { useState } from "react";

export const ToggleSidebar = () => {
  const [profile, setProfile] = useState(false);
  const [side, setSide] = useState(false);
  const links =
    "flex gap-2 hover:text-[#50BDF8] text-gray-500 hover:bg-gray-100 p-2 mr-2 rounded-lg";
  const teamsLinks = "border p-1.5 rounded-md border-gray-400 text-sm mr-2";
  return (
    <>
      <div className={clsx("flex w-auto h-screen", side && "overflow-hidden")}>
        <div>
          <aside className="border-r border-gray-200 w-86 sm:w-86 h-screen hidden md:block">
            <div className="flex flex-col h-screen justify-start gap-8">
              <div>
                <img
                  src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.0~s.iziag2xd..svg"
                  alt=""
                  className="w-16 pt-8 ml-8"
                />
              </div>
              <div className="flex flex-col">
                <div>
                  <nav className="flex flex-col gap-2 ml-8 ">
                    <p className="flex gap-2 text-[#50BDF8] bg-gray-100 p-2 mr-2 rounded-lg">
                      <span>
                        <House />
                      </span>
                      <span> Dashboard</span>
                    </p>
                    <p className={links}>
                      <span>
                        <Users className="" />
                      </span>
                      <span> Team</span>
                    </p>
                    <p className={links}>
                      <span>
                        <FolderClosed />
                      </span>
                      <span> Projects</span>
                    </p>
                    <p className={links}>
                      <span>
                        <Calendar />
                      </span>
                      <span> Calendar</span>
                    </p>
                    <p className={links}>
                      <span>
                        <Files />
                      </span>
                      <span> Documents</span>
                    </p>
                    <p className={links}>
                      <span>
                        <ChartPie />
                      </span>
                      <span> Reports</span>
                    </p>
                  </nav>
                </div>
                <div className="mt-4 ml-10">
                  <h3 className="text-gray-500 font-bold">Your teams</h3>
                  <nav className="flex flex-col gap-6 mt-4 ">
                    <p className="hover:text-[#50BDF8] text-gray-500">
                      <span className={teamsLinks}>H</span>
                      <span className="font-semibold">Heroicons</span>
                    </p>
                    <p className="hover:text-[#50BDF8] text-gray-500">
                      <span className={teamsLinks}>T</span>
                      <span className="font-semibold">Tailwind Labs</span>
                    </p>
                    <p className="hover:text-[#50BDF8] text-gray-500">
                      <span className={teamsLinks}>W</span>
                      <span className="font-semibold">Workcation</span>
                    </p>
                  </nav>
                </div>
              </div>
              <div className="ml-10 flex gap-2 mb-4 lg:mt-86 sm:mt-66">
                <span>
                  <Settings className="text-gray-500" />
                </span>
                <span className="hover:text-[#50BDF8]">Settings</span>
              </div>
            </div>
          </aside>
        </div>
        <div>
          <div>
            <header className="flex justify-between items-center h-18 border-b-1 border-gray-300 w-auto mx-0 md:mx-8">
              {!side && (
                <div className="border-r border-gray-300 text-gray-600 ml-6 block md:hidden">
                  <Menu
                    className="mr-4"
                    onClick={() => {
                      (setSide(true), setProfile(false));
                    }}
                  />
                </div>
              )}
              {side && (
                <div className="flex">
                  <div>
                    <aside className="w-1/2 h-screen absolute top-0 block md:hidden  bg-white">
                      <div className="flex flex-col justify-between h-screen">
                        <div>
                          <img
                            src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.0~s.iziag2xd..svg"
                            alt=""
                            className="w-16 pt-8 ml-8"
                          />
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <nav className="flex flex-col gap-2 ml-8 ">
                              <p className="flex gap-2 text-[#50BDF8] bg-gray-100 p-2 mr-2 rounded-lg">
                                <span>
                                  <House />
                                </span>
                                <span> Dashboard</span>
                              </p>
                              <p className="flex gap-2 hover:text-[#50BDF8] hover:bg-gray-100 p-2 mr-2 rounded-lg">
                                <span>
                                  <Users />
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
                            <h3 className="text-gray-500 font-bold">
                              Your teams
                            </h3>
                            <nav className="flex flex-col gap-6 mt-4 ">
                              <p className="hover:text-[#50BDF8]">
                                <span className="border p-2 rounded-md border-gray-400 text-gray-500 text-sm mr-2">
                                  H
                                </span>
                                <span className="font-semibold">Heroicons</span>
                              </p>
                              <p className="hover:text-[#50BDF8]">
                                <span className="border p-2 rounded-lg border-gray-400 text-gray-500 text-sm mr-2">
                                  T
                                </span>
                                <span className="font-semibold">
                                  Tailwind Labs
                                </span>
                              </p>
                              <p className="hover:text-[#50BDF8]">
                                <span className="border p-2 rounded-md border-gray-400 text-gray-500 text-xs mr-2">
                                  W
                                </span>
                                <span className="font-semibold">
                                  Workcation
                                </span>
                              </p>
                            </nav>
                          </div>
                        </div>
                        <div className="ml-10 flex gap-2">
                          <span>
                            <Settings className="text-gray-500" />
                          </span>
                          <span className="hover:text-[#50BDF8]">Settings</span>
                        </div>
                      </div>
                    </aside>
                  </div>
                  {side && (
                    <div>
                      <div
                        className="absolute text-3xl left-[50%] h-screen top-0 pt-4 w-1/2  bg-gray-100 opacity-80"
                        onClick={() => {
                          setSide(false);
                        }}
                      >
                        <X />
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="flex sm:w-2">
                <label htmlFor="search">
                  <Search className={clsx("w-5 mt-1 md:ml-2")} />
                </label>
                <input
                  className={clsx(
                    "h-8 focus:outline-none ml-2 md:w-232",
                    side && "w-8",
                  )}
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                />
              </div>
              <div className="flex">
                <span className="md:border-r border-gray-300">
                  <Bell className="w-5 md:mr-4  text-gray-500 " />
                </span>
                <CircleUser
                  className="md:mx-2 w-14"
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
                        <ChevronDown className="w-4 mx-2 text-gray-600 hidden md:block" />
                      </span>
                    )}
                    {profile ? (
                      <div className="absolute right-4 py-2 top-18 shadow-xl rounded-lg border-1 border-gray-100 text-left bg-white">
                        <p className="px-6 py-2 hover:bg-gray-100 ">
                          Your Profile
                        </p>
                        <p className="px-6 py-2 hover:bg-gray-100">Sign Out</p>
                      </div>
                    ) : (
                      <ChevronDown className="w-4 mx-2 text-gray-600 hidden md:block" />
                    )}
                  </button>
                </span>
              </div>
            </header>
          </div>
          <div>
            <section
              onClick={() => {
                setProfile(false);
              }}
            >
              <p
                className={clsx(
                  "border-3 border-dotted rounded-lg h-auto m-8 border-gray-400 p-4  md:mx-8",
                )}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                dignissimos ipsum expedita reiciendis repudiandae hic Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
                dolore. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Beatae voluptatibus voluptatum quod. Aspernatur ipsum
                culpa natus sint, vero aut sed repellendus quasi odio beatae a
                deserunt, eaque officia aperiam dolorum corrupti, deleniti
                impedit quibusdam doloribus? Sint doloribus vel aliquam. Sint
                aliquid ex ipsam itaque aliquam architecto nam illo aperiam,
                iste necessitatibus facere? Quos minima nulla officiis corrupti
                voluptates veritatis deleniti soluta natus harum illo eos, error
                voluptate sed esse! Neque laboriosam alias sequi sunt, expedita
                qui accusantium hic impedit voluptatibus vero quaerat facere
                quidem odit esse quia, deserunt, consequatur consectetur velit
                est ad in. Ipsa sapiente impedit porro tempore sit. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Beatae, nulla.
                Excepturi magni sed fugiat qui? Distinctio adipisci commodi rem,
                nihil eveniet quidem quaerat nobis reprehenderit voluptate
                corporis id hic recusandae deserunt eius consequatur aliquid
                laboriosam dolor dolorem? Nemo possimus, blanditiis cum quae
                commodi excepturi iure, facilis labore reiciendis nobis ipsum
                voluptates, ab illum. Alias voluptatem dolor modi tenetur
                blanditiis ipsam illo omnis facilis optio ratione, numquam
                ducimus explicabo aliquid corporis eos itaque! Architecto, animi
                rerum? Excepturi error, aut voluptates soluta esse accusamus
                dolore facilis rem ea magni! Iste porro, suscipit eveniet
                tempore quae laboriosam id architecto consectetur iure provident
                minus, non autem praesentium ipsa quasi quos facilis dolorum
                numquam perspiciatis voluptate! Odio modi veritatis ex totam id
                veniam non voluptas? Deleniti, quasi eos aspernatur cupiditate
                distinctio ipsam minima, porro consequuntur dolorum eveniet
                deserunt mollitia suscipit repellendus neque, nihil officia!
                Molestias quas blanditiis id excepturi, totam accusamus repellat
                veniam commodi. Aspernatur animi ea a qui sequi iste expedita
                quidem. Optio nostrum voluptatem aut repellat atque fugiat
                aliquid commodi, inventore est rerum obcaecati ullam at suscipit
                magnam minima expedita, quod reprehenderit tempore vel eveniet
                quaerat nemo quo quia magni. Fugit rerum similique dolore
                necessitatibus adipisci quibusdam magni ipsam quos asperiores!
                Deserunt pariatur asperiores, ipsam nihil dolores excepturi
                reiciendis laboriosam veritatis velit culpa provident sunt
                eveniet ipsum non eaque possimus itaque omnis perspiciatis
                molestiae quasi debitis, maiores esse cupiditate veniam! A
                nostrum rem omnis veritatis! Laborum perferendis saepe
                laudantium ipsa nemo itaque illo ipsam assumenda molestias, ea
                vero quas possimus quibusdam eaque, et repellendus consectetur
                doloremque in! Laboriosam possimus a alias at quidem ratione
                pariatur iusto molestiae nostrum sit deserunt veritatis
                accusantium vel sint culpa ex velit est enim, accusamus
                recusandae ut eum eveniet. Amet, facere eaque! Quasi accusantium
                sunt ipsam! Aliquam, tempore. Numquam perferendis asperiores
                esse libero! Repudiandae, adipisci, voluptate porro nemo
                perspiciatis praesentium veniam asperiores aspernatur cum
                aliquid ut dolorum nihil sapiente, fuga libero quis sunt culpa
                commodi numquam repellat quidem corporis minima aliquam.
                Voluptatibus molestiae aliquam rem perspiciatis praesentium,
                ducimus quia iusto dolor aliquid, cupiditate quidem eius sit
                impedit incidunt esse architecto eaque temporibus sunt earum
                inventore accusamus? Rerum quos amet architecto voluptate
                necessitatibus, enim libero quisquam possimus suscipit! Rem
                deleniti provident assumenda nobis consequuntur? Nam iusto neque
                labore et quae. Eos sapiente eum culpa, atque numquam blanditiis
                tempore omnis incidunt corporis magnam quisquam accusantium
                itaque natus labore nobis nulla qui facere vel. Natus tempore
                tenetur esse sed! Sequi, maxime aspernatur voluptates, magnam
                tempore cupiditate nesciunt ullam, quam magni at voluptas vitae
                numquam. Quisquam eius similique unde culpa fugit id voluptas
                voluptatibus incidunt! Ea voluptates labore facere accusamus
                delectus ut laboriosam sapiente vero sunt, id, eius rem illum
                odit enim cupiditate debitis rerum quo molestiae impedit
                voluptatibus excepturi soluta, animi quis reprehenderit. Odit
                doloribus vero pariatur hic rerum temporibus iusto ipsa quas.
                Quam eum odit vero voluptates consectetur minus itaque quos et
                temporibus dolor accusantium cupiditate doloribus laudantium,
                dolorem obcaecati consequatur ipsum aspernatur tenetur maxime
                dignissimos fugiat, at harum a? Assumenda iste itaque molestias
                culpa obcaecati ea, accusamus ab. Optio dolorum dolor sint
                veniam quibusdam nulla eos perferendis sit numquam, vitae
                incidunt laborum provident, voluptates delectus nobis. Sunt nisi
                libero ex, exercitationem praesentium nulla doloremque quo quasi
                suscipit, nam est, ut possimus facilis alias vel. Dolorem animi
                voluptatum natus quidem, aliquid quam accusantium consequuntur
                error iusto necessitatibus sunt commodi? Quos corporis labore
                facilis, non doloribus perferendis cum a delectus aliquam
                cupiditate doloremque molestias in quidem incidunt, obcaecati
                aut id sint error maiores veritatis ratione impedit ut?
                Temporibus animi porro tenetur officiis dolorem rem, doloribus
                dolores, asperiores voluptatem, deserunt ratione vel. Quidem
                quae eveniet voluptates. Fuga magnam repudiandae, laboriosam
                exercitationem voluptate ad corrupti recusandae suscipit,
                molestiae itaque incidunt non tempora assumenda, quas cupiditate
                distinctio. Vel quidem facilis accusamus dolores a. Fuga
                accusamus voluptatum nostrum maiores, nam repudiandae, ad quasi
                repellat enim quis voluptatem dicta optio. Cupiditate
                consequuntur tenetur porro suscipit est accusamus necessitatibus
                nihil, at blanditiis itaque laudantium accusantium rem odit,
                aspernatur iusto autem minus incidunt ratione distinctio. Earum
                nisi, reiciendis, pariatur fugit quis ratione molestiae rerum
                repudiandae enim est natus, consectetur dolorem! Iure esse quasi
                ut illum aliquid amet odit ea eum exercitationem. Dolor
                distinctio sunt, ex nisi impedit excepturi quam id sapiente
                dolores autem labore maiores nesciunt quae maxime cum commodi,
                delectus odio ratione nihil error. Dicta iste consequuntur aut
                consectetur atque temporibus numquam officiis dolores in dolorum
                explicabo odit obcaecati ipsam a dolorem, nostrum aspernatur.
                Consectetur animi ratione aperiam sequi hic perspiciatis
                voluptatum neque maxime illum adipisci. Ipsa similique nam
                saepe, tempora dolores asperiores porro veniam aut suscipit.
                Voluptatem, voluptates voluptatum laudantium ullam
                necessitatibus optio nihil ipsam. Cum veniam quisquam dolores,
                at rerum voluptatum totam officia possimus consectetur earum
                perspiciatis accusantium fugit quas, eveniet consequatur cumque
                voluptas corporis minima ducimus quos ex enim hic architecto.
                Asperiores excepturi voluptatem nemo praesentium molestiae,
                voluptatum error deserunt animi tempore, natus tempora enim, hic
                neque? Laboriosam, reprehenderit. Cupiditate quos quas excepturi
                modi! Non quae repellendus sed consectetur illo reiciendis esse
                culpa a, modi vitae dolorum ducimus odio pariatur possimus
                maiores. Rem laboriosam ex omnis! Minus numquam amet qui dolorum
                commodi minima autem? Tempora minus consequuntur quia ea quo
                dolorem, dolore aliquam sunt sed nulla at, voluptatibus
                doloremque perspiciatis natus sequi officiis iusto? Iure ullam
                reprehenderit impedit molestias laudantium, velit esse
                consequatur excepturi animi! Iste accusamus cum quos iure
                voluptates autem assumenda delectus ratione? Neque, magni.
                Blanditiis quia itaque ratione beatae porro nobis praesentium
                debitis, reprehenderit laborum voluptate sapiente ab harum optio
                nihil culpa nesciunt dolorem accusantium sequi quae alias
                veniam. Voluptatum aut cumque saepe enim ad, nemo rerum ut esse,
                fugiat vero culpa corporis vitae iusto, ea at pariatur. Culpa
                nemo quae eos, laborum possimus mollitia ex cumque? Laboriosam
                voluptates aut, vitae cum rem et at deserunt tempore praesentium
                sed non dolor est autem molestiae temporibus voluptas cumque
                dolores fugiat quod obcaecati quo neque sequi. In eum nulla
                reiciendis officiis? Nostrum voluptatem nisi eaque
                exercitationem repellendus accusamus non dolor nobis ipsum cum
                sapiente tenetur aspernatur optio reprehenderit cumque
                dignissimos ducimus saepe, veritatis ea, soluta aliquid porro?
                Id velit temporibus soluta optio! Temporibus.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
