import React, {useState} from 'react';
import './taskSearch.css';
import {useDispatch} from 'react-redux';
import { searchSetValue } from './searchSlice';

export default function TaskSearch() {

    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    const onHandleSearch = (value) => {
        dispatch(searchSetValue(value));
    }

    return (
        <input 
            type="text" 
            className='search' 
            placeholder='Search'
            value={searchValue}
            onChange={e => {
                setSearchValue(e.target.value);
                onHandleSearch(e.target.value);
            }}
            />
    )
}
