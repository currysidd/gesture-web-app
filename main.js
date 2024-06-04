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
 img=document.getElementById("image")
    
    classifier.classify(img,gotResult)
}

function gotResult(error,results){
    if (error) {
        console.error(error);   
       } else {
           console.log(results);
           p1=results[0].label
           p2=results[1].label
           speak()
           document.getElementById("emotionResult1").innerHTML=p1
           if (p1=="thumbs up") {
               document.getElementById("emojiResult1").innerHTML="👍"
           }
           if (p1=="nice") {
               document.getElementById("emojiResult1").innerHTML="👌"
           }
           if (p1=="heart") {
               document.getElementById("emojiResult1").innerHTML="🫶"
           }
           if (p1=="thumbs down") {
               document.getElementById("emojiResult1").innerHTML="👎"
           }
           if (p1=="high 5") {
            document.getElementById("emojiResult1").innerHTML="🖐️"
        }
           
       }
}

console.log(ml5.version);
function modelLoaded() {
    console.log("model loaded");
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mYbBdeq6x/model.json", modelLoaded)
p1 = ""
function speak() {
    synth = window.speechSynthesis
    speakData1 = "The first prediction is " + p1
    utterThis = new SpeechSynthesisUtterance(speakData1)
    synth.speak(utterThis)
}