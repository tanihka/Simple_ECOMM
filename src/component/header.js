import "../App.css";
import { Route, Routes, Link } from "react-router-dom";
import Search from "./search";

function Header(props) {
  return (
    <div className="flex shopping-card">
      {/* <div onClick={()=> props.handleShow(false)}>Shopping Cart App</div> */}
      <Link to="/"><span className="d">Shopping Cart App</span></Link>
     

      <Link to="/cart">
        {" "}
        <span className="carty">Cart</span>
        <sup>{props.count}</sup>
      </Link>
    </div>
  );
}

export default Header;
