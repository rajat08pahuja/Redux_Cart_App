let initialState = {
    productsInCartsArr: [],
    count: 0,
    totalAmount: 0,
    coupons: [{ code: "SAVE100", disc: 100 }]
}

function productsInCartsReducer(state = initialState, action) {
    switch (action.type) {
        case "delete_item":
            let newprodObj = action.payload.obj;
            let newid = newprodObj.id;
            let cqty = newprodObj.quantity;

            let nArr = [...state.productsInCartsArr];
            nArr = nArr.filter((obj) => {
                return obj.id != newid;
            })
            return {
                productsInCartsArr: nArr,
                count: state.count - cqty,
                totalAmount: state.totalAmount - cqty * newprodObj.price,
                coupons: state.coupons
            }
        case "change_quantity":
            let nprodObj = action.payload.obj;
            let nid = nprodObj.id;
            let quantity = action.payload.quantity;
            let changeInCount = 0;
            let changeInAmount = 0;

            let nwArr = [...state.productsInCartsArr];
            let flag = false;
            for (let i = 0; i < nwArr.length; i++) {
                let obj = nwArr[i];
                if (obj.id == nid) {
                    if (quantity == undefined) {
                        obj.quantity++;
                        changeInCount++;
                    } else {
                        changeInCount -= Number(obj.quantity);
                        obj.quantity = quantity;
                        changeInCount += Number(obj.quantity);
                    }
                    changeInAmount += changeInCount * obj.price

                    if (obj.quantity == 0) {
                        nwArr.splice(i, 1);
                    }
                    flag = true;
                    break;
                }
            }

            if (!flag) {
                nprodObj.quantity = 1;
                nwArr.push(nprodObj);
                changeInCount++;
                changeInAmount += changeInCount * nprodObj.price
            }

            return {
                productsInCartsArr: nwArr,
                count: Number(state.count) + Number(changeInCount),
                totalAmount: state.totalAmount + changeInAmount,
                coupons: state.coupons
            }

        case "apply_coupon":
            let code = action.payload.code;
            let discount = 0;

            for (let i = 0; i < state.coupons.length; i++) {
                let cpn = state.coupons[i];
                let cpnc = cpn.code;
                let cpnd = cpn.disc;

                if (cpnc == code) {
                    discount += cpnd;
                    break;
                }
            }

            return {
                ...state,
                totalAmount: state.totalAmount - discount
            }

        case "remove_coupon":
            let rcode = action.payload.code;
            let rdiscount = 0;

            for (let i = 0; i < state.coupons.length; i++) {
                let cpn = state.coupons[i];
                let cpnc = cpn.code;
                let cpnd = cpn.disc;

                if (cpnc == rcode) {
                    rdiscount -= cpnd;
                    break;
                }
            }

            return {
                ...state,
                totalAmount: state.totalAmount - rdiscount
            }
        default:
            return state;
    }
}

export default productsInCartsReducer;