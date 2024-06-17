const element = (
    // Write your code here.
    <div className='bg-container'>
      <h1 className='main-heading'>Congratulations</h1>
      <div className='card-container'>
        <div className='image-container'>
          <img
            className='profile-image'
            src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
          />
          <h1 className='name'>Kiran V</h1>
          <p className='college'>
            Vishnu Institute of Computer Education and Technology, Hyderabad
          </p>
          <img
            className='watch-image'
            src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
          />
        </div>
      </div>
    </div>
  )
  
  ReactDOM.render(element, document.getElementById('root'))
  