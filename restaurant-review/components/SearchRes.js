import React from 'react'
import Results from './Search/Results'
import Link from 'next/link'

function SearchRes (props) {
console.log(props)

return(
    <div>
        <Results data={props.data} />
    </div>
)}

export default SearchRes