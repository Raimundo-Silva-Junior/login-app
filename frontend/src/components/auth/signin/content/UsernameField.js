import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";

function UsernameField({username, setUsername}){

    const [checked, setChecked] = useState(true)

    function checkUsername(e){

        setUsername(e.target.value)

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
            label="Usuário" 
            variant="outlined"
            error={!checked}
            focused={username?true:false}
            color={checked?"success": "primary"}
            onChange={(e)=>checkUsername(e)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <PersonIcon />
                    </InputAdornment>
                ),
            }}
            sx={{marginBottom: "10px"}}
        />
    )

}


export default UsernameField;