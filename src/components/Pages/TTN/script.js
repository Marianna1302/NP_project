
import axios from 'axios';

function Check () {
    Show_help();
    Save();
    Info();
    Add();
}

function Validation () {
    let res;
    let input_ = document.querySelector('.enter_data');
    let valid = RegExp('^[0-9]{14}');
    if (valid.exec(input_.value)) {
        res = true;
    } else {
        res = false;
    }
    return res;
}

function Show_help () {
    if (Validation() == false) {
        document.querySelector('.help').style.display = "block";   
    } else {
        document.querySelector('.help').style.display = "none";  
    }
}


function Save () {
    const input = document.querySelector('.enter_data');
    let itemsArray = []
    localStorage.setItem('items', JSON.stringify(itemsArray))
    const data = JSON.parse(localStorage.getItem('items'))
    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    data.forEach(item => {
        liMaker(item)
      })
}



const liMaker = (text, ul) => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li);
  }

function Add() {
    const input = document.querySelector('.enter_data');
    const ul = document.querySelector('.storage')
    if (Validation()) {
        liMaker(input.value, ul);
    }
       
    }     

function Info () {
    axios({
        method: 'post',
        url: 'https://api.novaposhta.ua/v2.0/json/',
        headers: {
            "X-API-KEY": '38be0da0a7d3ef28cd500e4d0e82c52f'
        },
        data: {
            "apiKey": "38be0da0a7d3ef28cd500e4d0e82c52f",
            "modelName": "TrackingDocument",
   "calledMethod": "getStatusDocuments",
   "methodProperties": {
"Documents" : [
{
"DocumentNumber": `${document.querySelector('.enter_data').value}`
}
]
   }
}
      })
        .then(function (response) {
            if (Validation()) {
       console.log(response.data);
       console.log(document.querySelector('.show_result'));
     document.querySelector('.show_result').innerHTML = `<span class="info">Отримано</span>: ${response.data.data[0].WarehouseRecipient} <br> <span class="info">Відправлено</span>: ${response.data.data[0].WarehouseSender} <br> <span class="info">Статус</span>: ${response.data.data[0].Status}`;
}})}


      

export default Check;