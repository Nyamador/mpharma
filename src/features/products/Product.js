import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getProductsAsync, addProduct } from "./productSlice";
import styles from "./Product.module.css";

const Products = (props) => {
  const [productData, setProductData] = useState({
    id: "",
    name: "",
    prices: [], //{id:0, price: 10, date: 120}
  });
  const { loading, getProducts, allProducts } = props;

  useEffect(() => {
    getProducts();
  }, []);

  const handleProductSave = () => {};

  // {id:"", name: '', prices: [{date:"", id: "", price: ""}]}

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
    <>
      <div className={styles.form}>
        <input
          placeholder="Product Name"
          onChange={(e) =>
            setProductData({ ...productData, name: e.target.value })
          }
        />
        <input
          placeholder="Price"
          onChange={(e) =>
            setProductData({
              ...productData,
              prices: {
                date: new Date().toISOString(),
                id: 1,
                price: e.target.value,
              },
            })
          }
        />
        <button className={styles.button} onClick={handleProductSave}>
          Save
        </button>
      </div>

      <div className={styles.productList}>
        {allProducts.map((product) => (
          <div key={product.id} className={styles.product}>
            <p className={styles.productname}>{product.name}</p>
            <div>
              {product.prices.map((price) => (
                <p key={price.id}>
                  <span>GHC&nbsp;</span>
                  {price.price} on {new Date(price.date).toDateString()}
                </p>
              ))}
            </div>
            <div className={styles.flexRow}>
              <button
                className={styles.actionBtn}
                onClick={() => setProductData({})}
              >
                Edit
              </button>
              <button className={styles.actionBtn}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = ({ products }) => ({
  allProducts: products.products,
  loading: products.loading,
});

const mapDispatchToProps = {
  getProducts: getProductsAsync,
  addProduct: addProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
