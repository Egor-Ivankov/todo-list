import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {filtersSet} from './filtersSlice';
import classNames from 'classnames';
import './taskFilters.css';

export default function () {
    const isImportant = useSelector(state => state.filters.isImportant);
    const allBtnClassname = classNames('filter-btn', {'active-filter': !isImportant});
    const importantBtnClassname = classNames('filter-btn', {'active-filter': isImportant});

    const dispatch = useDispatch();
    return (
        <div className='filters-container'>
            <button 
                className={allBtnClassname}
                onClick={() => dispatch(filtersSet(false))}
                    >All
            </button>
            <button 
                className={importantBtnClassname} 
                onClick={() => dispatch(filtersSet(true))}
                >Important
            </button>
        </div>
    )
}
