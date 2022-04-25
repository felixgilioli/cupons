fetch("https://raw.githubusercontent.com/felixgilioli/cupons/main/cupons.json")
  .then(response => response.json())
  .then(json => console.log(json));

