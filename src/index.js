

document.getElementById("play").onclick = function () {
  import("./video.js").then(res => {
    res()
  })
}