import React, { useState, useEffect } from 'react';
import './reviews.css';

const Reviews = ({ apiKey, placeId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const apiKey = 'AIzaSyBywAePARFHZ-USEwTX-c1yTHbVxdFhZ1U';
    const placeId = 'ChIJA8jp7S4qCTkR0dVo86HwlCs';
    const fetchReviews = async () => {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`
      );
      const data = await response.json();
      setReviews(data.result.reviews);
    };

    fetchReviews();
  }, [apiKey, placeId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.time}>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
            <p>Author: {review.author_name}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
};

export default Reviews;
