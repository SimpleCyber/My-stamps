const startCameraBtn = document.getElementById('start-camera');
const capturePhotoBtn = document.getElementById('capture-photo');
const videoElement = document.getElementById('camera-stream');
const canvasElement = document.getElementById('snapshot');
const canvasContext = canvasElement.getContext('2d');

let stream;

// Function to start the camera on mobile with rear camera by default
startCameraBtn.addEventListener('click', async () => {
  try {
    // Request camera access with facingMode for mobile (rear camera by default)
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }, // Rear camera
      audio: false
    });
    videoElement.srcObject = stream;
  } catch (err) {
    console.error("Error accessing the mobile camera: ", err);
  }
});

// Capture a snapshot from the video stream
capturePhotoBtn.addEventListener('click', () => {
  if (stream) {
    canvasElement.width = videoElement.videoWidth;
    canvasElement.height = videoElement.videoHeight;
    canvasContext.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
  }
});



document.getElementById('selfie').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected: ", file.name);
    }
  });