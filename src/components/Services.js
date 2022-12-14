import CardServices from "./CardServices";
import backendImage from './images/services/backend.svg'
import frontendImage from './images/services/frontend.svg'
import webImage from './images/services/web.svg'

const services=[
    {
        id:1,
        image:backendImage,
        name:'Desarrollo backend.',
        description:'Cuento con experiencia en diversas tecnologías para el desarrollo backend, cuento con experiencia creando APIs REST con Frameworks basados en MVC.'
    },{
        id:2,
        image:frontendImage,
        name:'Desarollo Frontend.',
        description:'Actualmente cuento con experiencia en la maquetación de sitios web, consumo de APIs y actualmente mejorando mis conocimientos en React.'
    },{
        id:3,
        image:webImage,
        name:'Bases de datos, cloud, entre otros.',
        description:'Diseño de bases de datos, consultas, uso de MV en Azure y Google Cloud.'
    }
    
];

const Services = () =>{
    let listItems = services.map((service)=>{
        return(
            <div key={service.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-color-main m-4 md:w-full">
                <CardServices key={service.id} name={service.name} image={service.image} description={service.description}/>
            </div>
        );

    });
    return(
        <div>
            <div className="container mx-auto pt-12 md:pb-4">
                <div>
                    <div className="flex text-white text-2xl md:text-4xl pb-12 pl-4">
                        <p className="pr-1 md:pr-3">Lo que</p>
                        <p className="text-color-main">se hacer:</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="md:flex md:justify-around ">
                            {listItems}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;