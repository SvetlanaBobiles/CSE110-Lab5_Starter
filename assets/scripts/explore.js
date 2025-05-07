// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let voice = document.getElementById('voice-select');
  let textArea = document.getElementById('text-to-speak');
  let talkButton = document.querySelector('button');
  let face = document.querySelector('img');

  const synth = window.speechSynthesis;
  let voiceList = []; 
  
  synth.addEventListener('voiceschanged', function(){

    voiceList = synth.getVoices();

    for(let i = 0; i < voiceList.length; i++){
      let option = document.createElement('option');
      option.textContent = `${voiceList[i].name} (${voiceList[i].lang})`;
      option.value = i;
      option.setAttribute('data-lang', voiceList[i].lang);
      option.setAttribute('data-name', voiceList[i].name);
      voice.appendChild(option);
    }
  })

  talkButton.addEventListener('click', function(){
    let selectedVoice = voice.value;
    
    let utterance = new SpeechSynthesisUtterance(textArea.value);
    utterance.voice = voiceList[selectedVoice];

    speechSynthesis.speak(utterance);

    utterance.onstart = () => {
      face.src = 'assets/images/smiling-open.png'
    }

    utterance.onend = () => {
      face.src = 'assets/images/smiling.png'
    }
  })

}