  const fondos = [
    "url('assets/img/Armeniando01_bg.jpg')",
    "url('assets/img/Armeniando02_bg.jpg')",
    "url('assets/img/Armeniando03_bg.jpg')",
    "url('assets/img/Armeniando04_bg.jpg')",
    "url('assets/img/Armeniando05_bg.jpg')",
    "url('assets/img/Armeniando06_bg.jpg')"
  ];

  const randomIndex = Math.floor(Math.random() * fondos.length);
  const div = document.getElementById("intro");
  div.style.backgroundImage = fondos[randomIndex];
