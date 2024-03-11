import './App.css'
import { useState } from 'react'

function App() {

  const [display,setDisplay] = useState('');

  let handleClear = () => {
    setDisplay('')
  }

  let handleDelete = () => {
    setDisplay(display.slice(0,-1));
  }

  let handleDisplay = (value) => {
    setDisplay(display+value);
  }

  let handleCalculate = () => {
    setDisplay(eval(display))
  }

  return (
    <div style={{height:"100vh",width:"100%"}} className='bg-dark d-flex justify-content-center align-items-center'>
      <div style={{height:"85vh",width:"35%"}} className='bg-secondary rounded'>
        {/* display div */}
        <div className='display d-flex justify-content-center '>
          {/* <div style={{width:"90%",height:"10vh"}} className="display mt-4">{display}</div> */}
          <input style={{width:"90%",height:"10vh"}} className='bg-white mt-4 rounded' value={display} type="text" name="" id="" disabled />
        </div>
        {/* Keys div */}
        <div style={{width:"90%",height:"10vh"}} className='m-3'>

          <div className='row m-3 d-flex'>
          <button type="button" onClick={handleClear} className="col btn btn-info">AC</button>
          <button type="button" onClick={handleDelete} className="col btn btn-info">DE</button>
          <button type="button" onClick={()=>handleDisplay('.')} className="col btn btn-info">.</button>
          <button type="button" onClick={()=>handleDisplay('/')} className="col btn btn-info">÷</button>
          </div>

          <div className='row m-3'>
          <button type="button" onClick={()=>handleDisplay('7')} className="col btn btn-info">7</button>
          <button type="button" onClick={()=>handleDisplay('8')} className="col btn btn-info">8</button>
          <button type="button" onClick={()=>handleDisplay('9')} className="col btn btn-info">9</button>
          <button type="button" onClick={()=>handleDisplay('*')} className="col btn btn-info">x</button>
          </div>

          <div className='row m-3'>
          <button type="button" onClick={()=>handleDisplay('4')} className="btn btn-info col">4</button>
          <button type="button" onClick={()=>handleDisplay('5')} className="btn btn-info col">5</button>
          <button type="button" onClick={()=>handleDisplay('6')} className="btn btn-info col">6</button>
          <button type="button" onClick={()=>handleDisplay('-')} className="btn btn-info col">-</button>
          </div>

          <div className='row m-3'>
          <button type="button" onClick={()=>handleDisplay('1')} className="btn btn-info col">1</button>
          <button type="button" onClick={()=>handleDisplay('2')} className="btn btn-info col">2</button>
          <button type="button" onClick={()=>handleDisplay('3')} className="btn btn-info col">3</button>
          <button type="button" onClick={()=>handleDisplay('+')} className="btn btn-info col"> + </button>
          </div>

          <div className='row m-3'>
          <button type="button" onClick={()=>handleDisplay('00')} className="btn btn-info">00</button>
          <button type="button" onClick={()=>handleDisplay('0')} className="btn btn-info">0</button>
          <button type="button" onClick={handleCalculate} className="btn btn-outline-info col md-3">=</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
