var SpeechRecognition = window.websitespeechRecognition

var Recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML= "";
    Recognition.start();
}

Recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(Content);
    
    document.getElementById("textbox").innerHTML = Content;
}