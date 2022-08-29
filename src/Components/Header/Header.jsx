
import {AppBar,Toolbar,styled,Box,Typography} from '@mui/material';

//Components
import Search from './Search';
import CustomButtons from './CustomButtons';



//overriding css in AppBar
const Styledheader = styled(AppBar)`
background: #2874f0;
height : 55px;
`
//Box is a replacement of div tag
//Typography is a replacement of p tag
const Components = styled(Box)`
margin-left : 13%;
line-height:0; 
`

const SubHead = styled(Typography)`
font-size: 10px;
`

const PlusImage = styled('img')({
    width:10,
    height:10,
    marginLeft:4
})

const CustomButtonWrapper = styled(Box)`
margin: 0 5% 0 auto;
`



const Header = () =>
{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const logoplus = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return ( 
        <Styledheader>
            <Toolbar style={{minHeight:55}}>
                <Components>
                    <img src={logoURL} alt='logo' style={{width:75}}/>
                   <Box style={{display:'flex'}}>
                   <SubHead>Explore&nbsp;
                    <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
                   </SubHead>
                   <PlusImage src={logoplus} alt ='logo'/>
                
                   </Box>
                </Components>

                <Search/>
                <CustomButtonWrapper>
                <CustomButtons/>
                </CustomButtonWrapper>
               

            </Toolbar>
        </Styledheader>
       
    )
  
}
export default Header;