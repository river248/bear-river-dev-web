/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { BiSearch } from 'react-icons/bi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { RiArrowUpSFill } from 'react-icons/ri'

import './Search.scss'
import { actSearch } from 'actions/cakeAction'

function Search(props) {

    const {
        categories, currentCategory,
        onFilterCategory, searchCake
    } = props

    const [showCategories, setShowCategories] = useState(false)
    const [key, setKey] = useState('')

    const categoryRef = useRef(null)

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (showCategories && categoryRef.current && !categoryRef.current.contains(e.target)) {
                setShowCategories(false)
            }
        }
      
        document.addEventListener('mousedown', checkIfClickedOutside)
      
        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', checkIfClickedOutside)
        }
    }, [showCategories])


    useEffect(() => {
        const timmer = setTimeout(() => {
            searchCake(key, 1)
        }, 300)

        return () => clearTimeout(timmer)
        
    }, [key])

  return (
    <div className='filter-container'>
        <form>
            <div className='current-category' ref={categoryRef}>
                <span onClick={() => setShowCategories(!showCategories)}>{currentCategory.name}</span>
                { !showCategories ? <IoMdArrowDropdown/> : <RiArrowUpSFill/>}
                { showCategories && <ul className='dropdown-list'>
                <li onClick={() => onFilterCategory('', 'Categories')}>Categories</li>
                    {categories.map(category =>(
                        <li key={category._id} onClick={() => onFilterCategory(category._id, category.categoryName)}>{category.categoryName}</li>
                    ))}
                </ul>}
            </div>
            <div className='search-bar'>
                <input placeholder='Search' value={key} onChange={(e) => setKey(e.target.value)}/>
                <BiSearch/>
            </div>
        </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchCake : (key, page) => {
            dispatch(actSearch(key, page))
        }
    }
}

export default connect(null, mapDispatchToProps) (React.memo(Search))