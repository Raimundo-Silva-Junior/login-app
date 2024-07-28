import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

function PasswordField({setPassword}){

    const [showPassword, setshowPassword] = useState(false);

    return (
        <TextField 
            label="Senha" 
            type={showPassword ? 'text' : 'password'}  
            variant="outlined" 
            focused={false}
            onChange={(e)=>setPassword(e.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <LockIcon />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setshowPassword(!showPassword)}

                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            sx={{marginBottom: "10px"}}
        />
    )

}


export default PasswordField;