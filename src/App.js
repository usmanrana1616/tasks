import { useState, useEffect } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [background, setbackground] = useState("gray");
 
  var value = 25;
  useEffect(() => {
    var inter = setInterval(() => {
      value = value - 1;
      setCount(value);
      if (value == 20) {
        setbackground("black");
        setCount(value);
      } else if (value == 10) {
        setbackground("yellow");
        setCount(value);
      }else if(value==5){
        setbackground("lightblue");
        setCount(value);
      }
       else if (value == 0) {
        clearInterval(inter);
      }
    }, 1000);
  }, []);

  const [pkr, setPKR] = useState(170);
  const [dollar, setDollar] = useState(1);

  useEffect(() => {
    setDollar(pkr/170)
  }, [pkr])
  useEffect(() => {
    setPKR(dollar*170)
  }, [dollar])
  return (
    <div style={{textAlign:'center',marginTop:20,  justifyContent:'center', }}>
      <div style={{ background, color: "white", height: 30, width: 100 }}>
        Count: {count}
      </div>
      <div >

      <div>
        <text>Enter Dollar</text>
        <input
          value={dollar}
          placeholder={"Enter dollar"}
          onChange={(e) => setDollar(e.target.value)}
        />
      </div>
      <div>
      <text>Enter Pkr</text>
        <input
          value={pkr}
          placeholder={"Enter pkr"}
          onChange={(e) => setPKR(e.target.value)}
        />
      </div>
      </div>
    </div>

  );
}

export default App;
