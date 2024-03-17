// document.onkeydown = function (e) {
//   switch (e.key) {
//     case "a":
//       console.log(e.key);
//       document.getElementById("a").play();
//       break;
//     default:
//       console.log("Такої клавіші немає!");
//   }
// };

function playAudio() {
  document.getElementById("a").play();
}

const aButton= document.getElementById("a_button");

aButton.addEventListener("click", playAudio);