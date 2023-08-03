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
            <button class="searchButton downloadButton" onclick="getAudio()">audio</button>
            <button class="searchButton downloadButton" onclick="getVideo()">video</button>
            <button class="searchButton downloadButton" onclick="getBoth()">download</button>
        </div>
      `;
      downloadBox.innerHTML = downOption;
      // Do something with the data
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function getAudio() {
  alert("Check your download folder!!!");
  fetch(`/options/mp3`);
}
function getVideo() {
  alert("Check your download folder!!!");
  fetch(`/options/mp4`);
}
function getBoth() {
  alert("Check your download folder!!!");
  fetch(`/options/both`);
}
