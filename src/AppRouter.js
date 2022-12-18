import {Navigate,Routes, Route ,Redirect} from 'react-router-dom'
import {publicRoutes} from "./routes";


const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({path,element}) =>
                <Route key={path} path={path} element={element} exact/>
            )}
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    );
};

export default AppRouter;