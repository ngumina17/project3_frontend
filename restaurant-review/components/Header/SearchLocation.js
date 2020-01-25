import React from 'react'
import Link from 'next/link'


function SearchLocation(props) {


    function handleChange(e) {
        let location = (e.target.value)
        props.newLocation(location)
    }


return(
    <input type="text" onChange={handleChange}  placeholder="Search Location..." name="search" />
)}
    export default SearchLocation