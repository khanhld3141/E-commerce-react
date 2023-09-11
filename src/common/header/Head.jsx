import React from 'react';

const Head=()=>{
    return (
        <>
            <section className='head'>
                <div className="container d_flex">
                    <div className="left row">
                        <i className="fa fa-phone"></i>
                        <label htmlFor="">+84 903 5361 44</label>
                        <i className="fa fa-envelope"></i>
                        <label htmlFor="">example@gmail.com</label>
                    </div>
                    <div className="right row RText">
                        <label htmlFor="">Theme LDK's</label>
                        <label htmlFor="">Need helps</label>
                        <label htmlFor="">EN</label>
                        <label htmlFor="">USA</label>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Head;