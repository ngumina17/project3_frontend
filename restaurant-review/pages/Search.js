import SearchRes from '../components/SearchRes'
import Header from '../components/Header'
import React from "react";

class Search extends React.Component{
    constructor(props){
        super(props)
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
                <Header onChange={this.handleChange} />
            </header>
               <SearchRes data={this.state} />

        </>
    )
}
}

export default Search