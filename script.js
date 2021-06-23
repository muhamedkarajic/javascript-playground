let inputElement = document.getElementById("myInput");

inputElement.onchange = function (event) {
  var fileList = event.target.files;

  var arrayOfImages = new Array(fileList.length);

  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i];
    myFileReader(file, i, arrayOfImages);
  }
};

function myFileReader(file, index, arrayOfImages) {
  let reader = new FileReader();

  reader.onload = function () {
    arrayOfImages[index] = reader.result;
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
