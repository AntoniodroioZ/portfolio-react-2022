import { Footer } from "flowbite-react";
import icon from './images/icon.svg';

const FooterWeb = () =>{
    return(
       <div>
            <div className="container mx-auto pl-4 pr-4  pt-8 pb-8 text-white md:flex justify-between">
                <div className="flex justify-center text-white text-2xl md:text-4xl md:pl-6">
                    <a className="pt-2 md:pt-1" href="https://www.antoniodroios.com"><img src={icon} alt="" className="w-4 md:w-6"/></a>                        
                    <a href="https://www.antoniodroios.com" className="md:pt-0 pt-0.5 pl-4"><h1>Antoniodroios</h1></a>
                </div>
                <div className="md:flex text-center">
                    <div className="pt-4 md:pt-2 md:pl-4 md:pr-4 text-lg">
                        <p><a href="#">Inicio</a></p>
                    </div>
                    <div className="pt-4 md:pt-2 md:pl-4 md:pr-4 text-lg">
                        <p><a href="#SobreMi" >Sobre mi</a></p>
                    </div>
                    <div className="pt-4 md:pt-2 md:pl-4 md:pr-4 text-lg">
                        <p><a href="#Portafolio" >Proyectos</a></p>
                    </div>
                    <div className="pt-4 md:pt-2 md:pl-4 md:pr-4 text-lg">
                        <p><a href="#Contacto" >Contacto</a></p>
                    </div>
                </div>
            </div>
            <p className="text-gray-400 text-center pb-8">Todos los derechos reservados. 2022 ©</p>
       </div>
    );
}

export default FooterWeb;