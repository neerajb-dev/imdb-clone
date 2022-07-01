import { FaSearch } from 'react-icons/fa';
import {MdOutlineArrowDropDown} from 'react-icons/md';

export const SearchBox = () => {
    return (
        <div className="search-box input-group mx-2 ">
            <span className="input-group-text fw-bold">All <MdOutlineArrowDropDown size="24px"/> </span>
            <input type="text" class="form-control" placeholder="Search IMDb" />
            <button className='search-btn btn btn-light'>
                <FaSearch color='#000' size="16px" className='align-self-center search-icon z-index-0' />
            </button>
        </div>
    )
};