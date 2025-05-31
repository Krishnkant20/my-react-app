import { useState,useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtoCart } from './cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';








const Kids=()=>{

 const [mydata,setMydata]=useState([]); 

 const dispatch=useDispatch();
 const navigate=useNavigate();


const loadData=async()=>{
  let api="http://localhost:3000/product?category=Kids";
  const response= await axios.get(api);
  console.log(response.data);
  setMydata(response.data)
}

useEffect(()=>{
  loadData();
},[]);

const ProDisplay=(id)=>{

  navigate(`/productdisplay/${id}`);
}


const ans=mydata.map((key)=>{
  return(
    <>

<Card style={{ width: '18rem' }}>
  <a href="#" onClick={()=>{ProDisplay(key.id)}}>
  <Card.Img variant="top" src={key.image} />
 </a>
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
         Category {key.category}
         <h4>Price : {key.price}</h4>
         <h4>{key.brand}</h4>
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addtoCart({id:key.id,name:key.name,category:key.category,brand:key.brand,price:key.price,image:key.image,qnty:1}))}}>Add to cart</Button>
      </Card.Body>
    </Card>

    
    </>
  )
})



return(
        <>
<div id='prodata'>
{ans}

</div>



        </>
    )
}

export default Kids;