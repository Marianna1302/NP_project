import React from 'react';
import './style.css';
import Check from './script';
import Remove from './script_remove';

function TTN(props) {
    return (
        <div >
            <p className='text'>Проверить статус посылки</p>
            <div id="container">
            <div className='ckeck'>
            <form>
                <p className='help'>Введите 14 цифр</p>
                <div id="data">
                    <input type="text" name="name" className="enter_data" placeholder="Введите ТТН посылки"/>
                    <button type="button" className="get_data" onClick={Check}>Проверить</button>
                </div>
                <div id="result">
                    <label>Данные о посылке</label>
                    <div className="show_result"></div>
                </div>
            </form>
             </div>
            <div className='previous'>
            <div>
                <button type="button" className="remove" onClick={Remove}>Очистить</button>
            </div>
            <div>
                <ul className="storage">

                </ul>
            </div>
            </div>
            </div>
        </div>
    )
}

export default TTN;
