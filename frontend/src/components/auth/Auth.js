import Box from '@mui/material/Box';
import LoginForms from "./login/LoginForms";
import SigninForms from "./signin/SigninForms";


function Auth({type, setIsLogedin}){

    return (

        <div style={{
            display: "grid",
            placeItems: "center center",
            height: "80%"

            }} >
            <Box
                component="form"
                sx={{
                    backgroundColor: "lightgray",
                    padding: "20px",
                    display: "grid",
                    width: "30%",
                    borderRadius: "10px",
                    
                }}
            >
            {type === "login" && <LoginForms setIsLogedin={setIsLogedin}/>}
            {type === "signin" && <SigninForms/>}

   
            </Box>
        </div>
    )

}

export default Auth;