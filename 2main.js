let input;
let img;

function setup() {
  input = createFileInput(handleFile);
  input.position(700,0);
  noCanvas();
}

function draw() {
  background(255);
  if (img) {
    image(img, 0, 0, width, height);
  }
}

function handleFile(file) {
  print(file);
  if (file.type === 'video') {    
    localStorage.setItem('video',file.data);
    setTimeout(function () {
      window.location='2index.html';
    },5000);   
  } else {
    img = null;
  }
}
