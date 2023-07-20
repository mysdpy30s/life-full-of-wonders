// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
  // Select all the .scene elements
  const sceneElements = document.querySelectorAll(".container .overall .scene");

  // Add a class to each .scene element after a slight delay
  // This will trigger the opacity transition
  sceneElements.forEach((scene, index) => {
    setTimeout(() => {
      scene.classList.add("visible");
    }, 500 * index); // Adjust the delay (100ms in this case) if needed
  });
});


// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
  // Select all the .scene elements
  const sceneElements = document.querySelectorAll(".container .overall .scene");

  // Create the green leaf image element
  const greenLeaf = document.createElement("img");
  greenLeaf.src = "/images/leaf.png"; // Replace with the actual path to your green leaf image
  greenLeaf.classList.add("green-leaf");
  greenLeaf.style.width = "50px"; // Adjust the width as desired
  greenLeaf.style.height = "50px"; // Adjust the height as desired
  greenLeaf.style.position = "absolute";
  greenLeaf.style.zIndex = "999"; // Adjust the z-index to ensure it appears above other elements


  // Function to position the green leaf image at a random position on the page
  function positionGreenLeaf(event) {
    const x = event.clientX;
    const y = event.clientY;
    const maxX = window.innerWidth - greenLeaf.offsetWidth;
    const maxY = window.innerHeight - greenLeaf.offsetHeight;
    greenLeaf.style.left = `${Math.min(x, maxX)}px`;
    greenLeaf.style.top = `${Math.min(y, maxY)}px`;
    greenLeaf.style.opacity = 1;
    event.currentTarget.querySelector(".image").style.opacity = 1;
  }

  // Function to hide the green leaf image and show the image again
  function hideGreenLeaf(event) {
    greenLeaf.style.opacity = 0;
    event.currentTarget.querySelector(".image").style.opacity = 1;
  }

  // Add event listeners to each .scene element
  sceneElements.forEach((scene) => {
    scene.addEventListener("mouseenter", positionGreenLeaf);
    scene.addEventListener("mouseleave", hideGreenLeaf);
  });

  // Append the green leaf image element to the body
  document.body.appendChild(greenLeaf);
});