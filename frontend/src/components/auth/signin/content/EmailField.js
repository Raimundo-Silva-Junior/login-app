import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";

function EmailField({email, setEmail}){

    const [checked, setChecked] = useState(true)

    function checkEmail(e){

        setEmail(e.target.value)


        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(regex.test(e.target.value)){
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
            label="Email" 
            variant="outlined" 
            error={!checked}
            focused={email?true:false}
            color={checked?"success": "primary"}
            onChange={(e)=>checkEmail(e)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <EmailIcon />
                    </InputAdornment>
                ),
            }}
            sx={{marginBottom: "10px"}}
        />
    )

}


export default EmailField;