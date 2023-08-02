const { getVideoInfo, download } = require("./ytdl.js");
const express = require("express");
app = express();

var videoId = "";

app.use(express.static("./public"));

// return thumbnail to client and save videoId
app.get("/videoInfo/query", (req, res) => {
  const { url } = req.query;

  ytThumbnail = getVideoInfo(url);
  videoId = ytThumbnail.videoId;

  res.status(200).json({ success: true, data: ytThumbnail });
});

// download video\audio based on user option
app.get("/options/:opt", (req, res) => {
  const opt = req.params.opt;

  if (opt == "mp3") download(videoId, "audioonly", "highestaudio", "mp3");
  if (opt == "mp4") download(videoId, "videoonly", "highestvideo", "mp4");
  if (opt == "both") download(videoId, "videoandaudio", "highest", "mp4");

  res.status(200).send("Received the request...");
});

// set all route except for written as 404
app.all("*", (req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
