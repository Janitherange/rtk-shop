import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {collection, getDocs, query} from "firebase/firestore";
import {db} from "../../auth/firebase.js";

const initialState = {
    docs: [],
    products: [],
    loading: "idle",
    visible: false,
}

export const getProducts = createAsyncThunk('product/getAllProducts', async (data, thunkAPI) => {
    try {
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const products = [];

        querySnapshot.forEach((docs) => {
            const doc = docs.data();

            products.push({
                id: doc.id,
                imgUrl: doc.imgUrl,
                category: doc.category,
                price: doc.price,
                productName: doc.productName,
                shortDesc: doc.shortDesc,
                description: doc.description,
                avgRating: doc.avgRating,
                reviews: doc.reviews,
            });
        });
        return products;

    } catch (e) {
        console.log(e)
    }
})

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        filterByCategory: (state, action) => {
            const {categoryMap, priceMap, inputValue} = action.payload;
            const productsSlice = state.docs.slice();

            if (categoryMap.length > 0 && priceMap.length > 0 && inputValue.length > 0) {
                const filterProducts = productsSlice.filter(doc => doc.category === categoryMap);
                if (priceMap === "low") {
                    const sortedProducts = filterProducts.sort((a, b) => parseInt(a.price) - parseInt(b.price));
                    const data = sortedProducts.filter((item) => item.productName.toLowerCase().match(inputValue));
                    if (data.length === 0) {
                        state.visible = true;
                    }

                    state.products = data;
                } else {
                    const sortedProducts = filterProducts.sort((a, b) => parseInt(b.price) - parseInt(a.price));
                    const data = sortedProducts.filter((item) => item.productName.toLowerCase().match(inputValue));
                    if (data.length === 0) {
                        state.visible = true;
                    }

                    state.products = data;
                }
            } else if (categoryMap.length > 0 && priceMap.length > 0 && inputValue.length === 0) {
                const filterProducts = productsSlice.filter(doc => doc.category === categoryMap);
                if (priceMap === "low") {
                    state.products = filterProducts.sort((a, b) => parseInt(a.price) - parseInt(b.price));
                } else {
                    state.products = filterProducts.sort((a, b) => parseInt(b.price) - parseInt(a.price));
                }
            } else if (categoryMap.length > 0 && priceMap.length === 0 && inputValue.length === 0) {
                state.products = productsSlice.filter(doc => doc.category === categoryMap);
            } else if (categoryMap.length > 0 && priceMap.length === 0 && inputValue.length > 0) {
                const filterProducts = productsSlice.filter(doc => doc.category === categoryMap);
                const data = filterProducts.filter((item) => item.productName.toLowerCase().match(inputValue));
                if (data.length === 0) {
                    state.visible = true;
                }

                state.products = data;
            } else if (categoryMap.length === 0 && priceMap.length > 0 && inputValue.length > 0) {
                if (priceMap === "low") {
                    const sortedProducts = productsSlice.sort((a, b) => parseInt(a.price) - parseInt(b.price));
                    const data = sortedProducts.filter((item) => item.productName.toLowerCase().match(inputValue));
                    if (data.length === 0) {
                        state.visible = true;
                    }

                    state.products = data;
                } else {
                    const sortedProducts = productsSlice.sort((a, b) => parseInt(b.price) - parseInt(a.price));
                    const data = sortedProducts.filter((item) => item.productName.toLowerCase().match(inputValue));
                    if (data.length === 0) {
                        state.visible = true;
                    }

                    state.products = data;
                }
            } else if (categoryMap.length === 0 && priceMap.length > 0 && inputValue.length === 0) {
                if (priceMap === "low") {
                    state.products = productsSlice.sort((a, b) => parseInt(a.price) - parseInt(b.price));
                } else {
                    state.products = productsSlice.sort((a, b) => parseInt(b.price) - parseInt(a.price));
                }
            } else if (categoryMap.length === 0 && priceMap.length === 0 && inputValue.length > 0) {
                const data = productsSlice.filter((item) => item.productName.toLowerCase().match(inputValue));
                if (data.length === 0) {
                    state.visible = true;
                }

                state.products = data;
            } else {
                state.products = state.docs;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = "pending";
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.products = action.payload;
            state.docs = action.payload;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = 'failed';
        });
    }
})

export const productActions = productSlice.actions;

export default productSlice.reducer;
