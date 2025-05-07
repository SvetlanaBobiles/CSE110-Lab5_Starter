// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  let horn = document.getElementById('horn-select');
  let hornImg = document.querySelector('#expose img');
  let hornAudio = document.querySelector('audio');

  let slider = document.getElementById('volume');
  let icon = document.querySelector('#volume-controls img');

  let playSound = document.querySelector('button');


  //img and audio when horn is selected
  horn.addEventListener('change', function(){
    let selectedHorn = horn.value;
    
    if(selectedHorn == 'air-horn'){
      hornImg.src = 'assets/images/air-horn.svg';
      hornImg.alt  = 'picture of air horn';

      hornAudio.src = 'assets/audio/air-horn.mp3';
    }

    if(selectedHorn == 'car-horn'){
      hornImg.src = 'assets/images/car-horn.svg';
      hornImg.alt  = 'picture of car horn';

      hornAudio.src = 'assets/audio/car-horn.mp3';
    }

    if(selectedHorn == 'party-horn'){
      hornImg.src = 'assets/images/party-horn.svg';
      hornImg.alt  = 'picture of party horn';

      hornAudio.src = 'assets/audio/party-horn.mp3';
    }
  })

  //volume slider icon change
  slider.addEventListener('input', function(){
    let volume = slider.value;

    hornAudio.volume = volume/100;

    if(volume == 0){
      icon.src = 'assets/icons/volume-level-0.svg'
      icon.alt = 'Volume icon: Mute (volume level 0)'
    }
    else if (volume < 33){
      icon.src = 'assets/icons/volume-level-1.svg'
      icon.alt = 'Volume icon: level 1)'
    }
    else if(volume < 67){
      icon.src = 'assets/icons/volume-level-2.svg'
      icon.alt = 'Volume icon: level 2'
    }
    else{
      icon.src = 'assets/icons/volume-level-3.svg'
      icon.alt = 'Volume icon: level 3'
    }
  })

  //button to actually play the sound
  playSound.addEventListener('click', function(){
    hornAudio.play();
    
    if(horn.value == 'party-horn'){
      const jsConfetti = new JSConfetti();

      jsConfetti.addConfetti();
    }
    
  })

}