import { createBrowserRouter, } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import CategoryPage from "../pages/category/CategoryPage";
import SearchPage from "../pages/search/SearchPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/categories/:categoryName",
                element: <CategoryPage></CategoryPage>
            },
            {
                path: "/search",
                element: <SearchPage></SearchPage>
            }

        ]
    },
]);
export default router;