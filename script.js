let inputElement = document.getElementById("myInput");

inputElement.onchange = function (event) {
  var fileList = event.target.files;

  var arrayOfImages = new Array(fileList.length);

  let counter = 0;
  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i];
    fileReaderFactory(file).then((result) => {
      arrayOfImages[i] = result;
      if (++counter == fileList.length)
        console.log("All images processed:", arrayOfImages);
      else
        console.log("Images are being processed. One image has been finished.");
    });
  }
};

function fileReaderFactory(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = function (e) {
      resolve(reader.result);
    };

    reader.onerror = function () {
      reject(reader.error);
    };

    reader.readAsDataURL(file);
  });
}
