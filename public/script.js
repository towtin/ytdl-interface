function searchVideo() {
  console.log("it working");
  const videoUrl = document.getElementById("userInput").value;
  fetch(`/videoInfo/query?url=${videoUrl}`)
    .then((response) => response.json())
    .then((data) => {
      // Process the returned JSON data
      const ytThumbnail = data.data.ytThumbnail;
      let downloadBox = document.getElementsByClassName("downloadBox")[0];
      let downOption = `
        <img class="thumbnailImage" src="${ytThumbnail}" alt="example">
        <div class="buttonInfo">
            <button class="searchButton downloadButton" onclick="postAudio()">audio</button>
            <button class="searchButton downloadButton" onclick="postVideo()">video</button>
            <button class="searchButton downloadButton" onclick="postBoth()">both</button>
        </div>
      `;
      downloadBox.innerHTML = downOption;
      // Do something with the data
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function postAudio() {
  fetch(`/options/mp3`);
}
function postVideo() {
  fetch(`/options/mp4`);
}
function postBoth() {
  fetch(`/options/both`);
}
