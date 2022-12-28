// for, while, do..while

function forDemo() {
    const start = 0;
    const end = 10

    for(let n = start; n < end; n++) {
        console.log('iteration '+ n)
    }
}

function whileDemo() {

    let isUploading = false

    while(isUploading) { 
        console.log('Uploading Files')
    }
}

function doWhileDemo() {
    const isLive = false
    do {
        console.log('Trying to Connect')
    } while(!isLive)
}
