import React, { useState, useEffect } from 'react';
import SearchKey from './Header_Components/SearchKey'
import SearchLocation from './Header_Components/SearchLocation'
import SearchButton from './Header_Components/SearchButton'
import AddRestraunt from './Header_Components/AddRestaurant'
import Link from 'next/link'




class Header extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            handleChangeSearch: this.props.handleChangeSearch
        }
    }

    handleChange=(e)=> {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
       console.log("state", this.state)
    }

    render(){

        return (
            <>
            <nav id='home'>
                <Link href="/"><img src= 'https://s3-media0.fl.yelpcdn.com/assets/public/default.yelp_design_web.yji-b085a608c15f110ce750ccef3e1e1db0.png' alt='yelp'/></Link>
                <SearchButton
                    handleChangeSearch={this.state.handleChangeSearch}
                                />
                <SearchLocation
                    onChange={props.onChange}
                />
                <SearchKey
                    onChange={props.onChange}
                />
                <AddRestraunt
                />
            </nav>
            </>
        )
    }}


   
export default Header;