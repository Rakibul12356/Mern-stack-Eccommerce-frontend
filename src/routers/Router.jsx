import { createBrowserRouter,} from "react-router-dom";
import App from "../App";
const router = createBrowserRouter([
    {
        path: "/",
        element:<App></App>,
        children:[
            {
                path:"/",
                element:<div>Home</div>
            },
            
        ]
    },
]);
export default router;