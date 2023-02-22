import { createSlice} from '@reduxjs/toolkit';


const cartSlice = createSlice( {
    name : 'cart',
    initialState : {
        items : [],
    },
    reducers : {
        addItem : (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem : (state, action) => {
            const removeItem = state.items.filter((item) => item.id !== action.payload);
            state.items = removeItem;
        },
        clearCart : (state) => {
            state.items = [];
        },  
    },
});
 

export const { addItem, removeItem, clearCart,} = cartSlice.actions;

export default cartSlice.reducer;