const CardServices = (props) =>{
    return(
        <div>
            <div className="flex justify-center">
                <img className="h-36 p-1" src={props.image}/>

            </div>
            <div className="px-6 py-4 h-42">
                <div className="font-bold text-xl mb-2 text-color-main">{props.name}</div>
                <p className="text-gray-300 text-base ">
                {props.description}
                </p>
            </div>
        </div>
    );
}

export default CardServices;