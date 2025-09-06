import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import SIgnIn from "../pages/SIgnIn";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: '/', element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> },
            { path: "/signin", element: <SIgnIn /> },
            { path: "/register", element: <Register /> }
        ]
    },

])

export default router