import { useState } from "react"
import Logo from "../assets/logo.svg"
import logoTitle from "../assets/logoTitle.svg"
import questionmark from "../assets/questionmark.svg"
import build from "../assets/build.svg"
import money from "../assets/money.svg"
import distribute from "../assets/distribute.svg"
import about from "../assets/about.svg"
import team from "../assets/team.svg"
import phone from "../assets/phone.svg"
import title from "../assets/title.svg"


const NavBar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const [helloMenu, setHelloMenu] = useState(false)
    const [pageMenu, setPageMenu] = useState(false)

    const MobileMenu = () => {

        return (
            <div class="absolute inset-x-0 top-0 z-20 origin-top-right transform p-2 transition xl:hidden" id="headlessui-popover-panel-:r16:" tabindex="-1" data-headlessui-state="open">
                <div class=" divide-y-2 divide-slate-100 rounded-lg bg-slate-100 shadow-lg ">
                    <div class="px-5 pb-6 pt-5">
                        <div class="flex items-center justify-between">
                            <div>
                                <img src={logoTitle} />
                            </div>
                            <div class="-mr-2">
                                <button onClick={() => { setOpenMenu(false) }} class="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:bg-slate-700 dark:text-slate-200" type="button" data-headlessui-state="open">
                                    <span class="sr-only">Close menu</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-6 w-6" aria-hidden="true">
                                        <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="px-5 py-6">
                        <div class="flex flex-col space-y-5 text-center text-sm dark:text-slate-300">
                            <div class="space-y-4">
                                <a className="flex justify-between text-lg text-slate-700 " onClick={() => { setPageMenu(prev => !prev) }}><div></div>{"Pages"}
                                    <svg data-accordion-icon class="w-4 h-4 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </a>
                                {
                                    pageMenu && openMenu &&
                                    <div>
                                        <div className="py-2">
                                            <a className="text-lg text-slate-700" href="#why" onClick={() => {
                                                setOpenMenu(false)
                                                setPageMenu(false)
                                            }}  >
                                                Why Surveybull
                                            </a>
                                        </div>
                                        <div className="py-2">
                                            <a className="text-lg  text-slate-700" href="#SurveyBuilding" onClick={() => {
                                                setOpenMenu(false)
                                                setPageMenu(false)
                                            }}  >
                                                Survey Building
                                            </a>
                                        </div>
                                        <div className="py-2">
                                            <a className="text-lg  text-slate-700" href="#EarnToken" onClick={() => {
                                                setOpenMenu(false)
                                                setPageMenu(false)
                                            }}  >
                                                Earn Token
                                            </a>
                                        </div>
                                        <div className="py-2">
                                            <a className="text-lg  text-slate-700" href="#Distribution" onClick={() => {
                                                setOpenMenu(false)
                                                setPageMenu(false)
                                            }}  >
                                                Distribution
                                            </a>
                                        </div>
                                    </div>
                                }
                                {/* <a className="flex justify-between text-lg text-slate-700 " onClick={() => { setHelloMenu(prev => !prev) }}><div></div>{"About"}
                                    <svg data-accordion-icon class="w-4 h-4 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </a>
                                {
                                    helloMenu && openMenu &&
                                    <div>
                                        <div className="text-lg py-2 text-slate-700" onClick={() => {
                                            setOpenMenu(false)
                                            setHelloMenu(false)
                                        }}  >
                                            About us
                                        </div>
                                        <div className="text-lg py-2 text-slate-700" onClick={() => {
                                            setOpenMenu(false)
                                            setHelloMenu(false)
                                        }}>
                                            Team
                                        </div>
                                        <div className="text-lg py-2 text-slate-700" onClick={() => {
                                            setOpenMenu(false)
                                            setHelloMenu(false)
                                        }}>
                                            Contact Us
                                        </div>
                                    </div>
                                } */}
                                <button class="items-center appearance-none px-6 py-3 font-medium rounded-2xl relative text-white bg-[#5831C8] hover:bg-brand focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-slate-900 flex w-full justify-center text-lg">Get started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (

        <div className="mx-auto w-full " >
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
                <div class="block xl:hidden p-3" >
                    <button onClick={() => { setOpenMenu(true) }} class="inline-flex items-center justify-center rounded-md bg-slate-100 p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 xl:hidden dark:bg-slate-700 dark:text-slate-200" type="button" aria-expanded="true" id="headlessui-popover-button-:Rm5m:" aria-controls="headlessui-popover-panel-:r16:">
                        <span class="sr-only">Open menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-6 w-6" aria-hidden="true">
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

                    <div className="flex hidden w-auto justify-around xl:flex" >
                        <div className="relative group px-4 h-full font-poppins cursor-pointer text-sm font-medium text-black hover:text-slate-700 lg:px-6 xl:text-base xl:px-8  dark:hover:text-slate-300"   >
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
        </div>
    )
}

export default NavBar