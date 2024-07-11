<MobileNavbar/>
            <div className="  mx-auto flex items-center justify-between  py-6 " >
                <div className=" p-2 xl:p-0 flex items-center ">

                    <div id="spin" className="  flex items-center " style={{ animationDuration: "2s", animationIterationCount: "1" }}>
                        <img onClick={() => {
                            var a = document.getElementById('spin')
                            a.classList.add('animate-spin')
                            setTimeout(() => {
                                a.classList.remove("animate-spin")
                            }, 2000)
                        }} src={Logo} />
                    </div>
                    <div className=" ml-4  flex items-center ">
                        <img height={30} src={title} />
                    </div>
                </div>
                <div className="block xl:hidden p-3" >
                    <button onClick={() => { setOpenMenu(true) }} className="inline-flex items-center justify-center rounded-md bg-slate-100 p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 xl:hidden dark:bg-slate-700 dark:text-slate-200" type="button" aria-expanded="true" id="headlessui-popover-button-:Rm5m:" aria-controls="headlessui-popover-panel-:r16:">
                        <span className="sr-only">Open menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu h-6 w-6" aria-hidden="true">
                            <line x1="4" x2="20" y1="12" y2="12">
                            </line>
                            <line x1="4" x2="20" y1="6" y2="6">
                            </line><line x1="4" x2="20" y1="18" y2="18">
                            </line>
                        </svg>
                    </button>
                    {openMenu &&
                        <MobileMenu />}
                </div>
                <div className="hidden xl:flex justify-around items-center">
                    <div className="">
                        <a target="_blank" href="https://surveybull.gitbook.io/surveybull-whitepaper" className=" px-3 h-full  cursor-pointer text-sm font-medium text-black hover:text-slate-700 lg:px-6 xl:text-base xl:px-8  dark:hover:text-slate-300 ">Docs</a>
                    </div>
                    <div className="flex hidden w-auto justify-around xl:flex" >
                        <div className="relative group px-3 h-full font-poppins cursor-pointer text-sm font-medium text-black hover:text-slate-700 lg:px-6 xl:text-base xl:px-8  dark:hover:text-slate-300"   >
                            <div className="">{"About"}</div>
                            <div className=" group-hover:block group-hover:absolute right-[-50%] hidden  rounded-2xl z-10 bg-[#f7f7ff]" >
                                <div className="w-full py-6 px-3 ">

                                    <a className="flex w-full items-center p-4 min-w-[300px]" href="#why">
                                        <div className="flex justify-center items-center rounded-2xl w-[40px]  h-[40px] bg-[#5831C8] ">
                                            <img width={25} height={25} color="white" src={questionmark} />
                                        </div>
                                        <div className="ml-5   text-[#5831c8] ">
                                            <div className=" font-semibold text-sm ">Why SurveyBull </div>
                                            <div className=" font-normal text-xs">reasons to choose surveybull </div>
                                        </div>
                                    </a>
                                    <a className="flex w-full items-center p-4 min-w-[300px]" href="#why">
                                        <div className="flex justify-center items-center rounded-2xl w-[40px]  h-[40px] bg-[#5831C8] ">
                                            <img width={25} height={25} color="white" src={build} />
                                        </div>
                                        <div className="ml-5   text-[#5831c8] ">
                                            <div className=" font-semibold text-sm ">Survey Building</div>
                                            <div className=" font-normal text-xs">Crafting made easy</div>
                                        </div>
                                    </a>
                                    <a className="flex w-full items-center p-4 mt-2 min-w-[300px]" href="#EarnToken">
                                        <div className="flex justify-center items-center rounded-2xl w-[40px]  h-[40px] bg-[#5831C8] ">
                                            <img width={25} height={25} color="white" src={money} />
                                        </div>
                                        <div className="ml-5  text-[#5831c8]">
                                            <div className=" font-semibold text-sm ">Earn Token  </div>
                                            <div className=" font-normal text-xs">earn tokens with your data </div>
                                        </div>
                                    </a>
                                    <a className="flex w-full items-center p-4 mt-2 min-w-[300px]" href="#Distribution">
                                        <div className="flex justify-center items-center rounded-2xl w-[40px]  h-[40px] bg-[#5831C8] ">
                                            <img width={25} height={25} color="white" src={distribute} />
                                        </div>
                                        <div className="ml-5  text-[#5831c8]">
                                            <div className=" font-semibold text-sm ">Distribution </div>
                                            <div className=" font-normal text-xs">know your share </div>
                                        </div>
                                    </a>
                                    <a className="flex w-full items-center p-4 mt-2 min-w-[300px]" target="_blank" href="https://surveybull.gitbook.io/surveybull-whitepaper">
                                        <div className="flex justify-center items-center rounded-2xl w-[40px]  h-[40px] bg-[#5831C8] ">
                                            <img width={25} height={25} color="white" src={docs} />
                                        </div>
                                        <div className="ml-5  text-[#5831c8]">
                                            <div className=" font-semibold text-sm ">Docs </div>
                                            <div className=" font-normal text-xs">Read Whitepaper </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* <div className="relative group px-4 h-full font-poppins cursor-pointer text-sm font-medium text-black hover:text-slate-700 lg:px-6 xl:text-base xl:px-8  dark:hover:text-slate-300"   >
                            <div className="">{"About"}</div>
                            <div className=" group-hover:block group-hover:absolute right-[-50%] hidden  rounded-2xl z-10 bg-[#f7f7ff]" >
                                <div className="w-full py-6 px-3 ">

                                    <div className="flex w-full items-center p-4 min-w-[300px]">
                                        <div className="flex justify-center items-center rounded-2xl w-[40px]  h-[40px] bg-[#5831C8] ">
                                            <img width={25} height={25} color="white" src={about} />
                                        </div>
                                        <div className="ml-5   text-[#5831c8] ">
                                            <div className=" font-semibold text-sm ">About Us </div>
                                            <div className=" font-normal text-xs">Brief about us</div>
                                        </div>
                                    </div>
                                    <div className="flex w-full items-center p-4 mt-2 min-w-[300px]">
                                        <div className="flex justify-center items-center rounded-2xl w-[40px]  h-[40px] bg-[#5831C8] ">
                                            <img width={25} height={25} color="white" src={team} />
                                        </div>
                                        <div className="ml-5  text-[#5831c8]">
                                            <div className=" font-semibold text-sm ">Team </div>
                                            <div className=" font-normal text-xs">Meet our team</div>
                                        </div>
                                    </div>
                                    <div className="flex w-full items-center p-4 mt-2 min-w-[300px]">
                                        <div className="flex justify-center items-center rounded-2xl w-[40px]  h-[40px] bg-[#5831C8] ">
                                            <img width={25} height={25} color="white" src={phone} />
                                        </div>
                                        <div className="ml-5  text-[#5831c8]">
                                            <div className=" font-semibold text-sm ">Contact Us </div>
                                            <div className=" font-normal text-xs">contact to know more</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <button className={"items-center appearance-none font-poppins tracking-wide px-6 py-3 text-sm font-medium rounded-3xl relative text-white bg-[#5831C8] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-slate-900 transition ease-in-out delay-50 hover:scale-105 hidden whitespace-nowrap xl:px-6 xl:block"}>
                        {"Get Started"}
                    </button>
                </div>
            </div>