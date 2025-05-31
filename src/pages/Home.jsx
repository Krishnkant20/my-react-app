import Carousel from 'react-bootstrap/Carousel';
import ban3 from "../Images/ban3.jpg";
import ban2 from "../Images/ban2.jpg";
import ban4 from "../Images/ban4.jpg";
import { useState,useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtoCart } from '../cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';





const Home=()=>{

 const [mydata,setMydata]=useState([]); 

 const dispatch=useDispatch();
 const navigate=useNavigate();


const loadData=async()=>{
  let api="http://localhost:3000/product";
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

<Carousel>
      <Carousel.Item>
        <img src={ban3} width="100%" height="100%" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ban2}  width="100%" height="100%"/>
      <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ban4}  width="100%" height="100%"/>
      <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


{/* --------------------------------Banner design------------------------- */}

<div id='banner'>
<div id='bann1'>
  <h6>ONLINE EXCLUSIVE UPTO 55% OFF</h6>
  <h5>MEN    WOMEN</h5>
</div>
<div id='bann2'>
  <h6>UPTO 50% OFF</h6>
  <h5>MEN    WOMEN</h5>

</div>

</div>

{/* -----------------------------------Banner next page -----------------------------*/}
<div id='bannext'>
  <div id='next1'>
    <h3>Bata</h3>
    <h2>TIMELESS TRENDS <br />COLLECTION</h2>
  </div>
  <div id='next2'>
  <h3>Bata</h3>
  <h2>ETERNAL ELEGANCE <br />COLLECTION</h2>

  </div>
  <div id='next3'>
  <h3>Bata</h3>
  <h2>MARVEL COlLECTION</h2>

  </div>
</div>

{/*------------------------------------------- carts design------------------------- */}

<h1 id='bata'>Bata</h1>
<div id='prodata'>
{ans}

</div>



        </>
    )
}

export default Home;