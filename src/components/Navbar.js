import { useState } from "react";
import icon from './images/icon.svg';


const Navbar = ()=>{
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return(
        <div className="fixed sticky top-0 nav-zindex">
            <nav className="bg-color-main">
                <div className="container mx-auto">
                    <div className="md:flex justify-between pt-4 pb-4 md:h-20">
                        <div className="flex justify-between">
                            <div className="flex text-white text-2xl md:text-4xl pl-6">
                                <a className="pt-2 md:pt-1" href="https://www.antoniodroios.com"><img src={icon} alt="" className="w-4 md:w-6"/></a>
                                
                                <a href="https://www.antoniodroios.com" className="md:pt-0 pt-0.5 pl-4"><h1>Antoniodroios</h1></a>
                            </div>
                            <div className="pr-6">
                                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex  items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 " aria-controls="navbar-default" aria-expanded="false" 
                                onClick={() => {
                                    setIsNavExpanded(!isNavExpanded);
                                }}>
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-6 h-6 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
                                </button>
                            </div>
                        </div>
                        {/* <div className={isNavExpanded ?"text-white md:flex justify-between text-center font-bold items-nav md:items-nav":"items-nav md:items-nav text-white md:flex justify-between text-center font-bold hidden"}> */}
                        <div className={`text-white md:flex justify-between text-center font-bold items-nav md:items-nav ${isNavExpanded ? '':'hidden'} `}>
                            <div className="pt-4 md:pt-2 md:pl-4 md:pr-4 text-lg">
                                <p><a href="#" onClick={() => {
                                    setIsNavExpanded(!isNavExpanded);
                                }}>Inicio</a></p>
                            </div>
                            <div className="pt-4 md:pt-2 md:pl-4 md:pr-4 text-lg">
                                <p><a href="#SobreMi" onClick={() => {
                                    setIsNavExpanded(!isNavExpanded);
                                }}>Sobre mi</a></p>
                            </div>
                            <div className="pt-4 md:pt-2 md:pl-4 md:pr-4 text-lg">
                                <p><a href="#Portafolio" onClick={() => {
                                    setIsNavExpanded(!isNavExpanded);
                                }}>Proyectos</a></p>
                            </div>
                            <div className="pt-4 md:pt-2 md:pl-4 md:pr-4 text-lg">
                                <p><a href="#Contacto" onClick={() => {
                                    setIsNavExpanded(!isNavExpanded);
                                }}>Contacto</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;