Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
})

camera = document.getElementById("camera")
Webcam.attach("#camera")

function takeSnapshot() {
    Webcam.snap(function (image) {
        document.getElementById("result").innerHTML = '<img id="image" src=' + image + '>'
    })
}
function predictEmotion() {
    speak()
}
console.log(ml5.version);
function modelLoaded() {
    console.log("model loaded");
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mYbBdeq6x/.json", modelLoaded)
p1 = ""
function speak() {
    synth = window.speechSynthesis
    speakData1 = "The first prediction is " + p1
    utterThis = new SpeechSynthesisUtterance(speakData1)
    synth.speak(utterThis)
}