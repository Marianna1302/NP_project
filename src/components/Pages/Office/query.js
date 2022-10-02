
import axios from 'axios';

function Query () {
axios({
    method: 'post',
    url: 'https://api.novaposhta.ua/v2.0/json/',
    headers: {
        "X-API-KEY": '38be0da0a7d3ef28cd500e4d0e82c52f'
    },
    data: {
        "apiKey": "38be0da0a7d3ef28cd500e4d0e82c52f",
        "modelName": "Address",
        "calledMethod": "getWarehouses",
        "methodProperties": {
            "TypeOfWarehouseRef":"9a68df70-0267-42a8-bb5c-37f427e36ee4"
        }
}
  })
    .then(function (response) {
        response.data.data.forEach(element => console.log(element.Description));
        response.data.data.forEach(element => document.querySelector('.offices_list').insertAdjacentHTML('afterbegin', `<p>${element.Description}</p>`));
   })
}
export default Query;
