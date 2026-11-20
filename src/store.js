// Importamos configureStore desde Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Importamos el reducer del carrito
import cartReducer from './Components/CartSlice';

// Creamos la Store Redux
const store = configureStore({

  // Aquí registramos todos los reducers
  reducer: {

    // El estado del carrito estará disponible en:
    // state.cart
    cart: cartReducer

  }

});

// Exportamos la Store
export default store;