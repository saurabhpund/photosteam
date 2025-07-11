import React, { use } from 'react'
import useVerifyAuth from '../hooks/useVerifyAuth';


const ProtectedRoutes = (children) => {
    const {isVerified, loading} = useVerifyAuth();
    const navigate = useNavigate();
    React.useEffect(() => {
        if (loading) return;
        if (!isVerified) {
            navigate("/login");
        }
    }, [isVerified, loading, navigate]);
    return (
        <>
        {children}
        </>
    )
}

export default ProtectedRoutes;