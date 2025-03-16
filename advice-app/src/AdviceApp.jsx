import { useEffect, useState } from "react";

const AdviceApp = () => {
  const [advice, setAdvice] = useState("Click button to get advice")
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((count) => count+1);
  }

  useEffect(function() {
    getAdvice();
  }, []);

  return (
  <div>
    <h1>{advice}</h1>
    <button onClick={getAdvice}>Advice</button>
    <h2>You have read {count} pieces of advice today ✌️</h2>
  </div>
  )
}



export default AdviceApp