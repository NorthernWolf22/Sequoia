"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//images and icons
import sequoiaLogo from "@/../public/images/sequoia.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeaderModule() {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    const toggleMenu = () : void => setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);

    //Ensures the menu closes whenever the user clicks a menu option to navigate to a new page
    const handleNavLinkClick = () :void => {
        setIsNavOpen(false);
    }

    return (
        <header
            className="mod-space-sm relative"
        >
            <div className="cont">
                <div className="flex justify-between items-center">

                    <div className="max-h-11 flex row mr-5">
                        <Image
                            src={sequoiaLogo}
                            width={42}
                            height={42}
                            alt="Geometric logo"
                        />
                        <div className="text-4xl font-bold tracking-tighter ml-3.5">Sequoia</div>
                    </div>

                    <button
                        className="block sm:hidden btn--icon text-black hover:text-brand-500"
                        onClick={toggleMenu}
                    >
                        <FontAwesomeIcon
                            icon={faBars}
                            className="fa-2x"
                        />
                    </button>

                    <nav className={`sm:block ${isNavOpen ? "block" : "hidden"} absolute top-22 left-0 w-full h-fit z-5 flex flex-col bg-white shadow-[0_8px_8px_rgba(0,0,0,0.08)] sm:static sm:w-fit sm:flex-row sm:shadow-none`}>
                        <div className="block sm:inline p-5 sm:p-0">
                            <Link href="#about" onClick={handleNavLinkClick}>About</Link>
                        </div>
                        <div className="block sm:inline p-5 sm:p-0">
                            <Link href="#services" onClick={handleNavLinkClick}>Services</Link>
                        </div>
                        <div className="block sm:inline p-5 sm:p-0">
                            <Link href="#testimonials" onClick={handleNavLinkClick}>Testimonials</Link>
                        </div>
                    </nav>

                </div>
            </div>
        </header>
    );
}

export default HeaderModule;