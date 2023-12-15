import React, { useState } from 'react'
import './Home.css'
import I18n from './../utils/I18n';

function Home() {
    const usersCount = 20;

    return (
     <>       
        <h1 className='main-heading'>Internationalization</h1>

        <div className='I18n-container'>

            <h1>{I18n("welcomeMessage")}</h1>

            <p>{I18n("normalMessage")}</p>

            <h3>{I18n("greetingMessage")}</h3>

            <h5>{I18n("endMessage")}</h5>

            <select 
                defalultValue={localStorage.getItem("lang")}
                className='dropdown'
                onChange={(e) => {
                localStorage.setItem("lang",e.target.value);
                window.location.reload();
                }}>
                <option>select language</option>
                <option value="mr">Marathi</option>
                <option value="hi">Hindi</option>
                <option value="en">English</option>

            </select>

             <p>{I18n("usersStartsMessage", "<studentCount>", usersCount)}</p>
        </div>
        </>
    )
}

export default Home