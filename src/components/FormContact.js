// import { useForm } from '@formspree/react';


const FormContact = () =>{
    return(
        <div className="bg-color-main" id="Contacto">
            <div className="container mx-auto text-white pt-16 pb-16">
                <p className="text-3xl text-center font-bold">Contactame</p>
                <div className="md:flex justify-center">
                    <div className="flex items-center">
                        <div>
                            <div className="flex items-center pt-4 pb-4">
                                <img src="https://img.icons8.com/ios/50/000000/circled-envelope.png" alt="" />
                                <div>
                                    <p className="text-xl font-bold">Email</p>
                                    <p>antoniohernandez49@aragon.unam.mx</p>

                                </div>
                            </div>
                            <div className="flex items-center pt-4 pb-4">
                                <img src="https://img.icons8.com/office/50/000000/marker.png" alt="" />
                                <div>
                                    <p className="text-xl font-bold">Ubicación</p>
                                    <p>México - EDOMEX</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pl-2 pr-2 md:pl-4 md:pr-4">
                        <form className="" action="https://formsubmit.co/antoniohernandez49@aragon.unam.mx" method="POST">
                            <div className="md:flex">
                                <div className="pb-4 pt-4 md:pl-4 md:pr-4 md:pt-8 md:pb-8">
                                    <div className="bg-color-form rounded-3xl">
                                        <p className="pl-4 pt-2 pb-2">Your name:</p>
                                        <input className="text-black bg-gray-400 rounded-3xl w-full" type="text" name="name" required/>
                                    </div>
                                </div>
                                <div className="pb-4 pt-4 md:pl-4 md:pr-4 md:pt-8 md:pb-8">
                                    <div className="bg-color-form rounded-3xl">
                                        <p className="pl-4 pt-2 pb-2">Your email:</p>
                                        <input className="text-black bg-gray-400 rounded-3xl w-full" type="email" name="email" required/>
                                    </div>

                                </div>
                            </div>
                            <div className="pt-8 pb-8">
                                <div className="w-full bg-color-form rounded-3xl ">
                                    <p className="pl-4 pt-2 pb-2">Your message:</p>
                                    <textarea className="text-black w-full bg-gray-400 rounded-3xl" name="message" required></textarea>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button className="text-base md:text-lg mt-4 pt-2 pb-2 bg-color-green rounded-2xl pl-4 pr-4 box-shadow-custom" type="submit">Enviar <i className="fa fa-paper-plane"></i></button>
                            </div>
                            <input type="hidden" name="_captcha" value="false"></input>
                            <input type="hidden" name="_next" value="https://antoniodroios.com/"></input>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormContact;