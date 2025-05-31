import { RiShoppingCartFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const TopHeader=()=>{
    const Product=useSelector(state=>state.mycart.cart);
    console.log(Product);
    const proLength=Product.length;

    const navigate=useNavigate();
    return(
        <>

<div id="headerdata">
<div id="head1">

 {/* <h1>Bata</h1> */}
 <i>Bata</i>
</div>
<div id="head2">
    <a href="#" onClick={()=>{navigate("/cartdata\\")}} style={{color:"#fff"}}>
    <RiShoppingCartFill />

    </a>
    <span>
    <FaRegHeart /></span>
    <span>
    <RiAdminFill />

    </span>
</div>


</div>


        </>
    )
}

export default TopHeader;