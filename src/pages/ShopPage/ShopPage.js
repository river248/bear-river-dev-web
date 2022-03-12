/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from 'react'
import { connect } from 'react-redux'

import './ShopPage.scss'
import TitlePage from 'components/TitlePage/TitlePage'
import CakeCard from 'components/CakeCard/CakeCard'
import Pagination from 'components/Pagination/Pagination'
import { actFetchAllCategories } from 'actions/categoryAction'
import { actFetchCakes, actFetchCategoryCakes } from 'actions/cakeAction'
import LoadingCard from 'components/LoadingCard/LoadingCard'
import { fake12Products } from 'utils/fakeProduct'
import Search from 'components/Search/Search'
import Sort from 'components/Sort/Sort'

function ShopPage(props) {

    const {
        categories, cakes, loading,
        getAllCategories, getCategoryCakes, getCakes
    } = props

    const [currentCategory, setCurrentCategory] = useState({_id: '', name: 'Categories'})
    const [currentSorting, setCurrentSorting] = useState('Default sorting')

    useEffect(() => {
        getAllCategories()
        getCakes(null, null, 1)
    }, [])

    const handleFilterCategory = useCallback((categoryID, categoryName) => {

        if (categoryID !== currentCategory._id) {
            if (categoryID)
                getCategoryCakes(categoryID, null, null, 1)
            else
                getCakes(null, null, 1)

            setCurrentCategory({ _id: categoryID, name: categoryName })
            setCurrentSorting('Default sorting')
        }

    }, [currentCategory._id])

    const handleSorting = useCallback((sortingMethod, name) => {
        if (currentSorting !== name) {
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
    }, [currentSorting])

    return (
        <>
        <TitlePage pageName={'Shop'}/>
        <div className='filter-and-sort-container'>
            <Search
                categories={categories}
                onFilterCategory={handleFilterCategory}
                currentCategory={currentCategory}
            />

            <Sort
                currentSorting={currentSorting}
                onSorting={handleSorting}
            />

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
