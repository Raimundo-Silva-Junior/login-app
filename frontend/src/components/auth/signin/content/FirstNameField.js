import TextField from '@mui/material/TextField';
import { useState } from "react";

function FirstNameField({firstName, setFirstName}){

    const [checked, setChecked] = useState(true)

    function checkFistName(e){

        setFirstName(e.target.value)

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
            label="Primeiro Nome" 
            variant="outlined" 
            error={!checked}
            focused={firstName?true:false}
            color={checked?"success": "primary"}
            onChange={(e)=>checkFistName(e)}
            sx={{marginBottom: "10px"}}
        />
    )

}


export default FirstNameField;