import React from 'react'
import Link from 'next/link'

function SearchKey (props) { 

return(
    <input id='key' type="text"  onChange={props.onChange} placeholder="Search Keywords..." name="keyword" />
)}
export default SearchKey