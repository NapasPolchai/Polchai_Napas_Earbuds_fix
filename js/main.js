(() => {

  console.log('akwudakwfu');
  const divisor = document.querySelector("#divisor");
  const slider = document.querySelector("#slider");
  
  function moveDivisor() {
    console.log(slider.value);
    divisor.style.width = slider.value + "%";
  };

  slider.addEventListener("input", moveDivisor);
  console.log("IIFE Fired");
  
  const hotspots = document.querySelectorAll('.Hotspot');
  console.log(hotspots)

  function showInfo(e) {
    console.log(e.currentTarget.slot);
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
    gsap.to(selected, 1, {autoAlpha: 1});
  }

  function hideInfo(e) {
    console.log(e);
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
    gsap.to(selected, 1, {autoAlpha: 0});

    let name = "Napas";

    console.log('My name is')
  }


  hotspots.forEach(hotspot => {
    hotspot.addEventListener('mouseover', showInfo);
    hotspot.addEventListener('mouseout', hideInfo);
  });





  console.log("IIFE Fired");
  

  const canvas = document.querySelector("#explode-view");
  // const context = canvas.getContext("2d");

canvas.width = 1920;
canvas.height = 1080;

const frameCount = 91; //how many frames do we have

const images = []; //array to hold all of our images

//create an object called buds to hold the current frame
const buds = {
  frame: 0,
};

//run a for loop to populate image array
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = `earbud-animate${(i + 1).toString().padStart(4, "0")}.png`;
  images.push(img);
}

gsap.to(buds, {
  frame: 90,
  snap: "frame",
  scrollTrigger: {
    trigger: "#explode-view",
    pin: true,
    scrub: 1,
    markers: false,
    start: "top top",
  },
  onUpdate: render,
});





    function render() {
      const image = images[buds.frame];
  
      // Clear the canvas before rendering
      context.clearRect(0, 0, canvas.width, canvas.height);
  
      // Ensure the image is loaded
      if (!image.complete) return;
  
      // Calculate the aspect ratios
      const imageAspectRatio = image.width / image.height;
      const canvasAspectRatio = canvas.width / canvas.height;
  
      let drawWidth, drawHeight, offsetX, offsetY;
  
      // Fit the image inside the canvas while maintaining aspect ratio
      if (imageAspectRatio > canvasAspectRatio) {
          // Image is wider than canvas
          drawWidth = canvas.width;
          drawHeight = canvas.width / imageAspectRatio;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2; // Center vertically
      } else {
          // Image is taller than canvas
          drawHeight = canvas.height;
          drawWidth = canvas.height * imageAspectRatio;
          offsetX = (canvas.width - drawWidth) / 2; // Center horizontally
          offsetY = 0;
      }

      // Draw the image centered on the canvas
      context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
  }

    images[0].addEventListener("load", render);



  })();