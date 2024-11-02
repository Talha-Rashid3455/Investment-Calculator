import img1 from './assets/investment-calculator-logo.png'
import { useState } from 'react'


function App() {
  const [initialInvestment,setInitialInvestment]=useState(0)
  function handleInitialInvestment(event){
    setInitialInvestment(event.target.value)
  }
  const [annualInvestment,setAnnualInvestment]=useState(0)
  function handleAnnualInvestment(event){
    setAnnualInvestment(event.target.value)
  }
  const [expectedReturn,setExpectedReturn]=useState(0)
  function handleExpectedReturn(event){
    setExpectedReturn(event.target.value)
  }
  const [duration,setDuration]=useState(0)
  function handleDuration(event){
    setDuration(event.target.value)
  }

  let rows=[];
  let prev_investment=initialInvestment;
  let prev_interest=0;
  let val ;
  for (let i=0;i<duration;i++){
    val =  Number(prev_investment) + Number(Math.ceil(prev_investment*(expectedReturn/100))) + Number(annualInvestment)
          rows.push(
            <tr> 
      <td className='center'>{i+1}</td>
        <td className='center'>{val}</td>
        <td className='center'>{Math.ceil(prev_investment*(expectedReturn/100))}</td>
        <td className='center'>{prev_interest+Math.ceil(prev_investment*0.055)}</td>
        <td className='center'>{Number(initialInvestment)+Number(Number(annualInvestment)*Number(i+1))}</td>
      </tr>
          );
          prev_interest = prev_interest+Math.ceil(prev_investment*0.055);
          prev_investment = val;
          
  }
  return (
    <>
    <header id='header'>
    <img src={img1} alt='image'/>
    <h1>React Investment Calculator</h1>
    </header>
      <section id='user-input'>
        <section className='input-group'>
        <label>Initial Investment</label>
        <label>Annual Investment</label>
        </section>
        <section className='input-group'>
        <input type='number' value={initialInvestment} onChange={handleInitialInvestment}/>
        <input type='number' value={annualInvestment} onChange={handleAnnualInvestment}/>
        </section>
        <section className='input-group'>
        <label>Expected Return</label>
        <label>Duration</label>
        </section>
        <section className='input-group'>
        <input type='number' value={expectedReturn} onChange={handleExpectedReturn}/>
        <input type='number' value={duration} onChange={handleDuration}/>
        </section>
      </section>
      <section id='result'>
  <table style={{ width: "100%" }}>
    <thead>
      <tr>
        <th className='center'>Year</th>
        <th className='center'>Investment Value</th>
        <th className='center'>Interest (Year)</th>
        <th className='center'>Total Interest</th>
        <th className='center'>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
</section>


    </>
  )
}

export default App
