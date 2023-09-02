import React from 'react';
import './taskFilters.css';

export default function () {
    return (
        <div className='filters-container'>
            <button className='filter-btn active-filter'>All</button>
            <button className='filter-btn'>Important</button>
        </div>
    )
}
