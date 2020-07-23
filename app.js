let requestURL = 'https://api.coinbase.com/v2/prices/USD/spot';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
    const data = request.response;
    populateData(data);
}

const list = document.querySelector('#data');

function populateData(jsonObj){
    const currencies = jsonObj['data'];
    for(let i = 0;i < currencies.length;i++){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${currencies[i].base}</td>
            <td>${currencies[i].currency}</td>
            <td>${currencies[i].amount}</td>
        `;
        list.appendChild(row);
    }
}