import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';

function PasswordField({label, password, confirmPassword, setPassword, confirmedPassword, setConfirmedPassword}){


    function checkPassword(e){
        
        setPassword(e.target.value)

        if(label.includes("Confirmar")){
            confirmPassword = e.target.value
        }
        else{
            password = e.target.value
        }
        
    
        if (password === confirmPassword && password.length >= 8){
            setConfirmedPassword(true)
            
        }
        else if((!confirmPassword && !password)){
            setConfirmedPassword(true)
        }
        

        else{
            setConfirmedPassword(false)
        }

    }

    return (
        <TextField 
            label={label}
            variant="outlined" 
            focused={(confirmPassword || password )?true:false}
            error={!confirmedPassword}
            type="password"
            color={(confirmedPassword && password)? "success": !password? "primary":"error"}
            onChange={(e)=>checkPassword(e)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <LockIcon />
                    </InputAdornment>
                ),
            }}
            sx={{marginBottom: "10px"}}
        />
    )

}


export default PasswordField;