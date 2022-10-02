import React from 'react';
import Query from './query';
import './style.css'


function Office(props) {

    return (
        <div>
          <div className='show_offices'>
            <p onClick={Query}>Показати відділення</p>
        </div>  
            <div className='offices_list'></div>
        </div>
    )
}

export default Office;
