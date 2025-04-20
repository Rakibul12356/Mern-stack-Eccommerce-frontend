import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.05,
  grandTotal: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
      } else {
        alert("Items already added");
      }
      state.selectedItems = setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
      state.tax = setTax(state);
      state.grandTotal = setGrandTotal(state);
    },
  },
});
export const setSelectedItems = (state) =>
  state.products.reduce((total, product) => {
    return Number(total + product.quantity);
  },0);
export const setTotalPrice = (state) =>
  state.products.reduce((total, product) => {
    return Number(total + product.quantity * product.price);
  },0);
export const setTax = (state) => setTotalPrice(state) * state.taxRate;
export const setGrandTotal = (state) => {
  return setTotalPrice(state) + setTotalPrice(state) * state.taxRate;
};
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
/**
 * 🔹 ১️⃣ Initial State (initialState) ব্যাখ্যা

const initialState = {
  products: [],      // কার্টে যোগ করা পণ্যের তালিকা সংরক্ষণ করবে
  selectedItems: 0,  // মোট যোগ করা পণ্যের সংখ্যা
  totalPrice: 0,     // কার্টের মোট দাম
  tax: 0,            // ট্যাক্সের পরিমাণ
  taxRate: 0.05,     // ট্যাক্স রেট (৫%)
  grandTotal: 0,     // মোট মূল্য (ট্যাক্সসহ)
};
✅ কাজ কী?
এই initialState অবজেক্টটি কার্টের স্টেট কীভাবে কাজ করবে তা সংজ্ঞায়িত করে।

🔹 ২️⃣ Redux Slice তৈরি (cartSlice)
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
✅ কাজ কী?

createSlice() ফাংশনটি একটি Redux slice তৈরি করে যার নাম "cart" এবং এটি initialState সেট করে।

এর ভেতরে reducers সংজ্ঞায়িত করা হয় যেখানে কার্ট পরিচালনার জন্য বিভিন্ন ফাংশন থাকবে।
 ৩️⃣ Reducer Function: addToCart() ব্যাখ্যা
 addToCart: (state, action) => {
  const isExist = state.products.find(
    (product) => product._id === action.payload._id
  );
✅ কাজ কী?

যখন একটি নতুন পণ্য কার্টে যোগ করা হয়, তখন এটি আগে থেকেই বিদ্যমান আছে কিনা তা চেক করে।

find() মেথড ব্যবহার করে কার্টের products অ্যারের ভেতরে _id মেলে কিনা তা পরীক্ষা করা হয়।
📌 যদি পণ্য কার্টে না থাকে, তাহলে যোগ করবে:
if (!isExist) {
  state.products.push({ ...action.payload, quantity: 1 });
}
  ✅ কাজ কী?

যদি পণ্যটি কার্টে না থাকে, তাহলে এটি products অ্যারেতে যোগ করা হবে এবং quantity: 1 সেট করা হবে।
📌 যদি পণ্য ইতিমধ্যেই কার্টে থাকে, তাহলে এলার্ট দেখাবে:
else {
  alert("Items already added");
}
  ✅ কাজ কী?

যদি পণ্যটি আগেই কার্টে যোগ করা থাকে, তাহলে নতুন করে যোগ না করে "Items already added" নামে একটি এলার্ট মেসেজ দেখানো হবে।
🔹 ৪️⃣ selectedItems আপডেট করা
js

 */
