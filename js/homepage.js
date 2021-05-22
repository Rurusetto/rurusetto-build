let progressText = document.getElementById('progresstext');

function formatDate ( date ) {
    let now = new Date();
    const hourLocale = ( time ) => {
        return time.toLocaleTimeString( undefined, { hour: 'numeric', minute: 'numeric' } )
    };

    const day = 1000 * 60 * 60 * 24;
    var nowAtMorning = Date.UTC( now.getFullYear(), now.getMonth(), now.getDate() );
    var dateAtMorning = Date.UTC( date.getFullYear(), date.getMonth(), date.getDate() );
    var daysDifference = Math.floor( ( nowAtMorning - dateAtMorning ) / day );

    if ( daysDifference == 0 ) {
        return `today at ${hourLocale(date)}`;
    }
    else if ( daysDifference > 0 ) {
        if ( daysDifference == 1 ) {
            return `yesterday at ${hourLocale(date)}`;
        }
        if ( daysDifference < 14 ) {
            return `${daysDifference} days ago`;
        }
        return `at ${date.toLocaleDateString()}`;
    }
    else {
        daysDifference *= -1;
        if ( daysDifference == 1 ) {
            return `tomorrow at ${hourLocale(date)}`;
        }
        if ( daysDifference < 14 ) {
            return `in ${daysDifference} days`;
        }
        return `at ${date.toLocaleDateString()}`;
    }
}

// Touhosu
async function callTouhosu(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let Data = await response.json();
    // console.log(Data);
    if (response) {
        console.log("touhosu Complete")
        let assets = Data['assets'][0]
        let updateDate = new Date( Date.parse(assets.updated_at) )
        document.getElementById("touhosu-release-date").innerText = "Latest release : " + formatDate(updateDate) ;
    }
}



// mvis
async function callMvis(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let Data = await response.json();
    // console.log(Data);
    if (response) {
        console.log("Mvis Complete")
        let assets = Data['assets'][0]
        let updateDate = new Date( Date.parse(assets.updated_at) )
        document.getElementById("mvis-release-date").innerText = "Latest release : " + formatDate(updateDate) ;
    }

}

// Bosu
async function callBosu(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let Data = await response.json();
    // console.log(Data);
    if (response) {
        console.log("Bosu Complete")
        let assets = Data['assets'][0]
        let updateDate = new Date( Date.parse(assets.updated_at) )
        document.getElementById("bosu-release-date").innerText = "Latest release : " + formatDate(updateDate) ;
    }
}

// Sentakki
async function callSentakki(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let Data = await response.json();
    // console.log(Data);
    if (response) {
        console.log("sentakki Complete")
        let assets = Data['assets'][0]
        let updateDate = new Date( Date.parse(assets.updated_at) )
        document.getElementById("sentakki-release-date").innerText = "Latest release : " + formatDate(updateDate) ;
    }
}

// Swing
async function callSwing(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let Data = await response.json();
    // console.log(Data);
    if (response) {
        console.log("swing Complete")
        let assets = Data['assets'][0]
        let updateDate = new Date( Date.parse(assets.updated_at) )
        document.getElementById("swing-release-date").innerText = "Latest release : " + formatDate(updateDate) ;
    }
}

// Tau
async function callTau(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let Data = await response.json();
    // console.log(Data);
    if (response) {
        console.log("tau Complete")
        let assets = Data['assets'][0]
        let updateDate = new Date( Date.parse(assets.updated_at) )
        document.getElementById("tau-release-date").innerText = "Latest release : " + formatDate(updateDate) ;
    }
}


// Hitokori
async function callHitokori(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let Data = await response.json();
    // console.log(Data);
    if (response) {
        console.log("hitokori Complete")
        let assets = Data['assets'][0]
        let updateDate = new Date( Date.parse(assets.updated_at) )
        document.getElementById("hitokori-release-date").innerText = "Latest release : " + formatDate(updateDate) ;
    }
}

// Soyokaze
async function callSoyokaze(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let Data = await response.json();
    // console.log(Data);
    if (response) {
        console.log("soyokaze Complete")
        let assets = Data['assets'][0]
        let updateDate = new Date( Date.parse(assets.updated_at) )
        document.getElementById("soyokaze-release-date").innerText = "Latest release : " + formatDate(updateDate) ;
    }
}

// Cytosu
async function callCytosu(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let Data = await response.json();
    // console.log(Data);
    if (response) {
        console.log("cytosu Complete")
        let latestRelease = Data[0];
        let assets = latestRelease['assets'][0]
        let updateDate = new Date( Date.parse(assets.updated_at) )
        document.getElementById("cytosu-release-date").innerText = "Latest release : " + formatDate(updateDate) ;
    }
}

