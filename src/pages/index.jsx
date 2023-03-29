import { useState } from "react"

export default function HomePage() {
  const [value, setValue] = useState(0)

  return (
    <>
      <h1>hello world {value}</h1>
      <button onClick={() => setValue(value + 1)}>Increase</button>
      <button onClick={() => setValue(value - 1)}>Decrease</button>
    </>
  )
}
