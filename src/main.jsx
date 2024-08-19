import { createElement } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import MyCart from "./pages/MyCart";
import ProductDetail from "./pages/ProductDetail";
import router from "./route/Router";

const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];

const root = document.querySelector("#root");


createRoot(root).render(
  <RouterProvider router={router}/>
);


// //view react note (type,props,...children )
// const app = createElement(
//   "div",
//   {id:"category-section", className:"p-5"},
//   createElement("p",{className:"text-2xl text-gray-500 mb-3 mt-50 "},"Product Categories"),
//   createElement(
//     "div",
//     null,
//     ...categories.map((category)=> createElement("button",{className: "border border-black px-4 py-2 me-2"},category)), 
//   )
  
// );
// console.log(app);


// const title = document.createElement("p");
// title.innerText = "Product Categories";
// title.classList.add("text-2xl", "text-yellow-500","mb-3");

// const categoryButton = (categoryName) => {
//     const btn = document.createElement("button");
//     btn.innerText = categoryName;
//     btn.classList.add("border","border-black", "px-4", "py-2", "me-2")

//     return btn;
// };
// root.append(title);
// categories.forEach((category) => root.append(categoryButton(category)));
