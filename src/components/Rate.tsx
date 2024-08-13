import Star from "./Star"

export default function Rate() {

  const starElement: JSX.Element[] = [...Array(5)].map((_, index) => (
    <Star
      key={index}
      startAltTextFilled="Star Icon Fill Yellow"
      startAltTextEmpty="Star Icon Empty Grey"
    />
  ));

  console.log("starElement: ", starElement.length)

  return (
    <>
      <article className="w-[647px] h-[310px] flex flex-col justify-center items-center p-16 gap-8 bg-white rounded-2xl shadow-lg">
        <h3 className="text-darkBlue text-center font-Merriweather text-2xl leading-normal font-bold">How many stars would you give to our Online Code Editor?</h3>
        <div className="flex justify-between items-center w-full max-w-full">{starElement}</div>
        <p className="font-Poppins text-sm font-normal leading-normal text-darkGray">We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.</p>
      </article>
    </>
  )
}
