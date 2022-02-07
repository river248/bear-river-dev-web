import React from 'react'
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri'

import './Pagination.scss'

function Pagination() {
    return (
        <div className='pagination-container'>
            <ul>
                <li className='prev-page'><RiArrowDropLeftLine/></li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li className='next-page'><RiArrowDropRightLine/></li>
            </ul>
        </div>
    )
}

export default Pagination
