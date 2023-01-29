const form = document.querySelector("form")
const input = document.querySelector("input")
const main = document.querySelector("main")
const messages = document.querySelector(".messages")

form.addEventListener("submit", event => {
  event.preventDefault()
  const message = document.createElement("div")
  message.classList.add("message", "own")
  const time = new Date().toLocaleString('pt-BR', { hour: "2-digit", minute: "2-digit" })
  message.innerHTML = `
    <span class="message-datetime">Você - ${ time }</span>
    <p class="message-text">${ input.value }</p>
  `
  messages.appendChild(message)
  input.value = ""
  main.scrollTop = main.scrollHeight
})

const reset = document.querySelector(".reset")

reset.addEventListener("click", () => {
  location.reload()
})