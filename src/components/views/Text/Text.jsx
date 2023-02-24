import React from "react";
import PropTypes from "prop-types";
import classes from "./Text.module.css";

/**
 * Impliments Text component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Text
 */

export const Text = (props) => {
  const { children, variant = "text-xs" ,price} = props;
  console.log({ variant ,ty: typeof variant});
  return (
    <p
      className={`${classes.container} ${classes[variant]} 
      ${variant?.includes("text") && classes["text-weight"]}`}
    >
      {children}
      {price}
    </p>
  );
};

/**
 * Property type definations
 *
 * @type {object}
 * @property {string} example - shows example - delete for in use
 */

export const propTypes = {
  variant: PropTypes.oneOf(["text-xs", "text-small"]),
 
};

/**
 * Default values for Text
 *
 * @type {object}
 * @property {string} example='Text
 */

export const defaultProps = {
  variant: "text-xs",
  
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
