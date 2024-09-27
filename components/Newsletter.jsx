import React from 'react'

const Newsletter = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className='newsletter'>
     
      <h1>Subscribe t0 Our Newsletter</h1>
     
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='Enter Email'></input>
        <button type='submit'>Subscribe</button>
      </form>
    </section>
  )
}

export default Newsletter