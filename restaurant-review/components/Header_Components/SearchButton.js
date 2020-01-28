import React from 'react'
import Link from 'next/link'


function SearchButton(props){
  // console.log(props)

  function click(props){
    console.log(props.onChange)
console.log(props)
}


return(
<div id='search'>
    <Link href="/Search"><button onClick={click} type="search" >Search</button></Link>
   
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