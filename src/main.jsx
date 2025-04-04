import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {RouterProvider,} from "react-router-dom";
import './index.css'
import 'remixicon/fonts/remixicon.css'
import { Provider } from 'react-redux'
import router from "./routers/Router.jsx";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);