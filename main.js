Webcam.set({
    width:650,
    height:600,
    image_format : 'png',
    png_quality:500
});
 camera = document.getElementById("camera");
Webcam.attach( '#camera' );

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier(''),modelLoaded();
function modelLoaded() {
    console.log('MODEL LOADED!!!!!!');
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "THE FIRST PREDICTION ISSSSSSSSSS" + prediction_1;
    speak_data_2 = "THE SECOND PREDICTION ISSSSSSSSSS" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}