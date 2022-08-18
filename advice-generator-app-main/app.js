async function fetchData() {
  const response = await fetch('https://api.adviceslip.com/advice');
  const json = await response.json();
  console.log(json.slip.advice);
}

fetchData();
