import React from 'react'
import Link from 'next/link'


function SearchLocation(props){

return(
    <input type="text" onChange={props.onChange} placeholder="Search Location..." name="location" />
)
}
 
export default SearchLocation