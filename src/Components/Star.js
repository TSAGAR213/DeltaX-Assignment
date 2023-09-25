import { useState } from "react";
import "./star.css"

const StarRating = () => {
    const [rating, setRating] = useState(0);
    let arr=[1,2,3,4,5]
    return (
      <div className="star-rating">
        {arr.map((star, index) => {
          index += 1;
          return (
            <button
            id="btn"
              type="button"
              key={index}
              className={index <= rating ? "on" : "off"}
              onClick={() => setRating(index)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };

  export default StarRating;