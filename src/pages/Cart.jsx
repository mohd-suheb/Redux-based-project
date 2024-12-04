import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


const Cart = () => {
  const{cart} = useSelector((state)=>state);
  const[totalamount, settotalamount] = useState(0);
  
  useEffect(()=>{
    settotalamount(cart.reduce((acc, curr) => acc +curr.price, 0));
  })
  return (
    <div>

      {

        cart.length>0 ?(
          <div>
            <div>
              {
                cart.map((item, index)=>{
                  return <Cartitem item = {item.id} item ={item} itemindex = {index}/> 
                })
              }
            </div>
          </div>
        ):
        
        <div>

          <div>
            <div>your Cart</div>
            <div>your summary</div>
            <span>tatal Amount:{cart.length}</span>
          </div>

          <div>
            <p>total amount:${totalamount}</p>
            <button>
              check now
            </button>
          </div>
        </div>
        
        
        (

          <div>
            <h1>Cart Empty</h1>
            <Link>
            <button>
             shop now
            </button>
            </Link>
            
          </div>
        )
      }
    </div>
  )
}

export default Cart