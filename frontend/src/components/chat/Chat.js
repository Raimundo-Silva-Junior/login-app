import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom'

function Chat({setIsLogedin}){

    function sair(){
 
        localStorage.clear();
        setIsLogedin(localStorage.getItem('token'));

    }

    return (
        <>
            <Button onClick={sair}>Sair</Button>
            <h1>CHAT WINDOW</h1>
            {!localStorage.getItem('token') && <Navigate replace to="/login"/>}
        </>
    )
}

export default Chat