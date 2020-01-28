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

    handleChangeSearch=(e)=> {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
       console.log("state", this.state)
// return (this.state)
    }

    render(){
        console.log('state passed as props',this.state)
    return (
        <>
            <header>
                <Header
                    handleChangeSearch={this.handleChangeSearch}
/>
            </header>
                 <SearchRes
props={this.state}
/>

        </>
    )
}
}

export default Search