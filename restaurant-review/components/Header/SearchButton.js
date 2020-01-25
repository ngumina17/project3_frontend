import React from 'react'
import Link from 'next/link'


function SearchButton (props) {

function handleClick(){
console.log('click ', props)
}

return(
    <Link href="/Search"><button onClick={handleClick} type="search">Search</button></Link>
    
)}


export default SearchButton