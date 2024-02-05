import React, { useEffect, useState } from "react";

function App() {
  const [catFact, setCatFact] = useState("");
  const [factNumber, setFactNumber] = useState(0);

  useEffect(() => {
    const fectData = async () => {
      try {
        const response = await fetch("https://catfact.ninja/facts");
        const data = await response.json();

        setCatFact(data.data[factNumber].fact);
        console.log(factNumber);
      } catch (error) {
        console.error("error");
      }
    };
    fectData();
  }, [factNumber]);

  return (
    <main>
      <h1>Cats</h1>
      <p>{catFact}</p>
      <button onClick={() => setFactNumber((factNumber) => factNumber + 1)}>
        Change fact {factNumber}
      </button>
    </main>
  );
}
export default App;
