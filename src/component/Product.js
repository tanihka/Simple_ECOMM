import { useEffect, useState } from "react";
import './product.css';

const api = "https://fakestoreapi.com/products";



function Product( {addToCart} ) {
   
  const [product, setProduct] = useState([]);


  const apidata = async (url) => {
    try {
      const apiRes = await fetch(url);
      const res = await apiRes.json();
    if(res.length > 0){
        setProduct(res);
    }
      console.log(res);
    } catch (e) {
      console.error();
    }
  };

  useEffect(() => {
    apidata(api);
  }, []);
  const [searchItem, setSearchItem] = useState('');


  return (
    <div className="product">
    <div className="template-search">
        <div className="search-container">
            <input type="text" id="search-input" placeholder="Please Enter...." onChange={(e) => {
                setSearchItem(e.target.value);
            }} />
        </div>
    </div>

      <div className="flex">{product
      .filter((val) => {
        if(searchItem == " "){
return val;
        }else if(val.title.toLowerCase().includes(searchItem.toLowerCase())){
return val;
        }
      })
      .map((data)=>{
            const { id, price, category, image, title }  = data;
            return(
                <div style={{ width: "30%" }} className="chomu">
                <div className="product-item" >
                <img src={image} width="30%" />
                <p> { title} | {category}</p>
                <p>{}</p>
                <p>Rs. {price} /-</p>
                <button onClick={ () =>addToCart(data) } >Add To Cart</button>
                </div>
                </div>

            )
          })}</div>
    </div>
  );
}
export default Product;
