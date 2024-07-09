import { Navigate } from 'react-router-dom';

function ProtectedComponentWrapper({ children }) {
    const isAuthenticated = true; // replace with your authentication logic
    // we might fetching token from local storage or cookies
    // childre in this case is Cart component

    console.log(children);
    // what is children here?

    return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedComponentWrapper;


