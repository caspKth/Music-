let input = document.getElementById("music");
let audio = document.getElementById("player");

input.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
    audio.currentTime = 0;
    input.innerHTML = "Pause";
  } else {
    audio.pause();
    input.innerHTML = "Play";
  }
});

const musicList = [
  "https://archive.org/download/003.-maneskin-torna-a-casa/009.MANESKIN%20-%20I%20Wanna%20Be%20your%20slave%20.mp3",
  "https://lenadesign.org/wp-content/uploads/2022/03/Fur-Elise-by-Beethoven-Beethoven.mp3"
  
];

let currentIndex = 0;

function toggleMusic() {
  const checkbox = document.getElementById("music");
  const player = document.getElementById("player");
  const source = player.querySelector("source");

  if (checkbox.checked) {
    // Caixa foi aberta
    source.src = musicList[currentIndex];
    currentIndex = (currentIndex + 1) % musicList.length;
    player.load();
    player.play();
  } else {
    // Caixa foi fechada
    player.pause();
    player.currentTime = 0;
  }
}
 
