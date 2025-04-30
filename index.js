function SpeakText() {
    let text = document.getElementById("textInput").value;
    if (!text) {
        alert("Enter your pattern");
        return;
    }
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}