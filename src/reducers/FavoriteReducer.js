const FavoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const addingProduct = action.payload;
      // test
      console.log(addingProduct);
      const isExisting = state.listProducts.find(
        (product) => product.id === addingProduct.id
      );
      if (isExisting !== undefined) {
        alert("You've already added this to favorites.");
        return {
          listProducts: state.listProducts,
          totalQuantity: state.totalQuantity,
        };
      } else {
        const updatedListProduct = [...state.listProducts, action.payload];
        const updatedTotalQuantity = state.totalQuantity + 1;
        addingProduct.isFavorite = true;
        console.log(addingProduct.isFavorite);
        return {
          listProducts: updatedListProduct,
          totalQuantity: updatedTotalQuantity,
        };
      }
    }
    case "REMOVE": {
      const removingProductId = action.payload;
      const changedListProducts = state.listProducts.filter(
        (product) => product.id !== removingProductId
      );

      const changedTotalQuantity =
        state.totalQuantity === 0
          ? state.totalQuantity
          : state.totalQuantity - 1;
      console.log(changedListProducts);

      return {
        listProducts: changedListProducts,
        totalQuantity: changedTotalQuantity,
      };
    }
  }
};

export default FavoriteReducer;
