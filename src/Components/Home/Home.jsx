import { useEffect } from 'react';
import { getProducts } from '../../redux/actions/productAction';
import { useDispatch , useSelector} from 'react-redux/es/exports';
//import {Fragment} from "react";
import {Box,styled} from '@mui/material';

import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "../Home/Slide";
import MidSlide from './midSlider'
import MidSection from './MidSection';

const   Component = styled(Box)`
padding:15px 10px;
background: #F2F2F2;
`

const Home = () => 
{

   const  {products} =  useSelector(state => state.getProducts );
   console.log(products);

const dispatch = useDispatch(); 

    useEffect(() => {
       dispatch(getProducts())

    }, [dispatch] )
    return(
        <>
           <NavBar/>
           <Component>

           <Banner/>
           <MidSlide products = {products} title="Deal of the day " timer={true}/>
           <MidSection />
           <Slide products = {products} title="Discount for you " timer={false}/>
           <Slide products = {products} title="Suggesting items" timer={false}/>
           <Slide products = {products} title="Top selection" timer={false}/>
           <Slide products = {products} title="Trending Offers" timer={false}/>
           <Slide products = {products} title="Seasons Top picks" timer={false}/>
           
           
           


           </Component>
          

        </>
       
    )
}
export default Home;