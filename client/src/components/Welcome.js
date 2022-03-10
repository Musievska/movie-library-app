import React from 'react';
import { useSelector } from 'react-redux';

const Welcome = () => {

    const { loggedinUser } = useSelector((state) => state.login);
    return (
        <div className="display-3 text-center mt-5">
        Welcome {loggedinUser.firstName}
        </div>
    )
}

export default Welcome;