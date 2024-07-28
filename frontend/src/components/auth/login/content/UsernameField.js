import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';

function UsernameField({setUsername}){

    return (
        <TextField 
            label="Usuário" 
            variant="outlined" 
            focused={false}
            onChange={(e)=>setUsername(e.target.value)}
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