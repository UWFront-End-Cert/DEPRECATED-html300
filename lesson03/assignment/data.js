  $(function() {
  let dataHTML = data.map(function(i) {
    // html code
    let data = `<section class="left">
      <img src="img/unsplash-headshot.jpg" alt="steve-Smith">
      <h1 class = "data__name">${i.name}</h1>
      <p class ="data__jobTitle">${i.jobTitle}</p>
    </section>
    <section class="right">
      <p class="data__company"><strong>${i.company}</strong></p>
      <p class="data__experience"><strong>${i.experience}</strong></p>
      <p class="data__school"><strong>${i.school}</strong></p>
      <p class="data__major"><strong>${i.major}</strong></p>
      <p class="data__email"><strong>${i.email}</strong></p>
      <i class="fab fa-linkedin fa-2x"></i>
      <p class="data_LinkedInUrl">${i.LinkedInUrl}</p>
    </section>`;
  });
  $(".data").append(dataHTML);
});
