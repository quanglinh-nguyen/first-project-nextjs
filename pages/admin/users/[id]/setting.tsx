import React from 'react';
import { useRouter } from 'next/router';

// Demo client Side Rendering
function AdminUserSetting() {
    const router = useRouter();
    console.log(router.query);
    const handleOnClick = () => {
        router.push('/login');
    };
    return (
        <>
            <div>
                Admin ={'>'} User ={'>'} id ={'>'} setting Page
            </div>
            <button onClick={handleOnClick}>back to login</button>
        </>
    );
}

export default AdminUserSetting;

// Data Fetching -> Server Side Rendering
