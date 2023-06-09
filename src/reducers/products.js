const productsReducer = (products = [], action) => {
    switch (action.type) {
      case "FETCH_ALL":
        return action.payload;
  
      case "CREATE":
        return [...products, action.payload];
  
      default:
        return products;
    }
  };
  
  export default productsReducer;
  