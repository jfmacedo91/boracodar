const currency1 = document.getElementById('currency1');
const currency2 = document.getElementById('currency2');
const ctx = document.getElementById('myChart');

let selectedCurrency1 = currency1.value;
currency1.addEventListener('change', () => {
  selectedCurrency1 = currency1.value;
  getCurrencyInfo()
})

let selectedCurrency2 = currency2.value;
currency2.addEventListener('change', () => {
  selectedCurrency2 = currency2.value;
  getCurrencyInfo()
})

function populateSelects() {
  let currencies1 = [];
  let currencies2 = [];
  fetch('https://economia.awesomeapi.com.br/json/available')
  .then(response => response.json())
  .then(data => {
    for(const currency in data) {
      const [firstCurrency, secondCurrency] = currency.split('-');
      if(currencies1.includes(firstCurrency)) {
        continue;
      } else {
        currencies1.push(firstCurrency);
      }

      if(currencies2.includes(secondCurrency)) {
        continue;
      } else {
        currencies2.push(secondCurrency);
      }
    }

    currencies1.sort()
    currencies1.map(currency => {
      const opt = document.createElement('option')
      opt.setAttribute('value', currency)
      opt.innerHTML = currency
      currency1.appendChild(opt);
    })

    currencies2.sort()
    currencies2.map(currency => {
      const opt = document.createElement('option')
      opt.setAttribute('value', currency)
      opt.innerHTML = currency
      currency2.appendChild(opt);
    })
  });
};

populateSelects();

function getCurrencyInfo() {
  fetch(`https://economia.awesomeapi.com.br/${selectedCurrency1}-${selectedCurrency2}/15`)
    .then(response => response.json())
    .then(data => {
      for(const info in data) {
        console.log(data[info].timestamp);
      }
    });
}

getCurrencyInfo()