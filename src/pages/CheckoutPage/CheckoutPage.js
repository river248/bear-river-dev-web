import TitlePage from 'components/TitlePage/TitlePage'
import TotalPrice from 'components/TotalPrice/TotalPrice'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { formatPrice } from 'utils/formatPrice'
import { getCommune, getDistrict, getListCommunes, getListDistricts, getProvince } from 'utils/getProvinceData'
import { communes, districts, provinces } from 'utils/provinceData'

import './CheckoutPage.scss'

export const CheckoutPage = ({ shoppingCart }) => {

    const [currentProvince, setCurrentProvince] = useState('00')
    const [currentDistrict, setCurrentDistrict] = useState('000')
    const [currentCommune, setCurrentCommune] = useState('00000')

    const navigate = useNavigate()

    const handlePlaceOrder = () => {

        const province = getProvince(provinces, currentProvince)
        const district = getDistrict(districts, currentDistrict)
        const commune = getCommune(communes, districts, currentCommune)

        if (currentCommune === '00000' || currentDistrict === '000')
            console.log('error')
        else
            if (commune._id === district._id)
                console.log(province, district)
            else
                console.log(province, district, commune)
    }
    
  return (
    <>
    <TitlePage pageName={'Checkout'}/>
    <div className='checkout-container'>
        <div className='checkout-left-container'>
            <hr/>
            <h4>BILLING DETAILS</h4>
            <form className='checkout-left-container-form'>
                <input placeholder='Your name'/>
                <div className='checkout-left-container-form-input'>
                    <input placeholder='Email' type={'email'}/>
                    <input placeholder='Phone number'/>
                </div>
                <input placeholder='Address'/>
                <div className='checkout-left-container-form-address'>
                    <select name='province' onChange={(e) => { setCurrentProvince(e.target.value); setCurrentDistrict('000')}}>
                        { provinces.map(province => (<option key={province._id} value={province._id}>{province.name}</option>))}
                    </select>
                    <select name='district' onChange={(e) => {setCurrentDistrict(e.target.value); setCurrentCommune('00000')}}>
                        { getListDistricts(districts, currentProvince).map(district => (<option key={district._id} value={district._id}>{district.name}</option>))}
                    </select>
                    <select name='commune' onChange={(e) => setCurrentCommune(e.target.value)}>
                        { getListCommunes(communes, districts, currentDistrict).map(commune => (<option key={commune._id} value={commune._id}>{commune.name}</option>))}
                    </select>
                </div>
            </form>
        </div>
        <div className='checkout-right-container'>
            <h4>YOUR ORDER</h4>
            <hr/>
            <table className='checkout-table'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    { shoppingCart.map((item, index) => (<tr key={index}>
                        <td>{`${index+1}. ${item.product.name}`}</td>
                        <td>$ {formatPrice(Math.round(item.product.price*item.quantity*100)/100)}</td>
                    </tr>))}
                </tbody>
            </table>
            <hr/>
            <TotalPrice/>
            <hr/>
            <button onClick={handlePlaceOrder}>PLACE ORDER</button>
            <button onClick={() => navigate('/shop')}>CONTINUE SHOPPING</button>
        </div>
    </div>
    </>
  )
}

const mapStateToProps = (state) => {
    return {
        shoppingCart: state.cartReducer
    }
}

export default connect(mapStateToProps, null)(CheckoutPage)