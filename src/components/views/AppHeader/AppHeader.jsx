import React from "react";
import PropTypes from "prop-types";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  
  Navbar,
} from "react-bootstrap";
// import classes from './AppHeader.module.css';
// import {  } from "@mui/system";
import { Link } from "react-router-dom";
import { productData } from "../../../Constdata/mockdata";
/**
 * Impliments AppHeader component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns AppHeader
 */

export const AppHeader = (props) => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="./">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a Product"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{20}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
            <span style={{ padding: 10 }}>Cart is Empty!</span>
              {productData.length > 0 ? (
                <>
                  {productData.map((prod) => (
                    <span className="cartitem" key={productData.id}>
                      <img
                        src={prod.img}
                        className="cartItemImg"
                        alt={prod.productName}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.productName}</span>
                        {/* <span>₹ {prod.price.split(".")[0]}</span> */}
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

/**
 * Property type definations
 *
 * @type {object}
 * @property {string} example - shows example - delete for in use
 */

export const propTypes = {
  example: PropTypes.string,
};

/**
 * Default values for AppHeader
 *
 * @type {object}
 * @property {string} example='AppHeader
 */

export const defaultProps = {
  example: "AppHeader",
};

AppHeader.propTypes = propTypes;
AppHeader.defaultProps = defaultProps;

export default AppHeader;
