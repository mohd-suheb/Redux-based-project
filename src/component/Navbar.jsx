import { LuShoppingCart } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div >
      <div className="flex flex-row justify-between">
       <NavLink to ="/">
        <div>
        <img 
          src="https://www.threads.net/@lovebabbar1/post/CuayALXvXeo/should-i-consider-changing-codehelps-logo-your-opinion-guyswhat-do-you-think-ani" 
          
        />
        </div>
       </NavLink>
        <div>
          <NavLink to= "/">
          <p>Home</p>
          </NavLink>
          

          <NavLink to ="Cart">
          <LuShoppingCart /> 
          </NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
