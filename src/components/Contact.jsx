import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
    <main>
      <h1>Conatct Us</h1>
    <form >

      <div>
        <label >Name</label>
        <input type="text" placeholder='abc' />
      </div>

      <div>
        <label >Email</label>
        <input type="email" placeholder='Ab12@cde.com' />
      </div>
      
      <div>
        <label >Message</label>
        <input type="text" placeholder='Tell us about your query...' />
      </div>

      <button type='submit'>Send</button>

    </form>
    </main>
</div>

  )
}

export default Contact