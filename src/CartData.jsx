import { useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { qntyincrease,qntyDecrease,dataRemove } from "./cartSlice";
import { FaRupeeSign } from "react-icons/fa";







const CartData=()=>{
const proData=useSelector(state=>state.mycart.cart);

const dispatch=useDispatch();

let sno=0;

let netamount=0;

    const ans=proData.map((key)=>{
        netamount+=key.price*key.qnty
        sno++;
        
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td> <img src={key.image} width="100" height="100" /></td>
                <td > {key.name}</td>
                <td align="center"> {key.category}</td>
                <td style={{color:"red",fontWeight:"bolder"}} align="center"> {key.brand}</td>
                <td align="center"> {key.price}</td>
                <td style={{fontSize:"20px",}} align="center">

                <a href="#" onClick={()=>{dispatch(qntyDecrease({id:key.id}))}} style={{color:"red"}}>
                <CiCircleMinus />

                </a>

                {key.qnty}
                <a href="#" onClick={()=>{dispatch(qntyincrease({id:key.id}))}}>
                <CiCirclePlus />
                </a>
                </td>
                 <td align="center">{key.price*key.qnty}</td>

                 <td>
                    <button onClick={()=>{dispatch(dataRemove({id:key.id}))}} style={{color:"red"}}>Remove</button>
                 </td>


            </tr>
            
            
            </>
        )
    })
    return(
        <>
        <h1 align="center" style={{fontStyle:"italic",marginTop:"20px"}}>MY ORDER</h1>
        <h4 align="right" style={{paddingRight:"20px"}}>Total Amount: <FaRupeeSign />
        {netamount}</h4> 
        
        <Table striped bordered hover style={{marginTop:"25px",marginBottom:"60px"}}>
      <thead >
        <tr>
          <th>S.no</th>
          <th>Product</th>
          <th>Detail</th>
          <th>Category</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Amount</th>
          <th>Remove</th>
          

        </tr>
      </thead>
      <tbody>
{ans}
</tbody>
      </Table>

        
        
        
        </>
    )
}
export default CartData;