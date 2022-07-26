// $(".option").on("click", function () {
//   $(".option").removeClass("active");
//   $(this).addClass("active");
//   var type = $(this).data("option");
//   setTimeout(function () {
//     if (type === "day") {
//       $(".time").attr("class", "time day");
//     } else if (type === "night") {
//       $(".time").attr("class", "time night");
//     } else if (type === "dusk") {
//       $(".time").attr("class", "time dusk");
//     } else if (type === "sunset") {
//       $(".time").attr("class", "time sunset");
//     }
//   }, 500);
// });

let options = document.querySelectorAll('.option')
let lastOptions = document.querySelectorAll('.option:last-child')

options.forEach(option => {
  handleOption(option)
})

function handleOption(opt){
  opt.addEventListener('click', (e) => {

    document.querySelector('.option').classList.remove('active')

    if(e.target.className === "option"){
      const active = document.querySelector('.active')
      setRemoveActive(active, e)
    }

    e.target.classList.remove('active')

    favoriteTime(e)
  })
}

function setRemoveActive(active, e){
  if(active){
    active.classList.remove('active')
  }else if(e.target.previousElementSibling){
    e.target.previousElementSibling.classList.remove('active')
  }else if(e.target.nextElementSibling){
    e.target.nextElementSibling.classList.remove('active')
  }else if(lastOptions){
    lastOptions.forEach(last => {
      last.classList.remove('active')
    })
  }
}

function favoriteTime(e){
  const type = e.target.dataset.option
  let time = document.querySelector('.time') 

  setTimeout(() => {
    switch(type){
      case "day":
      e.target.classList.add('active')
      time.setAttribute('class', 'time day')
      break;
      case "sunset":
      e.target.classList.add('active')
      time.setAttribute('class', 'time sunset')
      break;
      case "night":
      e.target.classList.add('active')
      time.setAttribute('class', 'time night')
      break;
      case "dusk":
      e.target.classList.add('active')
      time.setAttribute('class', 'time dusk')
      break;
    }
  }, 500)
}


