import startEmpty from "../assets/images/star_empty.svg";
import startFilled from "../assets/images/star_filled.svg";

export default function Star() {
  return (
    <>
      <img className="cursor-pointer" src={startFilled} alt="star icon filled" width={80} height={80} />
    </>
  )
}
