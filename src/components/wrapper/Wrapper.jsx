import React from 'react'
import './Wrapper.css'
const Wrapper = () =>{
    const data = [
        {
          cover: <i className="fas fa-truck"></i>,
          title: "Worldwide Delivery",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i className="fas fa-id-card"></i>,
          title: "Safe Payment",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i className="fas fa-shield-alt"></i>,
          title: "Shop With Confidence ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i className='fas fa-headset'></i>,
          title: "24/7 Support ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
      ]
    return (
        <>
            <section className='wrapper background'>
                <div className="container gird2">
                    {
                        data.map((value,index)=>(
                            <div className='product' key={index}>
                                <div className="img icon-circle">
                                   {value.cover}
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.decs}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}
export default Wrapper