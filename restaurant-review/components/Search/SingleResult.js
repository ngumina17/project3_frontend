import React from 'react'
import Link from 'next/link'

function SingleResult() {
    //map through list to reprint all info needed
    // 
    return (
        <div>
            <h2>Image</h2>
<Link href = "/SingleRestraunt">Restraunt Name</Link>
            
            <h3>Star Count</h3>
            <h3>Street Address</h3>
            <h3>City</h3>
            <h3>State</h3>
            <h3>Zipcode</h3>
        </div>
    )
}

export default SingleResult