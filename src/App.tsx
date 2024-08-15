import Rate from "./components/Rate"

function App() {
  return (
    <main className="h-full max-container flex justify-center items-center">
      <Rate
        ratingQuestion="How many stars would you give to our Online Code Editor?"
        startAltTextFilled="Yellow Star Icon Filled"
        startAltTextEmpty="Empty Star Icon Empty"
      />
    </main>
  )
}

export default App
