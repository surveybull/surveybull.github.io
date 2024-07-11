import { useState } from "react"
import Logo from "../../assets/logo.svg"
import logoTitle from "../../assets/logoTitle.svg"
import questionmark from "../../assets/questionmark.svg"
import build from "../../assets/build.svg"
import money from "../../assets/money.svg"
import distribute from "../../assets/distribute.svg"
import about from "../../assets/about.svg"
import team from "../../assets/team.svg"
import phone from "../../assets/phone.svg"
import title from "../../assets/title.svg"
import docs from "../../assets/docs.svg"
import MobileNavbar from "./MobileNavbar"
import DesktopNavbar from "./DesktopNavbar"



const NavBar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const [helloMenu, setHelloMenu] = useState(false)
    const [pageMenu, setPageMenu] = useState(false)
    const NavbarData = [
        {
            id: 0,
            title: "Home",
            path:"/",
            ChildItem: []
        },
        {
            id: 1,
            title: "Roadmap",
            path:"/roadmap",
            ChildItem: []
        },
        {
            id: 2,
            title: "Pricing",
            path:"/pricing",
            ChildItem: []
        },
        {
            id: 3,
            title: "Blog",
            path:"/blog",
            ChildItem: []
        },
        {
            id: 4,
            title: "FAQs",
            path:"/faqs",
            ChildItem: []
        }
    ]
    const MobileMenu = () => {

        return (
            <div className="absolute inset-x-0 top-0 z-20 origin-top-right transform p-2 transition xl:hidden" id="headlessui-popover-panel-:r16:" tabindex="-1" data-headlessui-state="open">
                <div className=" divide-y-2 divide-slate-100 rounded-lg bg-slate-100 shadow-lg ">
                    <div className="px-5 pb-6 pt-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <img src={logoTitle} />
                            </div>
                            <div className="-mr-2">
                                <button onClick={() => { setOpenMenu(false) }} className="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:bg-slate-700 dark:text-slate-200" type="button" data-headlessui-state="open">
                                    <span className="sr-only">Close menu</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x h-6 w-6" aria-hidden="true">
                                        <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 py-6">
                        <div className="flex flex-col space-y-5 text-center text-sm dark:text-slate-300">
                            <div className="space-y-4">
                                <a className="flex justify-between text-lg text-slate-700 " onClick={() => { setPageMenu(prev => !prev) }}><div></div>{"Pages"}
                                    <svg data-accordion-icon className="w-4 h-4 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
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
                                        <div className="py-2">
                                            <a className="text-lg  text-slate-700" target="_blank" href="https://surveybull.gitbook.io/surveybull-whitepaper" onClick={() => {
                                                setOpenMenu(false)
                                                setPageMenu(false)
                                            }}  >
                                                Docs
                                            </a>
                                        </div>
                                    </div>
                                }
                                {/* <a className="flex justify-between text-lg text-slate-700 " onClick={() => { setHelloMenu(prev => !prev) }}><div></div>{"About"}
                                    <svg data-accordion-icon className="w-4 h-4 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
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
                                <button className="items-center appearance-none px-6 py-3 font-medium rounded-2xl relative text-white bg-[#5831C8] hover:bg-brand focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-slate-900 flex w-full justify-center text-lg">Get started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (

        <div className="mx-auto w-full py-4" >
            <div className="md:block hidden"><DesktopNavbar NavbarData={NavbarData}/></div>
            <div className="md:hidden block"><MobileNavbar NavbarData={NavbarData}/></div>
        </div>
    )
}

export default NavBar