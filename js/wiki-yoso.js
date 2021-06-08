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

async function callAPI(url, rulesetsName) {

    
    if (rulesetsName === 'yoso') {
        let yosoDate = new Date( Date.parse('2021-06-09T20:09:00Z') );
        let yosoVersion = "2021.608.0";
        document.getElementById('date').innerHTML = "Latest release at " + yosoDate;
        document.getElementById('version').innerHTML = "Last Update : " + yosoVersion + " (" + formatDate(yosoDate) + ")";
    } else {
        // Storing response
        const response = await fetch(url);

        // Storing data in form of JSON
        let Data = await response.json();
        // console.log(Data);
        if (response) {
            console.log(rulesetsName + " Complete")
            let latestRelease = Data;
            let assets = Data['assets'][0]
            let updateDate = new Date( Date.parse(assets.updated_at) )
            document.getElementById('date').innerHTML = "Latest release at " + updateDate;
            document.getElementById('version').innerHTML = "Last Update : " + latestRelease.name + " (" + formatDate(updateDate) + ")";
        }
    }
}

function changeProgressBar(percent){
    $(".progress-bar").css("width", percent + "%").text(percent + " %");
}

function changeProgressText (text) {
    progressText.innerHTML = text;
}

function deleteProgressBar () {
    document.getElementById("fetch-progress").innerHTML = "";
}

let url = ''
let rulesetsName = 'yoso'
let progressText = document.getElementById('progresstext');

console.log("Start fetching...")
changeProgressText("Complete!");
callAPI(url, rulesetsName)
changeProgressBar(100);
changeProgressText("Complete!");
window.setTimeout("deleteProgressBar();", 500);