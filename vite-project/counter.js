export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
  }
  element.addEventListener('click', () => console.log("hi men"))
  setCounter(0)
} 
