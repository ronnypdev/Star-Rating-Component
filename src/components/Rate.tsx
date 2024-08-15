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
  // const [star, setStar] = useState<boolean>(false);
  const [rating, setRating] = useState<null>(null);
  const [hoverStar, setHoverStar] = useState<null>(null);
  const [starNumber, setStarNumber] = useState<number>(5)

  function handleStarToggle(): void {
    // setStar(prevStar => !prevStar);
  }

  const starElement: JSX.Element[] = [...Array(starNumber)].map((star, index) => {
    const currentRating = index + 1;
    return (
      <>
        <img className="cursor-pointer"
          key={index}
          src={currentRating <= (hoverStar || rating) ? starFilled : starEmpty}
          onClick={handleStarToggle}
          alt={currentRating <= (hoverStar || rating) ? startAltTextFilled : startAltTextEmpty}
          onMouseEnter={() => setHoverStar(currentRating)}
          onMouseLeave={() => setHoverStar(null)}
          width={80}
          height={80}
        />
      </>
    )
  });

  // console.log("starElement: ", starElement.length)

  return (
    <>
      <article className="w-[647px] h-[310px] flex flex-col justify-center items-center p-16 gap-8 bg-white rounded-2xl shadow-lg">
        <h3 className="text-darkBlue text-center font-Merriweather text-2xl leading-normal font-bold">
          {ratingQuestion}
        </h3>
        <div className="flex justify-between items-center w-full max-w-full">{starElement}</div>
        <p className="font-Poppins text-sm font-normal leading-normal text-darkGray">We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.</p>
      </article>
    </>
  )
}
