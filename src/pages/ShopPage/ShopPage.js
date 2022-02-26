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
import { actFetchCakes, actFetchCategoryCakes } from 'actions/cakeAction'
import LoadingCard from 'components/LoadingCard/LoadingCard'
import { fake12Products } from 'utils/fakeProduct'

function ShopPage(props) {

    const {
        categories, cakes, loading,
        getAllCategories, getCategoryCakes, getCakes
    } = props

    const listSorting = [
        {_id: 1, name: 'A to Z'},
        {_id: 2, name: 'Z to A'},
        {_id: 3, name: 'Increase'},
        {_id: 4, name: 'Decrease'},
        {_id: 5, name: 'Default sorting'}
    ]

    const [showCategories, setShowCategories] = useState(false)
    const [showSortingMethod, setShowSortingMethod] = useState(false)
    const [currentCategory, setCurrentCategory] = useState({_id: '', name: 'Categories'})
    const [currentSorting, setCurrentSorting] = useState('Default sorting')
    const categoryRef = useRef(null)
    const sortingRef = useRef(null)

    useEffect(() => {
        getAllCategories()
        getCakes(null, null, 1)
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

    const handleFilterCategory = (categoryID, categoryName) => {
        if (categoryID)
            getCategoryCakes(categoryID, null, null, 1)
        else
            getCakes(null, null, 1)
        setCurrentCategory({ _id: categoryID, name: categoryName })
        setCurrentSorting('Default sorting')
    }

    const handleSorting = (sortingMethod, name) => {
        switch (sortingMethod) {
            case 1:
                if (currentCategory._id)
                    getCategoryCakes(currentCategory._id, 'name', 1, 1)
                else
                    getCakes('name', 1, 1)
                break
            case 2:
                if (currentCategory._id)
                    getCategoryCakes(currentCategory._id, 'name', -1, 1)
                else
                    getCakes('name', -1, 1)
                break
            case 3:
                if (currentCategory._id)
                    getCategoryCakes(currentCategory._id, 'price', 1, 1)
                else
                    getCakes('price', 1, 1)
                break
            case 4:
                if (currentCategory._id)
                    getCategoryCakes(currentCategory._id, 'price', -1, 1)
                else
                    getCakes('price', -1, 1)
                break
            default:
                if (currentCategory._id)
                    getCategoryCakes(currentCategory._id, null, null, 1)
                else
                    getCakes(null, null, 1)
                break
        }
        setCurrentSorting(name)
    }

    return (
        <>
        <TitlePage pageName={'Shop'}/>
        <div className='filter-and-sort-container'>
            <div className='filter-container'>
                <form>
                    <div className='current-category' ref={categoryRef}>
                        <span onClick={() => setShowCategories(!showCategories)}>{currentCategory.name}</span>
                        { !showCategories ? <IoMdArrowDropdown/> : <RiArrowUpSFill/>}
                        { showCategories && <ul className='dropdown-list'>
                        <li onClick={() => handleFilterCategory('', 'Categories')}>Categories</li>
                            {categories.map(category =>(
                                <li key={category._id} onClick={() => handleFilterCategory(category._id, category.categoryName)}>{category.categoryName}</li>
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
                            { listSorting.map (item => (<li key={item._id} onClick={() => handleSorting(item._id, item.name)}>
                                {item.name}
                            </li>))}
                        </ul>}
                    { !showSortingMethod ? <IoMdArrowDropdown/> : <RiArrowUpSFill/>}
                </div>
            </div>
        </div>
        <div className='products-container'>
            { loading ? (fake12Products.map(item => <LoadingCard key={item}/>)) :
            (cakes.map(cake => <CakeCard key={cake._id} cakeItem={cake}/>))}
        </div>
        <Pagination/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.categoryReducer,
        cakes: state.cakeReducer.cakes,
        loading: state.globalState.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCategories : () => {
            dispatch(actFetchAllCategories())
        },
        getCategoryCakes : (categoryID, sortBy, value, page) => {
            dispatch(actFetchCategoryCakes(categoryID, sortBy, value, page))
        },
        getCakes : (sortBy, value, page) => {
            dispatch(actFetchCakes(sortBy, value, page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
