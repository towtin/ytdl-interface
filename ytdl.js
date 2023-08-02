const ytdl = require("ytdl-core");
const fs = require("fs");

const getVideoInfo = (videoUrl) => {
  videoId = ytdl.getVideoID(videoUrl);
  ytThumbnail = {
    ytThumbnail: "https://img.youtube.com/vi/" + videoId + "/sddefault.jpg",
    videoId: videoId,
  };
  return ytThumbnail;
};

const download = (videoId, filter, quality, fileFormat) => {
  // Generate Output File Path
  const randomNumber = Math.floor(Math.random() * 10);
  const outputFilePath = `${
    process.env.HOME || process.env.USERPROFILE
  }/Downloads/${randomNumber}towtin-${videoId}.${fileFormat}`;

  const options = {
    highWaterMark: 5 * 1024 * 1024,
    quality: quality,
    filter: filter,
  };

  const videoStream = ytdl(videoId, options);
  const fileStream = fs.createWriteStream(outputFilePath);
  videoStream.pipe(fileStream);

  videoStream.on("end", () => {
    console.log("Download complete!");
  });

  videoStream.on("error", (error) => {
    console.error("Error:", error);
  });
};

module.exports = { getVideoInfo, download };
