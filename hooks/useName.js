import { useEffect, useState } from "react";
import { useUserContext } from "../context"
import { Banks, NavNames } from "../data/general";

const useName = () => {
    const [name, setName] = useState("")
    const {bank} = useUserContext();

    useEffect(()=>{

        if(bank){

            if(bank === Banks.Opay.name){

                setName(NavNames.Opay.name)
                
            }else if(bank === Banks.Palmpay.name){

                setName(NavNames.Palmpay.name)

            }

        }

    }, [bank])
    return{
        name
    }
}

export default useName