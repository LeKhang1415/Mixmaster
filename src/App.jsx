import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    HomeLayout,
    About,
    Cocktail,
    Landing,
    Newsletter,
    Error,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing.jsx";

const router = createBrowserRouter([
    {
        path: `/`,
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                loader: landingLoader,
                element: <Landing />,
            },
            {
                path: `cocktail`,
                element: <Cocktail />,
            },
            {
                path: `newsletter`,
                element: <Newsletter />,
            },
            {
                path: `about`,
                element: <About />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};
export default App;
