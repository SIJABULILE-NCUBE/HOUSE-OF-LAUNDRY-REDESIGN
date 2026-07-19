import { createContext, useContext, useState } from "react";

// context for the order basket so any component can add/remove items
const CartContext = createContext();

// all the real services + prices from their actual price list
const SERVICE_CATALOG = [
  { id: "laundry-wash", category: "Laundry", name: "Wash Only (per kg)", price: 13 },
  { id: "laundry-washdry", category: "Laundry", name: "Wash & Dry (per kg)", price: 17 },
  { id: "laundry-dry", category: "Laundry", name: "Dry Only (per kg)", price: 14 },
  { id: "laundry-full", category: "Laundry", name: "Full House: Wash, Dry & Iron (per kg)", price: 25 },
  { id: "dry-trouser", category: "Dry Cleaning", name: "Trouser", price: 55 },
  { id: "dry-jacket", category: "Dry Cleaning", name: "Jacket", price: 65 },
  { id: "dry-skirt", category: "Dry Cleaning", name: "Skirt", price: 60 },
  { id: "dry-suit", category: "Dry Cleaning", name: "Suit", price: 120 },
  { id: "dry-halfcoat", category: "Dry Cleaning", name: "Half Coat", price: 105 },
  { id: "dry-overcoat", category: "Dry Cleaning", name: "Over Coat", price: 115 },
  { id: "dry-jersey", category: "Dry Cleaning", name: "Jersey", price: 60 },
  { id: "dry-dress", category: "Dry Cleaning", name: "Dress", price: 90 },
  { id: "dry-tie", category: "Dry Cleaning", name: "Tie", price: 48 },
  { id: "dry-tshirt", category: "Dry Cleaning", name: "T-shirt", price: 53 },
  { id: "dry-cap", category: "Dry Cleaning", name: "Cap", price: 48 },
  { id: "takkie-small", category: "Takkie Wash", name: "Size 2–4", price: 20 },
  { id: "takkie-big", category: "Takkie Wash", name: "Size 5–11", price: 40 },
  { id: "dye-denim", category: "Dyeing", name: "Denim / Jeans", price: 130 },
  { id: "dye-skirt", category: "Dyeing", name: "Skirts", price: 90 },
  { id: "dye-golf", category: "Dyeing", name: "Golf T-shirts", price: 100 },
  { id: "dye-dress", category: "Dyeing", name: "Dresses", price: 110 },
  { id: "dye-lumber", category: "Dyeing", name: "Lumber Jackets", price: 150 },
  { id: "dye-chino", category: "Dyeing", name: "Chino / Trousers", price: 100 },
  { id: "iron-kg", category: "Ironing", name: "Iron only (per kg)", price: 22 },
  { id: "alt-length", category: "Alterations", name: "Length", price: 35 },
  { id: "alt-waist", category: "Alterations", name: "Waist", price: 40 },
  { id: "alt-bottom", category: "Alterations", name: "Bottom", price: 35 },
  { id: "alt-zips", category: "Alterations", name: "Zips", price: 30 },
  { id: "alt-patching", category: "Alterations", name: "Patching (from)", price: 20 },
  { id: "alt-shirt-length", category: "Alterations", name: "Shirt Length", price: 35 },
  { id: "alt-dress-length", category: "Alterations", name: "Dress Length", price: 40 },
];

export function CartProvider({ children }) {
  // each item in cart has { ...service, qty }
  const [cart, setCart] = useState([]);

  function addItem(serviceId) {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === serviceId);
      if (exists) {
        // bump qty if already in cart
        return prev.map((item) =>
          item.id === serviceId ? { ...item, qty: item.qty + 1 } : item
        );
      }
      const service = SERVICE_CATALOG.find((s) => s.id === serviceId);
      if (!service) return prev;
      return [...prev, { ...service, qty: 1 }];
    });
  }

  function removeItem(serviceId) {
    setCart((prev) => prev.filter((item) => item.id !== serviceId));
  }

  function updateQty(serviceId, newQty) {
    if (newQty < 1) {
      removeItem(serviceId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === serviceId ? { ...item, qty: newQty } : item
      )
    );
  }

  function clearCart() {
    setCart([]);
  }

  // total for the whole basket
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateQty, clearCart, total, SERVICE_CATALOG }}
    >
      {children}
    </CartContext.Provider>
  );
}

// quick hook so i dont have to import useContext everywhere
export function useCart() {
  return useContext(CartContext);
}
