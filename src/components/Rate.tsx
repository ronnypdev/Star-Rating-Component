import { useState } from "react";
import starEmpty from "../assets/images/star_empty.svg";
import starFilled from "../assets/images/star_filled.svg";

type Rate = {
  rating: number,
  ratingQuestion: string,
  startAltTextFilled: string,
  startAltTextEmpty: string,
}

export default function Rate({
  rating,
  ratingQuestion,
  startAltTextFilled,
  startAltTextEmpty
}: Rate) {
  const [star, setStar] = useState<boolean>(false);
  const [hoverStar, setHoverStar] = useState<boolean>(false);

  function handleStarToggle(): void {
    setStar(prevStar => !prevStar);
  }

  function handleFilledStarHover(): void {
    setHoverStar(true);
  }

  function handleEmptyStarHover(): void {
    setHoverStar(false)
  }


  const starElement: JSX.Element[] = [...Array(5)].map((_, index) => (
    <img className="cursor-pointer"
      key={index}
      src={star || hoverStar ? starFilled : starEmpty}
      onClick={handleStarToggle}
      onMouseEnter={handleFilledStarHover}
      onMouseLeave={handleEmptyStarHover}
      alt={star || hoverStar ? startAltTextFilled : startAltTextEmpty}
      width={80}
      height={80}
    />
  ));

  console.log("starElement: ", starElement.length)

  return (
    <>
      <article className="w-[647px] h-[310px] flex flex-col justify-center items-center p-16 gap-8 bg-white rounded-2xl shadow-lg">
        <h3 className="text-darkBlue text-center font-Merriweather text-2xl leading-normal font-bold">
          How many stars would you give to our Online Code Editor?
        </h3>
        <div className="flex justify-between items-center w-full max-w-full">{starElement}</div>
        <p className="font-Poppins text-sm font-normal leading-normal text-darkGray">We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.</p>
      </article>
    </>
  )
}
