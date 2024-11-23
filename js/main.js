(() => {
  console.log('akwudakwfu');
  const divisor = document.querySelector("#divisor");
  const slider = document.querySelector("#slider");

  function moveDivisor() {
    console.log(slider.value);
    divisor.style.width = slider.value + "%";
  };

  slider.addEventListener("input", moveDivisor);

  const hotspots = document.querySelectorAll('.Hotspot');
  console.log(hotspots);

  function showInfo(e) {
    console.log(e.currentTarget.slot);
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo(e) {
    console.log(e);
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  hotspots.forEach(hotspot => {
    hotspot.addEventListener('mouseover', showInfo);
    hotspot.addEventListener('mouseout', hideInfo);
  });

  console.log("IIFE Fired");
})();

// Separate IIFE for canvas animation
(() => {
  const canvas = document.querySelector("#explode-view");
  const context = canvas.getContext("2d");

  canvas.width = 1920;
  canvas.height = 1080;

  const frameCount = 421; // How many frames do we have
  const images = []; // Array to hold all of our images

  const buds = {
    frame: 0
  };

  // Run a for loop to populate the image array
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = `images/earbud-animate${(i + 1).toString().padStart(4, '0')}.png`;
    images.push(img);
  }

  gsap.to(buds, {
    frame: 91,
    snap: "frame",
    scrollTrigger: {
      trigger: "#explode-view",
      pin: true,
      scrub: 2, 
      start: "top top",
      end: "bottom bottom"
    },
    onUpdate: render
  });

  // Ensure the image is loaded before rendering
  images[0].addEventListener("load", render);

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    console.log(images[buds.frame]);
    context.drawImage(images[buds.frame], 0, 0);
  }
})();
