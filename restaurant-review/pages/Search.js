import SearchRes from '../components/SearchRes'
import Header from '../components/Header'
import React from "react";

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={
            keywords: '',
            location: ''
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
            <header>
                <Header />
            </header>
                 <SearchRes />

        </>
    )
}
}

export default Search