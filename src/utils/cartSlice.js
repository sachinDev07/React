import { createSlice} from '@reduxjs/toolkit';

let shopItems = [];

try {
    const cartData = localStorage.getItem('shoppingCart');
  
    if (cartData !== null) {
      shopItems = JSON.parse(cartData);
    }
  } catch (error) {
    console.error('Error parsing JSON data:', error);
  }


const cartSlice = createSlice( {
    name : 'cart',
    initialState : {
        items : shopItems,
    },
    reducers : {
        addItem: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex === -1) {
                state.items.push({ ...action.payload, quantity: 1 });
            } else {
                state.items[itemIndex].quantity++;

            }

            localStorage.setItem("shoppingCart", JSON.stringify(state.items.map((item) => item)));
            
        },
        removeItem: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1) {
                const item = state.items[itemIndex];
                if (item.quantity === 1) {
                    state.items.splice(itemIndex, 1);
                } else {
                    item.quantity--;
                }

            }
        },
        clearCart: (state, action) => {
            state.items = []
        },  
    },
});
 

export const { addItem, removeItem, clearCart,} = cartSlice.actions;

export default cartSlice.reducer;