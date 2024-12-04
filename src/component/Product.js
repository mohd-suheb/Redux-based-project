import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { subtract } from "../redux/Slices/cartSlice";


const Product = ({post}) => {
  const {cart} = useSelector((state)=>state);
  const dispatch = useDispatch();

  const Addtocart = ()=>{
    dispatch(add(post));
    toast.success("item add to cart")
  }

  const removetocart =()=>{
    dispatch(subtract(post));
    toast.success("removed to cart");
  }
  return <div>

    <div>
      <p>{post.tittle}</p>
    </div>

    <div>
      <p>{post.description}</p>
    </div>

    <div>
      <img src={post.image}/>
    </div>

    <div>
      <p>{post.price}</p>
    </div>

   {
     cart.some((p) => p.id == post.id)?
     (
      <button onClick={removetocart}>
        remove to cart
      </button>
     ):

     (
      <button  onClick={Addtocart}>
        Add to cart
      </button>
     )

   }
  </div>;
};

export default Product;
