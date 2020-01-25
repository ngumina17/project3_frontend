import React from 'react'
import FormImg from './Restraunt_Form/FormImg'
import FormName from './Restraunt_Form/FormName'
import FormReview from './Restraunt_Form/FormReview'
import FormStar from './Restraunt_Form/FormStar'
import FormState from './Restraunt_Form/FormState'
import FormStreet from './Restraunt_Form/FormStreet'
import FormZipcode from './Restraunt_Form/FormZipcode'
import FormSubmit from './Restraunt_Form/FormSubmit'
import Link from 'next/link'


const Restraunt_form = () => (
    <nav>
        <FormImg/>
<FormName/>
<FormReview/>
<FormStar/>
<FormState/>
<FormStreet/>
<FormZipcode/>
<FormSubmit/>
    </nav>
)

export default Restraunt_form