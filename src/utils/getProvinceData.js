export const getListDistricts = (districts, provinceId) => {
    if (provinceId !== '00') {
        const listDistricts = districts.filter(district => district.provinceId === provinceId)
        return [
            { provinceId: '00', name: 'Quận / Huyện', _id: '000' },
            ...listDistricts
        ]
    } else return [{ provinceId: '00', name: 'Quận / Huyện', _id: '000' }]
}

export const getListCommunes = (communes, districts, districtId) => {
    if (districtId !== '000') {

        const listCommunes = communes.filter(commune => commune.districtId === districtId)
        
        if (listCommunes[0].name !== null) {
            return [
                { districtId: '000', name: 'Phường / Xã', _id: '00000' },
                ...listCommunes
            ]
        } else {
            const district = getDistrict(districts, districtId)
            return [
                { districtId: '000', name: 'Phường / Xã', _id: '00000' },
                {...district}
            ]
        }
    } else return [{ districtId: '000', name: 'Phường / Xã', _id: '00000' }]
}

export const getProvince = (provinces, provinceId) => {
    const province = provinces.filter(province => province._id === provinceId)
    return {...province[0]}
}

export const getDistrict = (districts, districtId) => {
    const district = districts.filter(district => district._id === districtId)
    return {...district[0]}
}

export const getCommune = (communes, districts, communeId) => {
    if (communeId !== '00000') {
        let commune = communes.filter(commune => commune._id === communeId)
        
        if (commune.length > 0)
            return {...commune[0]}
        else {
            let commune = getDistrict(districts, communeId)
            return {_id: commune._id, name: commune.name, districtId: commune.districtId}
        }
    } else return null
}