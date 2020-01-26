import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Star from './Single_Restruant/Star'
import Catagories from './Single_Restruant/Catagories'
import Reviews from './Single_Restruant/Reviews'

function Restraunt() {

    return (
        <body>
            <h1>Restraunt Name</h1>
            <div>
                <h3>Street Address</h3>
                <h3>City</h3>
                <h3>State</h3>
                <h3>Zipcode</h3>
            </div>
            <Link href="/RvwForm"><button>Add Review</button></Link>
            <Star />
            <h5>Review Count</h5>
            <Catagories />
            <Reviews />
        </body>
    )
}

export default Restraunt