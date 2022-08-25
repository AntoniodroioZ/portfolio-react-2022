import { Carousel,Tooltip } from "flowbite-react";
import Imagen1 from './images/portfolio1.png'

import { ProjectsJSON } from "../ProjectsJSON";

const Portfolio = () =>{
    let carouselItems = ProjectsJSON.map((item)=>{
        return(
            <div className="md:flex h-full items-center justify-center text-white cursor-default" key={item.id}>
                <div className="md:columns-2">
                    <div className="w-full md:w-96">
                        <img src={item.img} alt="Seivoc" />
                    </div>
                    <div className="w-96 ">
                        <p className="font-bold text-2xl cursor-text">{item.name}</p>
                        <p className="pb-4 cursor-text">{item.short_description}</p>
                        <div className="flex justify-center md:justify-start">
                            <Tooltip content={item.link ? 'Ir al sitio de '+item.name : 'Link no disponible'}>
                            {/* <Tooltip content={'Acerca de '+ item.name}> */}
                                <div className="md:pl-0 pr-2">
                                    <a className="text-lg md:text-xl mt-4 pt-2 pb-2 bg-color-green rounded-2xl pl-4 pr-4 box-shadow-custom" href={item.link} target='_blank'>Ver mas <i className="fa fa-angle-right"></i></a>
                                </div>
                            </Tooltip>
                            <Tooltip content={item.github ? 'Repositorio de '+item.name : 'Repositorio privado | No disponible'}>
                            {/* <Tooltip content='Repositorio privado | No disponible'> */}
                                <div className="pl-2 pr-2">
                                    <a className="text-lg md:text-xl mt-4 pt-2 pb-2 bg-color-github rounded-2xl pl-4 pr-4 box-shadow-github" href={item.github} target='_blank' >Código <i className="fa fa-github"></i></a>
                                </div>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        );
    });


    return(
        <div id="Portafolio">
            <div className="container mx-auto pt-16 md:pt-20 pb-20 pr-2 pl-2">
                <p className="text-3xl text-white text-center pb-4 pt-4 md:pt-8">Portafolio</p>
                <div className="h-96 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel slideInterval={5000}>
                        {carouselItems}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;