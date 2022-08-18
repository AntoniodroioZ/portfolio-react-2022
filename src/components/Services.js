import CardServices from "./CardServices";
import backendImage from './images/services/backend.svg'
import frontendImage from './images/services/frontend.svg'
import webImage from './images/services/web.svg'

const services=[
    {
        id:1,
        image:backendImage,
        name:'Desarrollo backend.',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reprehenderit excepturi in at minus deserunt aspernatur, ea tempore laborum distinctio nemo, veritatis ut. Laudantium libero, modi officiis necessitatibus veniam laborum!'
    },{
        id:2,
        image:frontendImage,
        name:'Desarollo Frontend.',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reprehenderit excepturi in at minus deser'
    },{
        id:3,
        image:webImage,
        name:'Bases de datos, cloud, entre otros.',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reprehenderit excepturi in at minus deserunt aspernatur, ea tempore laborum distinctio nemo, veritatis ut. !'
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
                    <div className="md:flex md:justify-around ">
                        {listItems}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;