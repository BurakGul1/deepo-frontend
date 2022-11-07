import React from 'react';

const Head = () => {
    return (
        <>
            <section className='head'>
                <div className='container d_flex'>
                    <div className='left row'>
                        <i className='fa fa-phone'></i>
                        <label>--------------</label>
                        <i className='fa fa-envelope'></i>
                        <label>example@gmail.com</label>
                    </div>
                    <div className="right row RTex">
                        <label>Tema SSS</label>
                        <label>Yardım</label>
                        <span>🏳️</span>
                        <label>TUR</label>
                        <span>🏳️</span>
                        <label>EN</label>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Head