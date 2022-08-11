import profile from './images/profile.svg'
import CV from './images/CV-2022.pdf';

const About = () =>{
    return(
        <div id="SobreMi">
            <div className="container mx-auto pl-4 pr-4 md:pl-60 md:pr-60 md:pt-16">
                            <p className="text-white text-xl md:text-3xl text-center pt-8 pb-8">Mas sobre mí</p>
                <div className="text-white md:columns-2 ">
                    <div className='justify-center'>
                        <div>
                        </div>
                        <div className='flex justify-center'>
                            <img className='w-72 ' src={profile} alt="XD" />
                        </div>

                        
                    </div>
                    <div className='md:flex items-center'>

                        <div className='text-center'>
                            <p className='pt-4'>Actualmente tengo 22 años, me encuentro estudiando la carrera de Ingeniería en Computación en la FES Aragón, estando en el ultimo semestre, noveno.</p>
                            <p className='pt-4 pb-4'>Me encanta la programación, manejo lenguajes de programación variados como C, Java, Python, PHP, JavaScript, entre otros, siendo mi mayor interes los ultimos 3 y utilizo frameworks o librerias para complementar mejor mi trabajo, siendo Laravel de PHP el framework que mejor domino.
                            </p>
                            <a className="text-2xl md:text-3xl mt-4 pt-2 pb-2 bg-color-green rounded-2xl pl-4 pr-4 box-shadow-custom mt-8" href={CV} target="_blank" rel="noopener noreferrer" download="CV-Antonio-GH-2022.pdf">Descargar CV <i class="fa fa-file-pdf"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;