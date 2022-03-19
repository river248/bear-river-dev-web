/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { ref, getDownloadURL } from 'firebase/storage'

import './ImageURL.scss'
import { storage } from 'config/firebaseConfig'

function ImageURL({ source, alert }) {

    const [image, setImage] = useState('')

    useEffect(() => {
        let isSubcribe = true

        if(source)
            getDownloadURL(ref(storage, `${source}`))
            .then(url => {
                if(isSubcribe)
                    setImage(url)
            })
            .catch((error) => console.log(error))

        return () => {
            setImage('')
            isSubcribe = false
        }
        
    }, [source])

    return (
        <>
            { image ? <img src={image} alt={alert}/> : <div className='box__background--image'/>}
        </>
    )
}

export default React.memo(ImageURL)