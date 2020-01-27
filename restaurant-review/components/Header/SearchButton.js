import React from 'react'
import Link from 'next/link'
import './header.module.css'


function SearchButton (props) {

function handleClick(){
console.log('click ', props)
}

return(
<div id='search'>
    <Link href="/Search"><button onClick={handleClick} type="search">Search</button></Link>
   
        {/* <style jsx>{`
        div,
        button {
          height: 50px;
        }

        }
      `}</style> */}

 </div>
)}


export default SearchButton