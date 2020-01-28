import React, { useState, useEffect } from 'react';
import FormImg from './Restraunt_Form/FormImg'
import FormName from './Restraunt_Form/FormName'
import Star_Review from './Review_Form/Star_Review'
import Review_Field from './Review_Form/Review_Field'
import FormState from './Restraunt_Form/FormState'
import FormStreet from './Restraunt_Form/FormStreet'
import FormZipcode from './Restraunt_Form/FormZipcode'
import FormCity from './Restraunt_Form/FormCity'
import FormSubmit from './Restraunt_Form/FormSubmit'



function Restraunt_form(props) {
    const [name, setName] = useState({
        name: ''
    })
    const [address, setAddress] = useState({
        address: ''
    })
    const [city, setCity] = useState({
        city: ''
    })
    const [state, setState] = useState({
        state: ''
    })
    const [zip, setZip] = useState({
        zip: 0
    })
    const [rating, setRating] = useState({
        rating: 0
    })
    const [text, setText] = useState({
        text: ''
    })
    const [image, setImage] = useState({
        image: ''
    })

    function newImage(image) {
        setImage({ image: image })
    }
    function newRating(rating) {
        setRating({ rating: rating })
    }
    function newText(text) {
        setText({ text: text })
    }
    function newZip(zip) {
        setZip({ zip: zip })
    }
    function newCity(city) {
        setCity({ city: city })
    }
    function newState(state) {
        setState({ state: state })
    }
    function newName(name) {
        setName({ name: name })
    }
    function newAddress(address) {
        setAddress({ address: address })
    }

    return (
        <form>
            <FormImg
                newImage={newImage}
            />
            <FormName
                newName={newName}
            />
<FormCity
newCity={newCity}
/>
            <FormState
                newState={newState}
            />
            <FormStreet
                newAddress={newAddress}
            />
            <FormZipcode
                newZip={newZip}
            />
            <Star_Review
                newRating={newRating}
            />
            <Review_Field
                newText={newText}
            />
            <FormSubmit
                name={name.name}
                address={address.address}
                city={city.city}
                image={image.image}
                state={state.state}
                zip={zip.zip}
                text={text.text}
                rating={rating.rating}
            />
        </form>
    )
}

export default Restraunt_form