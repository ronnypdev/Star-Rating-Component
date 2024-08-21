import { useState } from "react";
import starEmpty from "../assets/images/star_empty.svg";
import starFilled from "../assets/images/star_filled.svg";

type Rate = {
  ratingQuestion: string,
  startAltTextFilled: string,
  startAltTextEmpty: string,
}

export default function Rate({
  ratingQuestion,
  startAltTextFilled,
  startAltTextEmpty
}: Rate) {
  const [rating, setRating] = useState<number | null>(null);
  const [hoverStar, setHoverStar] = useState<number | null>(null);


  const starElement: JSX.Element[] = [...Array(5)].map((_, index) => {
    const currentRating = index + 1;
    return (
      <>
        <img className="cursor-pointer"
          key={index}
          src={currentRating <= (hoverStar! || rating!) ? starFilled : starEmpty}
          onClick={() => setRating(currentRating)}
          alt={currentRating <= (hoverStar! || rating!) ? startAltTextFilled : startAltTextEmpty}
          onMouseEnter={() => setHoverStar(currentRating)}
          onMouseLeave={() => setHoverStar(null)}
          width={80}
          height={80}
        />
      </>
    )
  });

  function changeRatingText(ratingNumber: number | null): string {
    switch (ratingNumber) {
        case 1:
          return "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.";
        case 2:
          return "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.";
        case 3:
          return "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.";
        case 4:
          return "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.";
        case 5:
          return "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform.";
        default:
          return "";
    }
  }

  return (
    <>
      <article className="w-[647px] h-[310px] flex flex-col justify-center items-center p-16 gap-8 bg-white rounded-2xl shadow-lg">
        <h3 className="text-darkBlue text-center font-Merriweather text-2xl leading-normal font-bold">
          {ratingQuestion}
        </h3>
        <div className="flex justify-between items-center w-full max-w-full">
          {starElement}
        </div>
        <p className="font-Poppins text-sm font-normal leading-normal text-darkGray">
          {changeRatingText(rating)}
        </p>
      </article>
    </>
  )
}
