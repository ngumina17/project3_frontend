import SearchRes from '../components/SearchRes'
import Header from '../components/Header'
import React from "react";

class Search extends React.Component{
    constructor(props){
        super(props)
    }
<<<<<<< HEAD

    handleChangeSearch=(e)=> {
=======
    handleChange=(e)=> {
>>>>>>> 00870cab4817fd5f1eb36c5124120ef0b0ac985f
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
<<<<<<< HEAD
                <Header
                    handleChangeSearch={this.handleChangeSearch}
/>
            </header>
                 <SearchRes
props={this.state}
/>
=======
                <Header onChange={this.handleChange} />
            </header>
               <SearchRes data={this.state} />
>>>>>>> 00870cab4817fd5f1eb36c5124120ef0b0ac985f

        </>
    )
}
}

export default Search