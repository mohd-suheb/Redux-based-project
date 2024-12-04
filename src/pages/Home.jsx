import { useEffect, useState } from "react";
import Product from "../component/Product" 
import Cart from "./Cart";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const[loading, setloading] = useState(false);
  const[posts, setposts] = useState([]);

  async function fetchproductdata(){

    setloading(true);

    try {
      const res = await fetch( API_URL);
      const data = await res.json();
      setposts(data);
    } 
    catch (error) {
      console.log("error fetching the data");
      setposts([]);

      
    }
    setloading(false);
 
  }

  useEffect(()=>{
    fetchproductdata();
  },[]);

  return <div>

{

  loading?<spinner/>:
  (
    posts.length>0 ?(

      <div>
        {

          posts.map((post)=>{
            return <Product key = {post.id}  post = {post}/>
          }

          )
        }
      </div>
    ):
  (
    <div>
    <p>no data found</p>
  </div>
  )
   
    
  )
}

  </div>;
};

export default Home;
