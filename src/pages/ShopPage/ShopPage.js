/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { BiSearch } from 'react-icons/bi'
import { RiArrowUpSFill } from 'react-icons/ri'
import { connect } from 'react-redux'

import './ShopPage.scss'
import TitlePage from 'components/TitlePage/TitlePage'
import CakeCard from 'components/CakeCard/CakeCard'
import Pagination from 'components/Pagination/Pagination'
import { actFetchAllCategories } from 'actions/categoryAction'
import { actFetchCategoryCakes } from 'actions/cakeAction'

function ShopPage(props) {

    const {
        categories, cakes,
        getAllCategories, getCategoryCakes
    } = props
    const [showCategories, setShowCategories] = useState(false)
    const [showSortingMethod, setShowSortingMethod] = useState(false)
    const [currentCategory, setCurrentCategory] = useState('Categories')
    const [currentSorting, setCurrentSorting] = useState('Default sorting')
    const categoryRef = useRef(null)
    const sortingRef = useRef(null)

    useEffect(() => {
        getAllCategories()
        getCategoryCakes('62091c52dfc11b3ba1bfd9f9', 1)
    }, [])

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
        <>
        <TitlePage pageName={'Shop'}/>
        <div className='filter-and-sort-container'>
            <div className='filter-container'>
                <form>
                    <div className='current-category' ref={categoryRef}>
                        <span onClick={() => setShowCategories(!showCategories)}>{currentCategory}</span>
                        { !showCategories ? <IoMdArrowDropdown/> : <RiArrowUpSFill/>}
                        { showCategories && <ul className='dropdown-list'>
                        <li onClick={() => setCurrentCategory('Categories')}>Categories</li>
                            {categories.map(category =>(
                                <li key={category._id} onClick={() => setCurrentCategory(category.categoryName)}>{category.categoryName}</li>
                            ))}
                        </ul>}
                    </div>
                    <input placeholder='Search'/>
                    <BiSearch/>
                </form>
            </div>
            <div className='sorting-container'>
                <div className='current-option-sorting' ref={sortingRef}>
                    <span onClick={() => setShowSortingMethod(!showSortingMethod)}>{currentSorting}</span>
                    { showSortingMethod && <ul className='dropdown-list'>
                            <li onClick={() => setCurrentSorting('Default sorting')}>Default sorting</li>
                            <li onClick={() => setCurrentSorting('A to Z')}>A to Z</li>
                            <li onClick={() => setCurrentSorting('Z to A')}>Z to A</li>
                            <li onClick={() => setCurrentSorting('Increase')}>Increase</li>
                            <li onClick={() => setCurrentSorting('Decrease')}>Decrease</li>
                        </ul>}
                    { !showSortingMethod ? <IoMdArrowDropdown/> : <RiArrowUpSFill/>}
                </div>
            </div>
        </div>
        <div className='products-container'>
            {cakes.map(cake => <CakeCard key={cake._id} cakeItem={cake}/>)}
        </div>
        <Pagination/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.categoryReducer,
        cakes: state.cakeReducer.cakes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCategories : () => {
            dispatch(actFetchAllCategories())
        },
        getCategoryCakes : (categoryID, page) => {
            dispatch(actFetchCategoryCakes(categoryID, page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
