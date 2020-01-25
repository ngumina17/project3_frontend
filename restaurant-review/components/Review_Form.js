import React from 'react'
import Star_Review from './Review_Form/Star_Review'
import Review_Field from './Review_Form/Review_Field'
import Link from 'next/link'

const Review_Form = () => (
    <nav>
        <Star_Review  />
        <Review_Field />
        <Link href="/"><button type="submit">Submit</button></Link>
    </nav>
)

export default Review_Form