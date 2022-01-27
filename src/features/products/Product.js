import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import { getProductsAsync } from "./productSlice";
import styles from "./Product.module.css";

const Products = (props) => {
  const dispatch = useDispatch();

  const { loading } = props;

  useEffect(() => {
    // dispatch(getProductsAsync());
  }, []);

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loader}>
          <img src="/loading.gif" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <p></p>
    </div>
  );
};

const mapStateToProps = ({ products }) => ({
  allProducts: products.products,
  loading: products.loading,
});

export default connect(mapStateToProps, null)(Products);
