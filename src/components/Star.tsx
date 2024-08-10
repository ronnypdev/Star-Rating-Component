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
  const [showStar, setShowStar] = useState<boolean>(false);


  function handleStarToggle(): void {
    setStar(prevStar => !prevStar);
  }

  return (
    <>
      <img className="cursor-pointer" src={star ? starFilled : starEmpty} onClick={handleStarToggle} alt={star ? startAltTextFilled : startAltTextEmpty} width={80} height={80} />
    </>
  );
}
