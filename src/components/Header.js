import React from 'react';
import { Link } from 'react-router-dom';

import GApi from './GApi';

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link to='/' className='item' >Streamer</Link>
            <div className='right menu'>
                <Link to='/stream/show' className='item'>
                    All Streams
                </Link>
                <GApi />
            </div>
        </div>
    );
};

export default Header;