// Rush
async function callRush(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let Data = await response.json();
    // console.log(Data);
    if (response) {
        console.log("rush Complete")
        let latestRelease = Data[0];
        let assets = latestRelease['assets'][0]
        let updateDate = new Date( Date.parse(assets.updated_at) )
        document.getElementById("rush-release-date").innerText = "Latest release : " + formatDate(updateDate) ;
    }
}

// osu!DIVA
async function callDiva(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let Data = await response.json();
    // console.log(Data);
    if (response) {
        console.log("diva Complete")
        let assets = Data['assets'][0]
        let updateDate = new Date( Date.parse(assets.updated_at) )
        document.getElementById("diva-release-date").innerText = "Latest release : " + formatDate(updateDate) ;
    }
}

// Hishigata
async function callHishigata(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let Data = await response.json();
    // console.log(Data);
    if (response) {
        console.log("hishigata Complete")
        let assets = Data['assets'][0]
        let updateDate = new Date( Date.parse(assets.updated_at) )
        document.getElementById("hishigata-release-date").innerText = "Latest release : " + formatDate(updateDate) ;
    }
}

// Hishigata
async function callGamebosu(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let Data = await response.json();
    // console.log(Data);
    if (response) {
        console.log("gamebosu Complete")
        let assets = Data['assets'][0]
        let updateDate = new Date( Date.parse(assets.updated_at) )
        document.getElementById("gamebosu-release-date").innerText = "Latest release : " + formatDate(updateDate) ;
    }
}

// Solosu
async function callSolosu(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let Data = await response.json();
    // console.log(Data);
    if (response) {
        console.log("solosu Complete")
        let assets = Data['assets'][0]
        let updateDate = new Date( Date.parse(assets.updated_at) )
        document.getElementById("solosu-release-date").innerText = "Latest release : " + formatDate(updateDate) ;
    }
}

// Set rulesets number to get a progress bar work
const rulesetNumber = 16;
const progressBarUp = 100/rulesetNumber;

function changeProgressBar(percent){
    $(".progress-bar").css("width", percent + "%").text(percent + " %");
}

function changeProgressText (text) {
    progressText.innerHTML = text;
}

function deleteProgressBar () {
    document.getElementById("fetch-progress").innerHTML = "";
}

let percentNow = 0;

changeProgressText("Fetch Touhosu releases...");
callTouhosu("https://api.github.com/repos/EVAST9919/touhosu/releases/latest")
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch mvis releases...");
callMvis("https://api.github.com/repos/EVAST9919/lazer-m-vis/releases/latest");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch bosu releases...");
callBosu("https://api.github.com/repos/EVAST9919/bosu/releases/latest");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch sentakki releases...");
callSentakki("https://api.github.com/repos/LumpBloom7/sentakki/releases/latest");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch swing releases...");
callSwing("https://api.github.com/repos/EVAST9919/lazer-swing/releases/latest");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch tau releases...");
callTau("https://api.github.com/repos/Altenhh/tau/releases/latest");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch hitokori releases...");
callHitokori("https://api.github.com/repos/Flutterish/Hitokori/releases/latest");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch soyokaze releases...");
callSoyokaze("https://api.github.com/repos/goodtrailer/soyokaze/releases/latest");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch cytosu releases...");
callCytosu("https://api.github.com/repos/GSculerlor/Cytosu/releases");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch rush releases...");
callRush("https://api.github.com/repos/Beamographic/rush/releases");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch osu!DIVA releases...");
callDiva("https://api.github.com/repos/Thesola10/osu-DIVA/releases/latest");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch hishigata releases...");
callHishigata("https://api.github.com/repos/LumpBloom7/hishigata/releases/latest");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch gamebosu releases...");
callGamebosu("https://api.github.com/repos/Game4all/gamebosu/releases/latest");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch solosu releases...");
callSolosu("https://api.github.com/repos/flutterish/Solosu/releases/latest");
changeProgressBar(percentNow);
percentNow += progressBarUp;

let yosoDate = new Date(Date.parse('2021-05-18T17:11:00Z'))
document.getElementById("yoso-release-date").innerHTML = "Latest release : " + formatDate(yosoDate) ;

changeProgressBar(100);
changeProgressText("Complete!");
window.setTimeout("deleteProgressBar();", 1000);