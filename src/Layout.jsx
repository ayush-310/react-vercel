import React from 'react';
import Topbar from './Components/Topbar';

function Layout({ children, onSearch }) {
    return (
        <div className='flex flex-col items-center'>
            <Topbar onSearch={onSearch} />
            {children}
        </div>
    );
}

export default Layout;