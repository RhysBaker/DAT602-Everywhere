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
  
  let btn1 = createButton('rhys');
  btn1.mousePressed(function() {
    console.log('adding rhys example');
    classifier.addImage('rhys');
  });
  
  let btn2 = createButton('black');
  btn2.mousePressed(function(){
    console.log('adding black example');
    classifier.addImage('black');
  });

  let trainBtn = createButton('TRAIN');
  trainBtn.mousePressed(function () {
    console.log('Beginning training...')
    classifier.train(whileTraining);
  });                
}


function whileTraining(loss) {
  if (loss) {
    console.log(loss);
  } else {
    //finish training
    classifier.classify(gotResult);
  }
}

function modelReady() {
  // classifier.predict(gotResult);
}

function gotResult(err, results) {
  // console.log(results);
  
  elt.html(results[0].label + " " + nf(results[0].confidence, 0, 2));  
  classifier.classify(gotResult);
}

function draw() {
  // background(0);
  // image(img, 0, 0);

}