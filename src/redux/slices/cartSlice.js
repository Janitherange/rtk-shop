import {createSlice} from "@reduxjs/toolkit";

const cart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
    visible: false,
    cartItems: cart ? cart.cartItems : [],
    totalAmount: cart ? cart.totalAmount : 0,
    totalQuantity: cart ? cart.totalQuantity : 0,
    tax: cart ? cart.tax : 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleCart: (state, action) => {
            if (action.payload) {
                state.visible = action.payload.visible;
            } else {
                state.visible = !state.visible;
            }
        },
        addItems: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                item => item.id === newItem.id
            );

            state.totalQuantity++;

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    category: newItem.category,
                    image: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
                state.totalAmount = newItem.price;
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
            }

            const totalPriceArr = state.cartItems.map(item=> item.totalPrice);
            state.totalAmount = totalPriceArr.reduce((a,b)=> a + b , 0);

            state.tax = state.totalAmount * 5/100;

            localStorage.setItem('cart', JSON.stringify(state))
        },
        removeItems: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                item => item.id === newItem.id
            );

            state.totalQuantity > 0 ? state.totalQuantity-- : state.totalAmount = 0;
            existingItem.quantity > 0 ? existingItem.quantity-- : existingItem.quantity = 0;
            existingItem.totalPrice = Number(existingItem.totalPrice) - Number(newItem.price);

            const totalPriceArr = state.cartItems.map(item=> item.totalPrice);
            state.totalAmount > 0 ? state.totalAmount = totalPriceArr.reduce((a,b)=> a + b , 0) : state.totalAmount = 0;

            if (existingItem.quantity === 0){
                state.cartItems = state.cartItems.filter(item=> item.id !== newItem.id);
            }
            state.tax = state.totalAmount * 5/100;
            localStorage.setItem('cart', JSON.stringify(state))
        },
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
