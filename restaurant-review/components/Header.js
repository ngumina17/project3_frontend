import React, { useState, useEffect } from 'react';
import SearchKey from './Header/SearchKey'
import SearchLocation from './Header/SearchLocation'
import SearchButton from './Header/SearchButton'
import AddRestraunt from './Header/AddRestraunt'
import Link from 'next/link'


function Header() {

    const [keywords, setKeywords] = useState({
        keywords: ''
    })
    const [location, setLocation] = useState({
        location: ''
    })

    function newKeywords(keywords) {
        setKeywords({ keywords: keywords })
    }
    function newLocation(location) {
        setLocation({ location: location })
    }



    return (
        <nav>
            <Link href="/"><img src= 'https://s3-media0.fl.yelpcdn.com/assets/public/default.yelp_design_web.yji-b085a608c15f110ce750ccef3e1e1db0.png' alt='yelp'/></Link>
            <SearchButton
                keywords={keywords.keywords}
                location={location.location}
            />
            <SearchLocation
                newLocation={newLocation}
            />
            <SearchKey
                newKeywords={newKeywords}
            />
            <AddRestraunt
            />
        </nav>
    )
}

export default Header