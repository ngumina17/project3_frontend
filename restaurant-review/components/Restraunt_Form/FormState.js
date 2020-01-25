import React from 'react'
import Link from 'next/link'


function FormState(props) {

    function handleChange(e) {
        let state = e.target.value
        props.newState(state)
    }

return(
    <div>
        <h2>State</h2>
        <input type="text" onChange={handleChange} placeholder="State" name="search" />
    </div>
)
}
export default FormState