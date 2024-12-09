function download(url, cb) {
    console.log("started downloading from url", url);
    setTimeout(function exec() {
        console.log("completed downloading after 5sec");
        const content = "abcdef";
        cb(content);
        cb(content);
    }, 5000);
}

download("www.xyz.com", function processDownload(data) {
    console.log("download data is ", data);
})

/**
 * Inversion Of control : 
 -> Giving control of your callback to other function.
 -> It may call twice or may not call even once.
 -> This is the problem of inversion of control.
 */