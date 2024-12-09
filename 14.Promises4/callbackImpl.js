/**
 * Home work:
 * Tasks : Don't use promise, only use callbacks.
 1> write a function to download data from url.
 2> write a function to save that download data in a file and return the filename.
 3> write a funtion to upload the file written in previous step to new-url.
 */

function download(url, cb) {
  console.log("start downloading content from ", url);

  /**
   * Download content from given url and passed the downloaded content to the given callback cb.
   */

  setTimeout(function exec() {
    console.log("completed downloading data in 5sec");
    const content = "abcdef"; // assume dummy donwload content.
    cb(content);
  }, 5000);
}

download("www.xyz.com", function processDownload(content) {
    console.log("download data is", content);
});

function upload(fileName) {
    let newUrl = "www.abc.com";
}
