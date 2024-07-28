
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useState } from "react";
import { Link } from "react-router-dom"
import { Navigate, useLocation } from 'react-router-dom'

import UsernameField from "./content/UsernameField";
import PasswordField from "./content/PasswordField";

function LoginForms({setIsLogedin}){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [sucess, setSucess] = useState(false);

    const { state } = useLocation()


    async function submit(e){
        e.preventDefault()
        let response = await fetch(
            'http://127.0.0.1:8000/api/login/',
            {
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify({"username": username, "password": password})

            }
                    
        )
    
        if(response.status === 200){

            let data = await response.json()
       
         
            setError(false);
            setSucess(true);
            localStorage.setItem("token", data);

            setIsLogedin(localStorage.getItem("token"));
            
            return
        }
        
        setError(true);
        setSucess(false);

    };


    return (

        <>
            <UsernameField setUsername={setUsername}/>
            <PasswordField setPassword={setPassword}/>
            <div style={{
                display: "grid",
                placeItems: "center center",
                height: "80%"

            }}>
                <Button 
                    variant="contained" 
                    sx={{width: "10px"}}
                    onClick={(e) => submit(e)}
                >
                Login
                </Button>
                {(error || state) && <Alert 
                    severity={!state?"error": "success"}
                    variant="filled"
                    sx={{margin:"10px"}}
                    
                    >{!state? "Usuário ou senha estão errados...":  "Registrado com sucesso!"}
                    
                    </Alert>}
                
                {sucess && <Navigate replace to="/"/>}
                
                <Link to="/signin">Ainda não é cadastrado?</Link>

            </div>
            

        </>
    )

}

export default LoginForms;
