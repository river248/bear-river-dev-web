import React, { useEffect, useRef, useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { RiArrowUpSFill } from 'react-icons/ri'

import './Sort.scss'

function Sort({ currentSorting, onSorting }) {

    const [showSortingMethod, setShowSortingMethod] = useState(false)
    const sortingRef = useRef(null)

    const listSorting = [
        {_id: 1, name: 'A to Z'},
        {_id: 2, name: 'Z to A'},
        {_id: 3, name: 'Increase'},
        {_id: 4, name: 'Decrease'},
        {_id: 5, name: 'Default sorting'}
    ]

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (showSortingMethod && sortingRef.current && !sortingRef.current.contains(e.target)) {
                setShowSortingMethod(false)
            }
        }
      
        document.addEventListener('mousedown', checkIfClickedOutside)
      
        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', checkIfClickedOutside)
        }
    }, [showSortingMethod])

  return (
    <div className='sorting-container'>
        <div className='current-option-sorting' ref={sortingRef}>
            <span onClick={() => setShowSortingMethod(!showSortingMethod)}>{currentSorting}</span>
            { showSortingMethod && <ul className='dropdown-list'>
                    { listSorting.map (item => (<li key={item._id} onClick={() => onSorting(item._id, item.name)}>
                        {item.name}
                    </li>))}
                </ul>}
            { !showSortingMethod ? <IoMdArrowDropdown/> : <RiArrowUpSFill/>}
        </div>
    </div>
  )
}

export default React.memo(Sort)