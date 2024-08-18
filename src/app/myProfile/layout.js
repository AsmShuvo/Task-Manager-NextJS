import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <p className='bg-gray-400 text-center'>header</p>
            {children}
            <p className='bg-gray-800 text-white text-center'>footer</p>
        </div>
    );
};

export default layout;