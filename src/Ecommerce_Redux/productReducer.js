let initialState = {
    products: []
}

function productReducer(state = initialState, action) {
    switch (action.type) {
        case "add_product":
            let newProdObj = action.payload;
            let newProductsArr = [...state.products];
            newProductsArr.push(newProdObj);

            return {
                products: newProductsArr
            }
        // case "delete_product":
        //     let prodId = action.payload;
        //     let newProducts = state.products.filter((obj) => {
        //         return obj.id != prodId;
        //     })

        //     return{
        //         products: newProducts
        //     }
        default:
            return state;
    }
}

export default productReducer