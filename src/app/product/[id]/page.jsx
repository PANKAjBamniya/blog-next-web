import React from "react";

const Product = ({ params }) => {
  const { id } = params;
  return <div>product : {id}</div>;
};

export default Product;
