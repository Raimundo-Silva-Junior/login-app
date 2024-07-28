import TextField from '@mui/material/TextField';
import { useState } from "react";


function LastNameField({lastName, setLastName}){

    const [checked, setChecked] = useState(true)

    function checkLastName(e){

        setLastName(e.target.value)

        if (e.target.value.length > 0){
            setChecked(true)
        }
        else if(!e.target.value){
            setChecked(true)
        }
        else{
            setChecked(false)
        }
    }


    return (
        <TextField 
            label="Sobrenome" 
            variant="outlined" 
            error={!checked}
            focused={lastName?true:false}
            color={checked?"success": "primary"}
            onChange={(e)=>checkLastName(e)}
            sx={{marginBottom: "10px"}}
        />
    )

}


export default LastNameField;