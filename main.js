function preload(){

}

function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide();
    console.log("ml5.version", ml5.version)
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/PdOqroiYf/model.json",modelLoaded);

}

function modelLoaded(){
console.log("model loaded");
}


function draw(){
    image(video,0,0,300,300);
    classifier.classify(video, gotResult);
}

function gotResult(error, results){
if(error){
    console.log(error);
}
else{
    console.log(results)
    document.getElementById("result_object").innerHTML = results[0].label;
    document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
}

}

