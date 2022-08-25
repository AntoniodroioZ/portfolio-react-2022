import TecnologiesCard from "./TecnologiesCard";

const Habilities = () =>{
    return(
        <div className="bg-color-main pt-20 pb-20 md:pt-40 md:pb-40">
            <div className="text-white container mx-auto text-center">
                <div>
                    <p className="text-3xl">Mis habilidades</p>
                    <p className="text-sm text-gray">Tecnologías y lenguajes</p>
                    <div className="md:flex md:justify-evenly pt-8">
                        <div>
                            <TecnologiesCard idJson='0'/>
                            <TecnologiesCard idJson='1'/>
                            <TecnologiesCard idJson='2'/>
                        </div>
                        <div>
                            <TecnologiesCard idJson='3'/>
                            <TecnologiesCard idJson='4'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default Habilities;