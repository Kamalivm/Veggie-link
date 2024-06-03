import React from 'react';
import { IoStar, IoStarHalf } from 'react-icons/io5';

const RatingStars = ({ rating }) => {
    const maxStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    const renderStars = () => {
        let stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<IoStar key={i} className="text-yellow-400 text-xl mr-1" />);
        }

        if (hasHalfStar) {
            stars.push(<IoStarHalf key="half" className="text-yellow-400 text-xl mr-1" />);
        }

        const remainingStars = maxStars - (fullStars + (hasHalfStar ? 1 : 0));
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<IoStar key={i + fullStars + (hasHalfStar ? 1 : 0)} className="text-gray-400 text-xl mr-1" />);
        }

        return stars;
    };

    return (
        <div className="flex items-center">
            {renderStars()}
        </div>
    );
};

export default RatingStars;
