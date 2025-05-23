import { FaStar } from "react-icons/fa";

export function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[...Array(rating)].map((_, index) => (
        <FaStar key={index} color="orange" size={24} />
      ))}
      <p className="text-gray-700 text-xl">({rating}/5)</p>
    </div>
  );
}
