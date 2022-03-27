import TitlePage from 'components/TitlePage/TitlePage'
import TotalPrice from 'components/TotalPrice/TotalPrice'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { formatPrice } from 'utils/formatPrice'
import { getCommune, getDistrict, getListCommunes, getListDistricts, getProvince } from 'utils/getProvinceData'
import { communes, districts, provinces } from 'utils/provinceData'
import { validateEmail } from 'utils/validate'

import './CheckoutPage.scss'

export const CheckoutPage = ({ shoppingCart, user }) => {

    const [currentProvince, setCurrentProvince] = useState('00')
    const [currentDistrict, setCurrentDistrict] = useState('000')
    const [currentCommune, setCurrentCommune] = useState('00000')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const [errorEmail, setErrorEmail] = useState('')
    const [errorPhone, setErrorPhone] = useState('')
    const [errorAddress, setErrorAddress] = useState('')
    const [errorName, setErrorName] = useState('')

    const navigate = useNavigate()

    const handleSubmitForm = e => e.preventDefault()

    const handleBlur = (type) => {
        switch (type) {
            case 1:
                if (!email)
                    setErrorEmail('Please fill in this field!')
                else
                    if (!validateEmail(email))
                        setErrorEmail('Invalid email!')
                    else setErrorEmail('')
                break
            case 2:
                if (!phone)
                    setErrorPhone('Please fill in this field!')
                else
                    if (phone.length < 10 || phone.length > 11 )
                        setErrorPhone('Phone must be at least 10 numbers!')
                    else setErrorPhone('')
                break
            case 3:
                if (!address)
                    setErrorAddress('Please fill in this field!')
                else setErrorAddress('')
                break
            case 4:
                if (!name)
                    setErrorName('Please fill in this field!')
                else
                    if (name.length < 5)
                        setErrorName('Password must be at least 5 characters!')
                    else
                        setErrorName('')
                break
            default:
                break
        }
    }
    
    const handlePlaceOrder = () => {

        const province = getProvince(provinces, currentProvince)
        const district = getDistrict(districts, currentDistrict)
        const commune = getCommune(communes, districts, currentCommune)
        let data = {}
        if (currentCommune === '00000' || currentDistrict === '000' || !name || !email || !phone || !address) {
            if (!email) setErrorEmail('Please fill in this field!')
            if (!phone) setErrorPhone('Please fill in this field!')
            if (!name) setErrorName('Please fill in this field!')
            if (!address) setErrorAddress('Please fill in this field!')
        }
        else {
            if (commune._id === district._id)
                data = {
                    address: district.name + ', ' + province.name
                }
            else
                data = {
                    address: commune.name + ', ' + district.name + ', ' + province.name
                }
            data = {
                ...data,
                content: name + '\n' + email + '\n' + phone + '\n' + address 
            }
            console.log(data)
        }
    }
    
  return (
    <>
    <TitlePage pageName={'Checkout'}/>
    <div className='checkout-container'>
        <div className='checkout-left-container'>
            <hr/>
            <h4>BILLING DETAILS</h4>
            <form className='checkout-left-container-form' onSubmit={handleSubmitForm}>
                <div className='checkout-left-container-form-group'>
                    <input
                        placeholder='Your name'
                        value={user._id ? user.name : name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => handleBlur(4)}
                        onFocus={() => setErrorName('')}
                    />
                    <span className='checkout-left-container-form-message'>{errorName}</span>
                </div>
                <div className='checkout-left-container-form-input'>
                    <div className='checkout-left-container-form-group'>
                        <input
                            placeholder='Email'
                            type={'email'}
                            value={user._id ? user.name : email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => handleBlur(1)}
                            onFocus={() => setErrorEmail('')}
                        />
                        <span className='checkout-left-container-form-message'>{errorEmail}</span>
                    </div>
                    <div className='checkout-left-container-form-group'>
                        <input
                            placeholder='Phone number'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            onBlur={() => handleBlur(2)}
                            onFocus={() => setErrorPhone('')}
                        />
                        <span className='checkout-left-container-form-message'>{errorPhone}</span>
                    </div>
                </div>
                <div className='checkout-left-container-form-group'>
                    <input
                        placeholder='Address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        onBlur={() => handleBlur(3)}
                        onFocus={() => setErrorAddress('')}
                    />
                    <span className='checkout-left-container-form-message'>{errorAddress}</span>
                </div>
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
        shoppingCart: state.cartReducer,
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, null)(CheckoutPage)