function Sliders ({anySlider}) {
    return (

        <div key={id} className="back">
              <button className="change" onClick={previous/* Haircut */}>
              <img className="icon" src="https://img.icons8.com/fluency/512/less-than.png" width="15px" alt="icons"/>
              </button> 
        <div>
           <img className="image" src={anySlider.image} width="320px" alt="photo"/>  
        </div>

          <button className="change" onClick={next/* Haircut */}>
              <img className="icon" src="https://img.icons8.com/fluency/512/more-than.png" width="15px" alt="icons"/>
          </button>
        <div>
            <h2>{ name }</h2> 
        </div> 
        </div>              
       
        
    )
}


export default Sliders;