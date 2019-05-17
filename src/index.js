import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';







class Container extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      mode: 'light' 
    }
    this.handleLightMode= this.handleLightMode.bind(this);
    
    this.handleDarkMode= this.handleDarkMode.bind(this)
    
  }
  handleLightMode() {
    // Change 'mode' on the component's state to 'light'
    this.setState({mode:'light'})
  }
  handleDarkMode() {
    // Change 'mode' on the component's state to 'dark'
    this.setState({mode: null})
  }
  render() {
    const { mode } = this.state
    
    return (
      <React.Fragment>
      <div className="full" style={{
        height: '100%',
        background: mode === 'light' ? '#fff' : '#000'
      }}>
       
        {mode === 'light'
          ? <button onClick={this.handleDarkMode}>Dark Mode<span role="img" aria-label="touch-light">🔦</span></button>
          : <button onClick={this.handleLightMode}>Light Mode<span role="img" aria-label="bulb">💡</span></button>}
         <App/>
      </div>
      
      </React.Fragment>
    )
  }
}


 const App =() => {
  return(
    
  
   
 <div className="card" style={{marginTop:"100px"}}>
  <img src="https://randomuser.me/api/portraits/women/89.jpg" alt="John" style={{width:"100%"}}/>
  <p>University of Techology Sydney</p>
   <div style={{margin: "24px 0"}}>
     <a href="/"><i className="fa fa-dribbble"></i></a> 
    <a href="/"><i className="fa fa-twitter"></i></a>  
     <a href="/"><i className="fa fa-linkedin"></i></a>  
     <a href="/"><i className="fa fa-facebook"></i></a> 
  </div>
   <p><button>Contact</button></p>
 </div>
  

    
  )
 }







ReactDOM.render(<Container/>, document.getElementById('root'));

