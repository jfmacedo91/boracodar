const buttons = document.querySelectorAll("button")
const calculation = document.querySelector(".calculation")
const result = document.querySelector(".result")

buttons.forEach(button => {
  button.addEventListener("click", target => {
    if(target.currentTarget.value === "=") {
      result.innerHTML = eval(calculation.innerHTML)
      calculation.innerHTML = 0
    } else if(target.currentTarget.value === "CE") {
      calculation.innerHTML = 0
      result.innerHTML = 0
    } else if(target.currentTarget.value === "+-") {
      calculation.innerHTML = calculation.innerHTML * -1
    } else if(target.currentTarget.value === "." && calculation.innerHTML == 0) {
      calculation.innerHTML = "0."
    } else if(target.currentTarget.value === "C") {
      if(calculation.innerHTML.length === 1) {
        calculation.innerHTML = 0
      } else {
        calculation.innerHTML = calculation.innerHTML.substring(0, calculation.innerHTML.length - 1)
      }
    } else {
      if(calculation.innerHTML === "0") {
        calculation.innerHTML = target.currentTarget.value
      } else {
        calculation.innerHTML += target.currentTarget.value
      }
    }
  })

  button.addEventListener("mousedown", () => {
    button.style.boxShadow = `
      inset 0px 11px 7px rgba(0, 0, 0, 0.01),
      inset 0px 7px 7px rgba(0, 0, 0, 0.04),
      inset 0px 4px 6px rgba(0, 0, 0, 0.1),
      inset 0px 2px 4px rgba(0, 0, 0, 0.26),
      inset 0px 0px 2px rgba(0, 0, 0, 0.29),
      0px 2px 3px rgba(255, 255, 255, 0.06)
    `
  })

  button.addEventListener("mouseup", () => {
    button.style.boxShadow = `
      0px 11px 7px rgba(0, 0, 0, 0.01),
      0px 7px 7px rgba(0, 0, 0, 0.04),
      0px 4px 6px rgba(0, 0, 0, 0.1),
      0px 2px 4px rgba(0, 0, 0, 0.26),
      0px 0px 2px rgba(0, 0, 0, 0.29),
      inset 0px 2px 3px rgba(255, 255, 255, 0.06)
    `
  })
})