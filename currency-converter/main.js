const currencyValue1 = document.querySelector('#currencyValue1');
const currencyValue2 = document.querySelector('#currencyValue2');
const currency1 = document.querySelector('#currency1');
const currency2 = document.querySelector('#currency2');
const convertionValue = document.querySelector('#convertionValue');
const ctx = document.querySelector('#myChart').getContext('2d');

currencyValue1.addEventListener('change', () => {
  currencyValue2.value = (currencyValue1.value * convertionValue.value).toFixed(2);
});

currencyValue2.addEventListener('change', () => {
  currencyValue1.value = (currencyValue2.value / convertionValue.value).toFixed(2);
});

currency1.addEventListener('change', async () => {
  await getData()
  currencyValue1.value = (currencyValue2.value / convertionValue.value).toFixed(2);
});

currency2.addEventListener('change', async () => {
  await getData()
  currencyValue2.value = (currencyValue1.value * convertionValue.value).toFixed(2);
});

let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, '#7C3AED80');
gradient.addColorStop(1, '#7C3AED00');

let myChart = new Chart(ctx, {});

async function getData() {
  const response = await fetch(`https://economia.awesomeapi.com.br/json/daily/${currency1.value}-${currency2.value}/30`);
  const data = await response.json();
  const labels = data.map(item => new Date(item.timestamp * 1000).toLocaleDateString('pt-BR'));
  labels.reverse();
  const values = data.map(item => item.bid);
  convertionValue.value = values[0];
  values.reverse();


  const chartData = {
    labels,
    datasets: [{
      data: values,
      label: 'Taxa de câmbio',
      borderWidth: 2,
      borderColor: '#7C3AED',
      pointBorderColor: 'transparent',
      pointBackgroundColor: '#7C3AED',
      fill: true,
      backgroundColor: gradient
    }]
  };

  const config = {
    type: 'line',
    data: chartData,
    options: {
      responsive: true,
      scales: {
        x: {
          grid: {
            color: 'transparent'
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  };

  myChart.destroy();
  myChart = new Chart(ctx, config);
};

getData();