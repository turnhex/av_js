let mode = 1;

function betMode() {
    const styleCode = 'opacity: 0.2;';
    const elements = [
        document.querySelector(".balance"),
        document.querySelector(".result-history.disabled-on-game-focused"),
        document.querySelector(".d-flex.h-100.flex-column.ng-star-inserted .ng-star-inserted"),
        document.querySelector(".balance-amount")?.parentElement,
        document.querySelector(".main-wrapper"),
        document.querySelector(".chat-bar.ng-star-inserted"),
        
        document.querySelectorAll(".controls")[0],
        document.querySelectorAll(".controls")[1]
        
    ];

    elements.forEach(el => {
        if (el) el.style = styleCode;
    });

    document.querySelector(".game-play").style = 'opacity: 0.3;'
    document.querySelector(".bet-controls").style = 'opacity: 1;'
    document.querySelector(".controls").style = 'opacity: 1;'
}

function youtubeMode(show = false) {
    const styleCode = 'visibility: hidden;';
    
    const balance = document.querySelector(".balance-amount")?.innerHTML;
    const headerLeft = document.querySelector(".main-header .header-left");
    if (headerLeft) headerLeft.innerHTML = '<b style="color:red; font-size:30px">YoutTube</b>';

    const selectors = [
        ".missions-holder.ng-star-inserted",
        ".navigation-switcher.ng-untouched.ng-valid.ng-dirty",
        "app-chat-widget .header",
        ".d-flex.h-100.flex-column.ng-star-inserted .ng-star-inserted",
        ".game-play",
        ".bet-controls",
        ".controls",
        ".bets-footer"
    ];

    selectors.forEach(sel => {
        const el = document.querySelector(sel);
        if (el) el.style = styleCode;
    });

    if(show){
        
            selectors.forEach(sel => {
            const el = document.querySelector(sel);
            if (el) el.style = 'visibility: show;';
        });
        document.querySelector(".chat-bar.ng-star-inserted").style = 'opacity: 1;'
    }else{
        document.querySelector(".chat-bar.ng-star-inserted").style = 'opacity: 0.0;'
    }
}

betMode()
youtubeMode();

let countRefresh = 0;
function rainCollect() {
    const betsList = document.querySelector(".bets-list");
    if (betsList) {
        betsList.innerHTML = `<b style="font-size:18px;"> -- Extract Rain From Chat -- ${countRefresh} </b>`;
    }

    countRefresh += 0.5;

    const mainChat = document.querySelector(".chat-bar.ng-star-inserted");
    if (!mainChat) return;

    try {
        const rainContainers = mainChat.querySelectorAll(".rain-wrapper.mb-2.ng-star-inserted");
        const latestContainer = rainContainers[rainContainers.length - 1];

        if (betsList) {
            betsList.innerHTML += `<pre style="color:green">[+] rain_containers size <b style="color:white">${rainContainers.length}</b></pre>`;
        }

        const claimList = latestContainer.querySelector(".claim-wrapper");
        if (!claimList) return;

        [...claimList.children].forEach(child => {
            [...child.children].forEach((btn, idx) => {
                if (idx > 0) {
                    try { btn.click(); } catch (e) { }
                }
            });
        });
    } catch (e) {
        // Optional: log errors to console or UI
    }
}

// Throttle the callback to avoid over-execution
let lastRun = 0;
const callback = (mutationsList, observer) => {
    const now = Date.now();
    if (now - lastRun < 500) return; // Run at most every 500ms
    lastRun = now;

    rainCollect();

    try {
        const controls = document.querySelectorAll(".controls");
        controls[0]?.querySelector(".buttons-block")?.firstChild?.setAttribute("style", "color:gray; background-color:black; font-size:15px");
        controls[2]?.querySelector(".buttons-block")?.firstChild?.setAttribute("style", "color:gray; background-color:black; font-size:15px");
    } catch (e) {}
};

const targetNode = document.querySelector('.messages-container');
if (targetNode) {
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, { childList: true });
} else {
    console.log("No element with class 'messages-container' found.");
}
