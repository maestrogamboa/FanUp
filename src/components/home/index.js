import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/authContext';

const Home = () => {
    const { currentUser } = useAuth();
    
    if (!currentUser) {
        // If currentUser is null, return a fallback UI or redirect
        return <div>You must be logged in to view this page.</div>;
    }

    return (
        <div className='text-2xl font-bold pt-14'>
            Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.
        </div>
    );
};

export default Home;
