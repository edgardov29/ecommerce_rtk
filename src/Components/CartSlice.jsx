import { createSlice } from '@reduxjs/toolkit';

// Estado inicial del carrito
const initialState = {
  cartItems: [],
};

// Creamos el Slice del carrito
const CartSlice = createSlice({
  name: 'cart',

  // Estado inicial
  initialState,

  // Reducers (acciones + lógica)
  reducers: {

    // Agregar producto al carrito
    addItemToCart(state, action) {

      // Buscar si el producto ya existe
      const existingItem =
        state.cartItems.find(
          item => item.id === action.payload.id
        );

      if (existingItem) {

        // Si existe aumentamos la cantidad
        existingItem.quantity += 1;

      } else {

        // Si no existe lo agregamos con cantidad 1
        state.cartItems.push({
          ...action.payload,
          quantity: 1
        });

      }
    },

    // Eliminar producto completamente del carrito
    removeItemFromCart(state, action) {

      state.cartItems =
        state.cartItems.filter(
          item => item.id !== action.payload
        );

    },

    // Vaciar carrito completo
    clearCart(state) {
        state.cartItems = [];
    },

    // Aumentar cantidad de un producto
    increaseItemQuantity(state, action) {
      const itemToIncrease =
        state.cartItems.find(
          item => item.id === action.payload
        );

      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
      }

    },

    // Disminuir cantidad de un producto
    decreaseItemQuantity(state, action) {

      const itemToDecrease =
        state.cartItems.find(
          item => item.id === action.payload
        );

      if (
        itemToDecrease &&
        itemToDecrease.quantity > 1
      ) {

        itemToDecrease.quantity -= 1;

      }
    }

  }
});


// Exportamos automáticamente los Action Creators
export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = CartSlice.actions;


// Exportamos el reducer para usarlo en la Store
export default CartSlice.reducer;
