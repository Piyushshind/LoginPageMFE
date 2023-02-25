import React from "react";
import PropTypes from "prop-types";
import classes from "./ProductCard.module.css";
import { Text } from "../Text/Text";
import { useRecoilState } from "recoil";
import { cartCount } from "../../../Recoil/Recoil";

/**
 * Impliments ProductCard component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns ProductCard
 */

export const ProductCard = (props) => {
  const { productImage, vendor, productName, productPrice} = props;
  const [count ,setCount] = useRecoilState(cartCount)
  return (
    <>
    <div className={classes.container}>
      <img src={productImage} />
      <Text variant="text-sm">{vendor}</Text>
      <Text variant="heading-sm">{productName}</Text>
      <Text><p  onClick={()=>setCount(count + 1)}> {productPrice}</p></Text>
      
    </div>
    
    </>
  );
};

/**
 * Property type definations
 *
 * @type {object}
 * @property {string} example - shows example - delete for in use
 */

export const propTypes = {
  productImage: PropTypes.string,
  productName: PropTypes.string,
  vendor: PropTypes.string,
  productPrice:PropTypes.number
  
};

/**
 * Default values for ProductCard
 *
 * @type {object}
 * @property {string} example='ProductCard
 */

export const defaultProps = {
  productImage: "https://thumbs.dreamstime.com/z/banana-bunch-19074568.jpg",
  vendor: "Hodo Foods",
  productName: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
  productPrice : '100 rs'
};

ProductCard.propTypes = propTypes;
ProductCard.defaultProps = defaultProps;

export default ProductCard;
