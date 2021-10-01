
const videoElement = document.getElementsByClassName('input_video')[0];
videoElement.style.display = "none";
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');

function onResults(results) {
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
//   canvasCtx.drawImage(
//       results.image, 0, 0, canvasElement.width, canvasElement.height);
  if (results.multiFaceLandmarks) {
    paper.setup(canvasElement);
    for (const landmarks of results.multiFaceLandmarks) {
        //console.log(landmarks)
    //   drawConnectors(canvasCtx, landmarks, FACEMESH_TESSELATION,
    //                  {color: '#C0C0C070', lineWidth: 1});
    //   drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYE, {color: '#FF3030'});
    //   drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYEBROW, {color: '#FF3030'});
    //   drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYE, {color: '#30FF30'});
    //   drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYEBROW, {color: '#30FF30'});
    //   drawConnectors(canvasCtx, landmarks, FACEMESH_FACE_OVAL, {color: '#E0E0E0'});
    //   drawConnectors(canvasCtx, landmarks, FACEMESH_LIPS, {color: '#E0E0E0'});        
        var path = new paper.Path();
        path.strokeColor = 'black';
        path.add(new paper.Point(landmarks[362].x*1280,landmarks[362].y*720));
        path.add(new paper.Point(landmarks[398].x*1280,landmarks[398].y*720));
        path.add(new paper.Point(landmarks[386].x*1280,landmarks[386].y*720));
        path.add(new paper.Point(landmarks[388].x*1280,landmarks[388].y*720));
        path.add(new paper.Point(landmarks[263].x*1280,landmarks[263].y*720));
        path.add(new paper.Point(landmarks[390].x*1280,landmarks[390].y*720));
        path.add(new paper.Point(landmarks[374].x*1280,landmarks[374].y*720));
        path.add(new paper.Point(landmarks[381].x*1280,landmarks[381].y*720));
        path.add(new paper.Point(landmarks[362].x*1280,landmarks[362].y*720));
        path.add(new paper.Point(landmarks[0].x*1280,landmarks[0].y*720));
        //mouth
        path.add(new paper.Point(landmarks[39].x*1280,landmarks[39].y*720));
        path.add(new paper.Point(landmarks[185].x*1280,landmarks[185].y*720));
        path.add(new paper.Point(landmarks[61].x*1280,landmarks[61].y*720));
        path.add(new paper.Point(landmarks[91].x*1280,landmarks[91].y*720));
        path.add(new paper.Point(landmarks[17].x*1280,landmarks[17].y*720));
        path.add(new paper.Point(landmarks[405].x*1280,landmarks[405].y*720));
        path.add(new paper.Point(landmarks[291].x*1280,landmarks[291].y*720));
        path.add(new paper.Point(landmarks[269].x*1280,landmarks[269].y*720));
        path.add(new paper.Point(landmarks[291].x*1280,landmarks[291].y*720));
        path.add(new paper.Point(landmarks[13].x*1280,landmarks[13].y*720));
        path.add(new paper.Point(landmarks[61].x*1280,landmarks[61].y*720));
        //left eye
        path.add(new paper.Point(landmarks[121].x*1280,landmarks[121].y*720));
        path.add(new paper.Point(landmarks[114].x*1280,landmarks[114].y*720));
        path.add(new paper.Point(landmarks[121].x*1280,landmarks[121].y*720));
        path.add(new paper.Point(landmarks[120].x*1280,landmarks[120].y*720));
        path.add(new paper.Point(landmarks[229].x*1280,landmarks[229].y*720));

        path.add(new paper.Point(landmarks[226].x*1280,landmarks[226].y*720));
        path.add(new paper.Point(landmarks[116].x*1280,landmarks[116].y*720));
        path.add(new paper.Point(landmarks[137].x*1280,landmarks[137].y*720));
        path.add(new paper.Point(landmarks[177].x*1280,landmarks[177].y*720));
        path.add(new paper.Point(landmarks[138].x*1280,landmarks[138].y*720));
        path.add(new paper.Point(landmarks[170].x*1280,landmarks[170].y*720));
        //path.add(new paper.Point(landmarks[137].x*1280,landmarks[137].y*720));
        path.add(new paper.Point(landmarks[175].x*1280,landmarks[175].y*720));
        path.add(new paper.Point(landmarks[369].x*1280,landmarks[369].y*720));
        path.add(new paper.Point(landmarks[395].x*1280,landmarks[395].y*720));
        path.add(new paper.Point(landmarks[367].x*1280,landmarks[367].y*720));
        path.add(new paper.Point(landmarks[366].x*1280,landmarks[366].y*720));
        path.add(new paper.Point(landmarks[364].x*1280,landmarks[364].y*720));
        path.add(new paper.Point(landmarks[364].x*1280,landmarks[364].y*720));
        path.add(new paper.Point(landmarks[301].x*1280,landmarks[301].y*720));
        path.add(new paper.Point(landmarks[333].x*1280,landmarks[333].y*720));
        path.add(new paper.Point(landmarks[151].x*1280,landmarks[151].y*720));
        path.closed = false;
        path.smooth();
        //path 2 
        var circlePath = new paper.Path.Circle(new paper.Point(landmarks[159].x*1280,landmarks[159].y*720),15)
        circlePath.fillColor = 'black';
        var path2 = new paper.Path();
        path2.strokeColor = 'black';
        path2.add(new paper.Point(landmarks[159].x*1280-50,landmarks[159].y*720));
        path2.add(new paper.Point(landmarks[159].x*1280+50,landmarks[159].y*720));
        path2.closed=false
        //circlePath.visible = false;
        var start = new paper.Point(100, 100);
		// Move to start and draw a line from there
		path2.moveTo(start);
		// Note that the plus operator on Point objects does not work
		// in JavaScript. Instead, we need to call the add() function:
		path2.lineTo(start.add([ 200, -50 ]));
        var start = new paper.Point(130, 130);
        path.moveTo(start);
		// Note that the plus operator on Point objects does not work
		// in JavaScript. Instead, we need to call the add() function:
		path.lineTo(start.add([ 230, -50 ]));
		// Draw the view now:
        paper.view.draw();
    }
  }
  canvasCtx.restore();
}

// const drawNose = (x,y,rad,clr)=>{
//   canvasCtx.arc(parseInt(x), parseInt(y), rad, 0, Math.PI * 2);
//   canvasCtx.fillStyle = clr;
//   canvasCtx.fill();
// }

const drawLine = (x1,y1,x2,y2,path) =>{
    //console.log(x1,y1)
    var start = new paper.Point(x1, y1);
    path.moveTo(start);    // Move the pen to (30, 50)
    path.lineTo(start.add[x2,y2]);  // Draw a line to (150, 100)
}

const faceMesh = new FaceMesh({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
}});
faceMesh.setOptions({
  maxNumFaces: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
faceMesh.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await faceMesh.send({image: videoElement});
  },
  width: 1280,
  height: 720
});
camera.start();