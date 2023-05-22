import React from 'react';
import Header from '../../container/Header/Header';
import Footer from '../../container/Footer/Footer';
import './products.css';
import { useSelector } from 'react-redux';
import Product from '../Products/Product/Product';
import { CircularProgress, Grid } from '@material-ui/core';

const Products = ({ setCurrentId }) => {
  const products = useSelector((state) => state.products);

  // Group products by company
  const groupedProducts = {};

  products.forEach((product) => {
    const company = product.company;
    if (groupedProducts[company]) {
      groupedProducts[company].push(product);
    } else {
      groupedProducts[company] = [product];
    }
  });

  return (
    <div className="home-container">
      <Header />
      <div className="product-showcase">
        {!products.length ? (
          <CircularProgress />
        ) : (
          <div>
            {Object.keys(groupedProducts).map((company) => (
              <div key={company}>
                <h2>{company}</h2>
                <Grid container spacing={3} className="product-grid">
                  {groupedProducts[company].map((product, index) => (
                    <Grid key={product._id} item xs={12} sm={6} md={4} lg={3} xl={3}>
                      <Product product={product} setCurrentId={setCurrentId} className="product-card" />
                    </Grid>
                  ))}
                </Grid>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
