var featureExtractor;
var classifier;
var elt;
var video;

function setup() {
  // createCanvas(400, 400);
  noCanvas();
  
  video = createCapture(VIDEO);
  
  featureExtractor = ml5.featureExtractor('MobileNet', modelReady);
  elt = createP('Loading...');
  
  classifier = featureExtractor.classification(video);
  
  let btn1 = createButton('phone');
  btn1.mousePressed(function() {
    console.log('adding phone example');
    classifier.addImage('phone');
  });
  
  let btn2 = createButton('wallet');
  btn2.mousePressed(function(){
    console.log('adding wallet example');
    classifier.addImage('wallet');
  });

  let trainBtn = createButton('TRAIN');
  trainBtn.mousePressed(function () {
    console.log('Beginning training...')
    classifier.train(whileTraining);
  });
                    
}


function whileTraining(loss) {
console.log(loss);
}

function modelReady() {
  // classifier.predict(gotResult);
}

function gotResult(err, results) {
  // console.log(results);
  
  elt.html(results[0].label);
  
  classifier.predict(gotResult);
}

function draw() {
  // background(0);
  // image(img, 0, 0);

}