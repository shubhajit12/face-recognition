Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML="<img id='image_output' src="+data_uri+">";
    });
}

console.log("ml5 verision: "+ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/DOog06fRC/model.json",modellodded);
function modellodded(){
    console.log("modellodded");
}
function check(){
    store_image=document.getElementById("image_output");
    classifier.classify(store_image,gotresult);
}
function gotresult(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
    }