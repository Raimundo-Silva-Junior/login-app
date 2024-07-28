import Button from '@mui/material/Button';

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Alert from '@mui/material/Alert';

import EmailField from "./content/EmailField";
import FirstNameField from "./content/FirstNameField";
import LastNameField from "./content/LastNameField";
import PasswordField from "./content/PasswordField";
import UsernameField from "./content/UsernameField";


function SigninForms(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState(true);

    const [error, setError] = useState(false);

    const navigate = useNavigate();


    async function submit(e){

        if(password === confirmPassword){

            e.preventDefault()
            let response = await fetch(
                'http://127.0.0.1:8000/api/register/',
                {
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            "username": username,
                            "password": password,
                            "password2": password,
                            "email": email,
                            "first_name": firstName,
                            "last_name": lastName

                        }
                    )

                }
                        
            )
            let data = await response.json()
            console.log(data)
            if(response.status === 201){

                navigate('/login', { state: { mensagem: 'Conta criada com sucesso!' } });
            }else{
                setError(true);
            }


            // 

            //
                
        }


        
    };


    return (

        <>
            <UsernameField username={username} setUsername={setUsername}/>
            <EmailField email={email} setEmail={setEmail}/>
            <FirstNameField firstName={firstName} setFirstName={setFirstName}/>
            <LastNameField  lastName={lastName} setLastName={setLastName}/>
            <PasswordField 
                label="Senha" 
                password={password} 
                confirmPassword={confirmPassword} 
                setPassword={setPassword}
                confirmedPassword={confirmedPassword}
                setConfirmedPassword={setConfirmedPassword}
            />
            <PasswordField 
                label="Confirmar Senha" 
                password={password} 
                confirmPassword={confirmPassword} 
                setPassword={setConfirmPassword}
                confirmedPassword={confirmedPassword}
                setConfirmedPassword={setConfirmedPassword}
            />

            <div style={{
                display: "grid",
                placeItems: "center center",
                height: "80%"

            }}>
                <Button 
                    variant="contained" 
                    onClick={(e) =>{submit(e)}}
                >
                Cadastrar
                </Button>
                
                {error && <Alert 
                    severity="error"
                    variant="filled"
                    sx={{margin:"10px"}}
                    
                    >Não foi possível criar o usuário, tente novamente...
                    
                    </Alert>}


                <Link to="/login" sx={{marginTop: "10px"}}>Já é cadastrado?</Link>
            </div>

        </>
    )

}

export default  SigninForms;
