import axios from "axios";
import * as actionTypes  from '../constants/productConstants';



const URL ='http://localhost:8000'; 



export  const getProducts = () => async(dispatch) =>
{
    try
    {
        const {data} = await axios.get(`${URL}/products`);
      
        dispatch({type: actionTypes.GET_PRODUCT_SUCCESS, payload:data});    //internally calls reducer

    }
    catch(error)
    {
        dispatch({type: actionTypes.GET_PRODUCT_FAIL , payload:error.message });
      
    }
}