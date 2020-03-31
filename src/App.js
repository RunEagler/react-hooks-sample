import React,{useState} from 'react';


function App() {
  const [count,setCount] = useState(0)
  const increment = ()=> setCount(count+1)
  const decrement = ()=> setCount(count-1)
  const increment2 = () => setCount(prevCount=>prevCount+1)
  const reset = ()=>setCount(0)
  const double =  ()=>setCount(count*2)
  const divThree = ()=>setCount(c=> c%3==0? c/3 : c)
  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>
        <button onClick={increment2}>+2</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={double}>double</button>
        <button onClick={divThree}>div3</button>
      </div>
    </>
  );
}

export default App;
