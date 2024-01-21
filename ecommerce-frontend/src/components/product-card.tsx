import { FaPlus } from "react-icons/fa";

type ProductsProps = {
    productId: string;
    name: string;
    price: number;
   image: string;
   stock : number;
   handler : ()=>void;
  };
  const server='jdvhkbs';
  const ProductCard=({productId,image,stock,handler,price,name}: ProductsProps) => {
    return  <div className="product-card">
        <img src={image} alt={"Product Image"}/>
        <p>{name}</p>
       <span>₹{price}</span>
       <div>
        <button onClick={()=>handler()}><FaPlus/></button>
        </div>

        

    </div>
  }
  
  export default ProductCard;