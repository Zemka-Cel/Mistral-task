import React, { useState } from 'react'
import Rating from 'react-simple-star-rating'

export default function Star(props) {
  const [rating, setRating] = useState(props.rating) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }

  return (
    <div className='App'>
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={20}
        label
        transition
        fillColor='orange'
        emptyColor='gray'
        className='foo' // Will remove the inline style if applied
      />
      {/* Use rating value */}
      {rating}
    </div>
  )
}