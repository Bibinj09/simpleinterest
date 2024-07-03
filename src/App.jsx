import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest] = useState(0)
  const [isPrinciple, setIsPrinciple] = useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)


const validate =(e)=>{
  const name = e.target.name
  const value = e.target.value
  
  if (!!value.match(/^[0-9]*$/)) {
    if(name=='principle'){
      setPrinciple(value)
      setIsPrinciple(true)
    }
    else if(name=='rate'){
      setRate(value)
      setIsRate(true)
    }
    else{
      setYear(value)
      setIsYear(true)
    }
  }
  else{
    if(name=='principle'){
      setPrinciple(value)
      setIsPrinciple(false)
    }
    else if(name=='rate'){
      setRate(value)
      setIsRate(false)
    }
    else{
      setYear(value)
      setIsYear(false)
    }
  }

}


const handleReset =()=>{
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)
  setInterest(0)
}

const handleCalculate = (e)=>{
  e.preventDefault()
  if(principle=="" || rate=="" || year==""){
    alert('Please fill the form completely')
  }
  else{
    setInterest((principle*rate*year)/100)
  }
}




  return (
    <div className="container-fluid bg-white text-white vh-100">
    <div className="row h-100 justify-content-center align-items-center">
      <div className="col-md-4">
        <div className="text-dark p-4 rounded" style={{ backgroundColor: '#f9f4f1', color: 'black', boxShadow: 'rgb(192 184 175 / 62%) 0px 3px 10px' }}>
          <div className="text-center mb-4">
            <h1 style={{ fontFamily: "Poppins", fontWeight: '600' }}>Simple Interest App</h1>
            <p>Calculate your simple interest easily</p>
          </div>
          <div style={{ backgroundColor: '#34d9cb', color: 'black', }} className="pb-4 pt-5 rounded mb-3 text-center">
            <h1 style={{ fontSize: "56px" }}>₹ {interest}</h1>
            <p style={{ fontSize: "20px" }}>Total Simple Interest</p>
          </div>
          <form className="mt-4" onSubmit={handleCalculate}>
            <div className="mb-3">
              <TextField id="outlined-basic" label="₹ Principal Amount" value={principle || ""} variant="outlined" className='w-100' onChange={(e) => validate(e)} name='principle' />
              {!isPrinciple &&
                <p className='text-danger'>*Invalid Input</p>}
            </div>
            <div className="mb-3">
              <TextField id="outlined-basic" label="Rate of Interest (p.a)%" value={rate || ""} variant="outlined" className='w-100' onChange={(e) => validate(e)} name='rate' />
              {!isRate &&
                <p className='text-danger'>*Invalid Input</p>}
            </div>
            <div className="mb-3">
              <TextField id="outlined-basic" label="Year (Yr)" value={year || ""} variant="outlined" className='w-100' onChange={(e) => validate(e)} name='year' />
              {!isYear &&
                <p className='text-danger'>*Invalid Input</p>}
            </div>
            <div className="d-flex justify-content-between">
              <Button type='submit' variant="contained" className='w-100 me-2' style={{ backgroundColor: '#1f1f1f', color: 'white', boxShadow: 'none', height: '60px' }} disabled={isPrinciple && isRate && isYear?false:true}>Calculate</Button>
              <Button variant="contained" className='w-100 ms-2' style={{ backgroundColor: '#e4e5de', color: 'Black', boxShadow: 'none', height: '60px' }} onClick={handleReset}>Reset</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)
}
export default App
