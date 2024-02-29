async function covid() {
  let res = await fetch("https://data.covid19india.org/v4/min/data.min.json");
  let data = await res.json();

  const chennaiData = data.TN.districts.Chennai.total;
  console.log(chennaiData);
  document.body.innerHTML = `<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
<div class="card-header">
  Chennai Covid data
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Confirmed: ${chennaiData.confirmed}</li>
  <li class="list-group-item">Deceased: ${chennaiData.deceased}</li>
  <li class="list-group-item">Recovered: ${chennaiData.recovered}</li>
  <li class="list-group-item">Tested: ${chennaiData.tested}</li>
  <li class="list-group-item">Vaccine 1st Dose: ${chennaiData.vaccinated1}</li>
  <li class="list-group-item">Vaccine 2nd Dose: ${chennaiData.vaccinated2}</li>

  
</ul>
</div>`;
}
covid();
