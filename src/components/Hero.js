import email from './images/social-icons/email.svg'
import github from './images/social-icons/github.svg'
import linkedin from './images/social-icons/linkedin.svg'
import profile from './images/profile.svg'

const Hero = () =>{
    return(
        <div className="bg-color-main md:pt-32 md:pb-32">
            <div className="container mx-auto md:pl-16 md:pr-16 md:pl-60 md:pr-60">
                <div className='md:flex justify-between items-center'>
                    <div className='md:order-last'>
                        <img className='w-full p-8 md:p-0 min-w-0 max-w-lg' src={profile} alt="" />
                    </div>
                    <div className='flex items-center text-center'>
                        <div>
                            <div className="text-white text-xl md:text-2xl pr-0 md:pr-32">
                                <p className="pb-2">Hola, soy</p>
                                <p className="text-color-main text-3xl md:text-4xl pt-2 pb-2 font-bold">Antonio GH</p>
                                <p className="text-2xl md:text-3xl pt-2 pb-2 font-bold">Ingeniero en Computación y Desarrollador Web</p>
                                <p className='text-base'>Me encanta la programación, actualmente mi experiencia se enfoca en el desarrollo web Fullstack con distintas tecnologias y lenguajes.</p>
                                <br />
                                <button className="text-2xl md:text-3xl mt-4 pt-2 pb-2 bg-color-green rounded-2xl pl-4 pr-4 box-shadow-custom">Contacto <i className="fa fa-paper-plane"></i></button>
                            </div>
                        </div>
                    </div>

                    
                </div>
                <br />
                <div className='flex justify-center md:justify-start pb-4'>
                    <p className='text-white text-xl md:pr-2'>Social </p>
                    <a className='pl-2 pr-2' href="mailto:antonybey13@gmail.com" target="_blank"><img className='w-8' src={email} alt="" /></a>
                    <a className='pl-2 pr-2' href="https://github.com/AntoniodroioZ" target="_blank"><img className='w-8' src={github} alt="" /></a>
                    <a className='pl-2 pr-2' href="https://www.linkedin.com/in/antoniodroioz/" target="_blank"><img className='w-8' src={linkedin} alt="" /></a>
                </div>
            </div>
        </div>
    );
}

export default Hero;