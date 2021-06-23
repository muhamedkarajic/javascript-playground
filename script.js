let inputElement = document.getElementById("myInput");

inputElement.onchange = function (event) {
  var fileList = event.target.files;

  var arrayOfImages = new Array(fileList.length);

  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i];
    fileReaderFactory(file, arrayOfImages[i]);
  }
};

function fileReaderFactory(file, arrayOfImageRef) {
  let reader = new FileReader();

  reader.onload = function () {
    arrayOfImageRef = reader.result;
    checkIfAllImagesReady(arrayOfImages)
      ? console.log(arrayOfImages)
      : console.log("Images are still not ready...");
  };

  reader.onerror = function () {
    console.log("Error:", reader.error);
  };

  reader.readAsDataURL(file);
}

function checkIfAllImagesReady(arrayOfImages) {
  for (const item of arrayOfImages) {
    if (!item) return false;
  }

  return true;
}
