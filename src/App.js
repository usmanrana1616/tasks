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
  return (
    <div style={{display:'flex',flexDirection:'row',textAlign:'center',marginTop:20,  justifyContent:'center', }}>
      <div style={{ background, color: "white", height: 30, width: 100 }}>
        Count: {count}
      </div>
    </div>

  );
}

export default App;
