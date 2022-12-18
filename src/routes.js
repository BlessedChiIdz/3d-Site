import First from "./pages/First";
import Main from "./pages/Main";


export const publicRoutes = [
    {
        path: '/1',
        element: <First/>
    },
    // {
    //     path: '/2',
    //     element: <Main/>
    // },
    // {
    //     path: '/3',
    //     element: <Auth/>
    // },
    // {
    //     path: '/4',
    //     element: <Auth/>
    // },
    // {
    //     path: '/5',
    //     element: <DevicePage/>
    // },
    {
        path: '/',
        element: <Main/>
    },
]