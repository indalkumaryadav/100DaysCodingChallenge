import React from "react";
import { connect } from "react-redux";
import {} from "../redux/shoppping/shopping-action";
import PR from "../Products/Products";
const Product = ({ products }) => {
  return (
    <div>
      {products.map((item) => (
        <PR />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps(Product));
