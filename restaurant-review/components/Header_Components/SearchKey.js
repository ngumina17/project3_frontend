import React from 'react'
import Link from 'next/link'
import './header.module.css'

function SearchKey (props) { 

    function handleChange(e) {
        let keywords = e.target.value
        props.newKeywords(keywords)
    }

return(
    <input id='key' type="text" onChange={handleChange}  placeholder="Search Keywords..." name="search" />
)}
export default SearchKey