const catchCountry = document.querySelector('.type-country'); 
const resultsContainer = document.createElement('ul');
document.body.appendChild(resultsContainer);
let allCountries = [];
fetch("https://restcountries.com/v2/all?fields=name,flag,capital,population,languages")
  .then(response => response.json())
  .then(data => {
    allCountries = data;
  })
  .catch(error => {
    console.error("Помилка при завантаженні країн:", error);
  });
catchCountry.addEventListener('input', () => {
  const searchText = catchCountry.value.toLowerCase()
  resultsContainer.innerHTML = '';
  if (searchText === '') return;
  const filtered = allCountries.filter(country =>
    country.name.toLowerCase().includes(searchText)
  );
  if (filtered.length === 0) {
    resultsContainer.innerHTML = '<li style="margin-left: 20px; color: red; font-size: 20px;">Країни не знайдено!</li>';
    return;
  }
  if (filtered.length > 10) {
    PNotify.notice({});
    return;
  }
  if (filtered.length === 1) {
    const country = filtered[0];
    const languages = country.languages.map(lang => lang.name).join('');
    resultsContainer.innerHTML = `
      <li class="countryCard" style="width:1322px; display: flex; margin-left: 20px; border: 1px solid skyblue; background-color: yellow;">
      <div style="width: 350px; gap: 60px; flex-direction: column; display: flex; ">
        <h2 style="width: 350px; font-size: 20px;">${country.name}</h2>
        <p style="width: 350px; font-size: 20px;">Столиця:${country.capital}</p>
        <p style="width: 350px; font-size: 20px;">Населення:${country.population.toLocaleString()}</p>
        <p style="width: 350px; font-size: 20px;">Мови:</strong> ${languages}</p>
      </div>
      <div style="margin-left: 375px;">
      <img src="${country.flag}" width="600px" height="260px">
      </div>
      </li>
    `;
  } else {
    resultsContainer.innerHTML = filtered.map(country =>
      `<li style="padding: 20px; ">${country.name}</li>`
    ).join('');
  }
});