import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ShoppingCartWithReducer} from "./ShoppingCartWithReducer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShoppingCartWithReducer />
  </StrictMode>,
);
