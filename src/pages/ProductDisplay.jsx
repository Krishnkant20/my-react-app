import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtoCart } from '../cartSlice';
import { useDispatch } from 'react-redux';
import { FaRupeeSign } from "react-icons/fa";
import { PiNumberCircleSevenBold } from "react-icons/pi";
import { PiNumberCircleEightBold } from "react-icons/pi";
import { PiNumberCircleNineBold } from "react-icons/pi";
import { IoIosStarOutline } from "react-icons/io";
import { GiBallerinaShoes } from "react-icons/gi";








const ProductDisplay=()=>{
    const {id}=useParams();
    const [Product,setProduct]=useState({});

    const dispatch=useDispatch();


    const loadData=async()=>{
        let api=`http://localhost:3000/product/${id}`;
        const response=await axios.get(api);
        console.log(response.data);
        setProduct(response.data);
    }

useEffect(()=>{
    loadData();
}, []);

    return(
        <>

        <div id="product">

            <div id="proimg"> 
                <img src={Product.image} width={400} height={500} />
            </div>
            <div id="proname">
                <h1 style={{color:'red'}}>{Product.brand}-<GiBallerinaShoes /><br /></h1>
               <h3 style={{color:"gray"}} id="fix">{Product.name} <br /> </h3> 
                <h4 style={{color:"gray"}}>{Product.category} <br /></h4>  <br />
                 <h5 style={{color:"green"}}> Special price <br /> <span style={{color:"black"}}><FaRupeeSign /> {Product.price} </span> <br /></h5>


                 <h3 style={{color:"gray"}}>Size: <span style={{color:"black"}}> <PiNumberCircleSevenBold />         <PiNumberCircleEightBold />        <PiNumberCircleNineBold /></span>

                 </h3> <br />




                <h6 id="rate" style={{width:"75px",borderRadius:"15px",backgroundColor:"green",color:"#fff",fontSize:"25px",paddingLeft:"7px"}}>4.3<IoIosStarOutline /></h6> 1,66,164 ratings and 17,059 reviews <br />  <br /> <br /><br />

                <Button variant="primary" onClick={()=>{dispatch(addtoCart({id:Product.id,name:Product.name,category:Product.category,brand:Product.brand,price:Product.price,image:Product.image,qnty:1}))}} style={{fontSize:"20px"}}>Add to cart</Button>


            </div>
        </div>
        
        
        
        </>
    )
}
export default ProductDisplay;