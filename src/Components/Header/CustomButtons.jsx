import { useState ,useContext} from "react";
import { Box,Button,Typography,styled } from "@mui/material";
import {ShoppingCart} from '@mui/icons-material';
import { DataContext } from "../../context/dataProvider";
import Profile from "./profile";


//components
import LoginDialog from "../login/LoginDialog";


const Wrap = styled(Box)`
display:flex;
margin : 0 3% 0 auto;
& > button, & > p, & > div {
    margin-right: 40px;
    font size : 16px;
    align-items : center;
}
`
const Container = styled(Box)`
display:flex;
`
const LoginButton = styled(Button)`
color:#2874f0;
background:#FFF;
text-transform : none;
padding: 5px 40px;
border-radius : 2px;
box-shadow:none;
height:32px;
font-weight:600;
`

const CustomButtons = () => {

    const [open,setopen] = useState(false);
    const{account , setAccount } = useContext(DataContext);

    const openDialog = () => {
        setopen(true);
    }
    return (
        <Wrap>
            {
                account ? <Profile account = {account} setAccount={setAccount}/> :
                <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
            }
            
            <Typography style={{marginTop: 3,width:135}}>Become a Seller</Typography>
            <Typography style={{marginTop: 3}}>More</Typography>        
         
          <Container>
         < ShoppingCart />
         <Typography>Cart</Typography>
        

          </Container>

          <LoginDialog open={open} setopen={setopen}/>
</Wrap>
    )
}


export default CustomButtons;