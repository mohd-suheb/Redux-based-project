import React from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';

const CartItem = ({item, index}) => {
  const dispatch = useDispatch();

  function removefromecart(){
    dispatch(remove(item.id));
    toast.success("item removed ");
  }
  return (
    <div>

      <div>
        <img src={item.image}/>
      </div>
      <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>

        <div>
          <p>{item.price}</p>
          <div onClick={removefromecart}>
          <MdOutlineDeleteOutline />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem