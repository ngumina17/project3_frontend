import React from 'react'
import SearchKey from './Header/SearchKey'
import SearchLocation from './Header/SearchLocation'
import SearchButton from './Header/SearchButton'
import AddRestraunt from './Header/AddRestraunt'
import Link from 'next/link'


const Header = () => (
    <nav>        
        <SearchButton />
        <SearchLocation />
       <SearchKey/>
        <AddRestraunt />
    </nav>
)

export default Header