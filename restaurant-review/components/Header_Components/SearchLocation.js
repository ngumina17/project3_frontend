import React from 'react'
import Link from 'next/link'


class SearchLocation extends React.Component{
    constructor(){
        super()
    }

    

    render(){

return(
    <input type="text" onChange={this.handleChange}  placeholder="Search Location..." name="search" />
)
}

}


   
export default SearchLocation