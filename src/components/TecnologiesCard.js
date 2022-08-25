import { useState } from "react";
import styled from "styled-components";
import linkedin from './images/social-icons/linkedin.svg'

import { TecnologiesObjs } from "../TecnologiesJSON";

const TecnologiesCard = (props) =>{
    const [showInfo , setShowInfo] = useState(false);

    console.log(TecnologiesObjs[props.idJson].img);
    let itemsIteration = TecnologiesObjs[props.idJson].tecnology;
    let listItems = itemsIteration.map((item)=>{
        return(
            // <p key={item.nameTecnology}>{item.nameTecnology}</p>
            <div key={item.nameTecnology} className="flex justify-between items-center pt-1 pb-1">
                <img src={item.img} alt={item.img} className="pr-20"/>
                <p>{item.nameTecnology}</p>
            </div>
        );

    });

    return(
        <>
        <div className="grid justify-items-center w-full pl-8 pr-8 md:pl-0 md:pr-0 pt-2 pb-2" >
            <div className="text-white flex w-full md:w-9/12 " onClick={() => {
                                    setShowInfo(!showInfo);
                                    console.log(showInfo);
                                }}>
                <div className="w-10 md:w-30 lg:w-36">
                    <img className="" src={TecnologiesObjs[props.idJson].img} alt="imagen" />
                </div>
                <div className={`flex justify-between items-center  w-11/12 lg:pl-2 ${showInfo ? 'skill-close':'skill-open'}`} >
                    <p className="md:w-64 text-xl">{TecnologiesObjs[props.idJson].name}</p>
                    <i className={`fa fa-angle-down p-2 ${showInfo ? 'arrow-close':'arrow-open'}`}></i>
                </div>
                
            </div>
            <div className={!showInfo ? 'hidden':''} >
                    {listItems}
                    
             </div>
        </div>
        </>
    );
}

export default TecnologiesCard;