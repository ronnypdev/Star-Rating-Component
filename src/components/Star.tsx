import { useState } from "react";
import starEmpty from "../assets/images/star_empty.svg";
import starFilled from "../assets/images/star_filled.svg";

type Star = {
  startAltTextFilled: string,
  startAltTextEmpty: string,
}

export default function Star(
  { startAltTextFilled,
    startAltTextEmpty }: Star) {
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

  return (
    <>
      <img className="cursor-pointer"
        src={star || hoverStar ? starFilled : starEmpty}
        onClick={handleStarToggle}
        onMouseEnter={handleFilledStarHover}
        onMouseLeave={handleEmptyStarHover}
        alt={star || hoverStar ? startAltTextFilled : startAltTextEmpty}
        width={80}
        height={80}
      />
    </>
  );
}
