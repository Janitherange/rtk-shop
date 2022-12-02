import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {collection, getDocs, query} from "firebase/firestore";
import {db} from "../../auth/firebase.js";

const initialState = {
    docs: [],
    products: [],
    loading: "idle",
    visible: false,
}

export const getProductsByCategory = createAsyncThunk('product/getAllProductsByCategory', async ({category}, thunkAPI) => {
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
        return products.filter(product => product.category === category);
    } catch (e) {
        console.log(e)
    }
})

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        filterByCategory: (state, action) => {
            const { priceMap, inputValue} = action.payload;
            const productsSlice = state.docs.slice();

            if ( priceMap.length > 0 && inputValue.length > 0) {
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
            } else if (priceMap.length > 0 && inputValue.length === 0) {
                if (priceMap === "low") {
                    state.products = productsSlice.sort((a, b) => parseInt(a.price) - parseInt(b.price));
                } else {
                    state.products = productsSlice.sort((a, b) => parseInt(b.price) - parseInt(a.price));
                }
            } else {
                state.products = productsSlice;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProductsByCategory.pending, (state, action) => {
            state.loading = "pending";
        });
        builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.products = action.payload;
            state.docs = action.payload;
        });
        builder.addCase(getProductsByCategory.rejected, (state, action) => {
            state.loading = 'failed';
        });
    }
})

export const categoryActions = categorySlice.actions;

export default categorySlice.reducer;
