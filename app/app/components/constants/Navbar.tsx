import { NavbarItem } from "../molecules/NavbarItem";
import { useState, useEffect } from "react";
import Hamburger from "../atoms/Hamburger";
import screen_converter from "../functions/screen_converter";

const Navbar = () => {

        const [isNavbarOpen, setIsNavbarOpen] = useState(false);
        const [isScrolled, setIsScrolled] = useState(false);
        const [heroIntroHeight, setHeroIntroHeight] = useState(400);
        const [screenMobile, setScreenMobile] = useState(true);

        const handleNavbarClose = () => {
            setIsNavbarOpen(false);
        }


    let links = [
        {
            "top":"ME",
            "id": "top",
            "bottom": [{"name":"INTRO", "id": "top"},{"name":"RESUMÉ", "id": "resumé"}],
            "hasSub": true
        }, 
        {
            "top":"PROJECTS",
            "id": "projects",
            "bottom": [{"name":"ALL PROJECTS", "id": "projects"}, {"name":"FILTER PROJECTS", "id": "filter"}],
            "hasSub": true
        }, 
        {
            "top":"CONTACT",
            "id": "contact",
            "bottom": [""],
            "hasSub": false
        }
    ];

    useEffect(() => {
        //let screenWidth = screen_converter();
        //screenWidth === "desktop" ? setScreenMobile(false) : setScreenMobile(true);
        
        //const heroImageElement = document.getElementById('header-intro');
        //if (heroImageElement) {
        //    const height = heroImageElement.offsetHeight;
        //    setHeroIntroHeight(height);
        //}
//
        ////console.log("scrollposition:", scrollPosition);
        //console.log("heroImageHeight:", heroIntroHeight);
        
        const handleScroll = () => {
            const heroImageElement = document.getElementById('header-intro');
            setHeroIntroHeight(heroImageElement!.offsetHeight);
            const scrollPosition = window.scrollY;
            const hamburger = document.getElementById('hamburger');        
            
            //if user has scrolled by header position
            if (scrollPosition > heroIntroHeight){ 
                setIsScrolled(true); 
                hamburger!.style.position = "fixed";
                hamburger!.style.top = "0";
            }
            else {
                setIsScrolled(false);
                hamburger!.style.position = "relative";
                hamburger!.style.top = "0";
        }
    }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    
    }, [heroIntroHeight]);

    const toggleNavbar = () => {
        console.log(window.scrollY);
        
        if (isNavbarOpen){
            setIsNavbarOpen(false); 
            document.body!.style.overflowY = "scroll";
            //if user hasn't scrolled by header position
            if (window.scrollY < heroIntroHeight){
                const hamburger = document.getElementById('hamburger');
                hamburger!.style.position = "relative";
                hamburger!.style.top = "0";
            }
            } else {
            setIsNavbarOpen(true);
            document.body!.style.overflowY = "hidden";
            if (window.scrollY < heroIntroHeight){
                const hamburger = document.getElementById('hamburger');
                hamburger!.style.position = "fixed";
                hamburger!.style.top = "0";
            }
        }
    }


    return (
        <nav className={`relative flex`}>
            <div id="hamburger" className={`h-16 md:h-24 ${isNavbarOpen ? 'w-full lg:w-2/4' : 'w-full'} z-50 flex justify-center items-center transition-all duration-300 bg-light-blue ${isScrolled ? 'fixed top-0' : 'relative'}`}>
                <Hamburger isOpen={isNavbarOpen} onClick={toggleNavbar}></Hamburger>
            </div>
            <div className={`fixed inset-0 w-screen h-screen backdrop-blur-sm bg-black/75 overflow-y-scroll  transition-all ${isNavbarOpen ? ' translate-x-0 h-screen z-40' : '-translate-x-full h-screen'}`} onClick={toggleNavbar}></div>
            <div className={`fixed inset-x-0 top-16  z-20 w-screen h-full lg:w-2/4 bg-light-blue transform transition-transform duration-300 ease-in-out ${isNavbarOpen ? ' translate-x-0 h-screen z-50' : '-translate-x-full h-screen'}`}>
                <div className="h-4/5 flex flex-col justify-around">
                    {links.map((link, index) => {
                    return (
                        <NavbarItem key={index} toggleNavbar={toggleNavbar} title={link.top} hasSub={link.hasSub} subLinks={link.bottom} id={link.id !== undefined ? link.id : undefined}></NavbarItem>
                    )
                })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;