const blocks = [
  {
    "image": "./assets/bloco1.jpg",
    "name": "O Python do vovô não sobe mais",
    "description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    "location": "São Paulo - SP"
  },
  {
    "image": "./assets/bloco2.jpg",
    "name": "Todo mundo null",
    "description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    "location": "Florianópolis - SC"
  },
  {
    "image": "./assets/bloco3.jpg",
    "name": "Hoje dou exception",
    "description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    "location": "Curitiba - PR"
  },
  {
    "image": "./assets/bloco4.jpg",
    "name": "Manda Node",
    "description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    "location": "Salvador - BA"
  },
  {
    "image": "./assets/bloco5.jpg",
    "name": "Só no back-end",
    "description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    "location": "São Paulo - SP"
  },
  {
    "image": "./assets/bloco6.jpg",
    "name": "Esse anel não é de Ruby",
    "description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    "location": "São Paulo - SP"
  },
  {
    "image": "./assets/bloco7.jpg",
    "name": "Pimenta no C# dos outros é refresco",
    "description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    "location": "Rio de Janeiro - RJ"
  },
  {
    "image": "./assets/bloco8.jpg",
    "name": "EnCACHE aqui",
    "description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    "location": "Porto Alegre - RS"
  },
  {
    "image": "./assets/bloco9.jpg",
    "name": "Não valho nada mas JAVA li",
    "description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    "location": "São Paulo - SP"
  }
];

const container = document.querySelector(".blocks-grid");

blocks.forEach(block => {
  const item = document.createElement("div");
  item.classList.add("block");
  item.innerHTML = `
    <img src="${ block.image }">
    <h3>${ block.name }</h3>
    <p>${ block.description }</p>
    <div class="location">
      <span class="material-symbols-rounded">location_on</span>
      ${ block.location }
    </div>
  `

  container.appendChild(item)
})