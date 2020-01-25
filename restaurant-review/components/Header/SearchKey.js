import React from 'react'
import Link from 'next/link'


function SearchKey (props) { 

    function handleChange(e) {
        let keywords = (e.target.value)
        props.newKeywords(keywords)
    }

return(
    <input type="text" onChange={handleChange}  placeholder="Search Keywords..." name="search" />
)}
export default SearchKey