const e=document.querySelector(".type-country"),t=document.createElement("ul");document.body.appendChild(t);let l=[];fetch("https://restcountries.com/v2/all?fields=name,flag,capital,population,languages").then(e=>e.json()).then(e=>{l=e}).catch(e=>{console.error("Помилка при завантаженні країн:",e)}),e.addEventListener("input",()=>{let i=e.value.toLowerCase();if(t.innerHTML="",""===i)return;let n=l.filter(e=>e.name.toLowerCase().includes(i));if(0===n.length){t.innerHTML='<li style="margin-left: 20px; color: red; font-size: 20px;">Країни не знайдено!</li>';return}if(n.length>10)return void PNotify.notice({});if(1===n.length){let e=n[0],l=e.languages.map(e=>e.name).join("");t.innerHTML=`
      <li class="countryCard" style="width:1322px; display: flex; margin-left: 20px; border: 1px solid skyblue; background-color: yellow;">
      <div style="width: 350px; gap: 60px; flex-direction: column; display: flex; ">
        <h2 style="width: 350px; font-size: 20px;">${e.name}</h2>
        <p style="width: 350px; font-size: 20px;">\u{421}\u{442}\u{43E}\u{43B}\u{438}\u{446}\u{44F}:${e.capital}</p>
        <p style="width: 350px; font-size: 20px;">\u{41D}\u{430}\u{441}\u{435}\u{43B}\u{435}\u{43D}\u{43D}\u{44F}:${e.population.toLocaleString()}</p>
        <p style="width: 350px; font-size: 20px;">\u{41C}\u{43E}\u{432}\u{438}:</strong> ${l}</p>
      </div>
      <div style="margin-left: 375px;">
      <img src="${e.flag}" width="600px" height="260px">
      </div>
      </li>
    `}else t.innerHTML=n.map(e=>`<li style="padding: 20px; ">${e.name}</li>`).join("")});
//# sourceMappingURL=goit-js-hw---12-countries.7ac97520.js.map
