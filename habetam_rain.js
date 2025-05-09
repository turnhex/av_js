
//https://habtam.bet/unique-link/7OdkDL7g4jgVHz2d082a

let globalList = []

let betPatternWinn = [
	[2,2,1,2,1,2,2]
]


let betPatternWinnWaring = [
	[1,1,2,1,1],
	[1,1,2],
	[2,1,1,1,1,2],
	[2,1,2,2,2,2,1],
	[2,2,1,1,1,2,2,1,1]

]

function winnPattern(){
	let count = 0
	let pattern = []
	
	for(let x=0; x<globalList.length; x++){
		if(globalList[x] > 1.99){
			count += 1
		}else{
			if(count > 0){
				pattern.push(count)
			}
			count = 0
		}
	}
	
	return pattern
}

function faildPattern(){
	let count = 0
	let pattern = []
	
	for(let x=0; x<globalList.length; x++){
		if(globalList[x] < 2){
			count += 1
		}else{
			if(count > 0){
				pattern.push(count)
			}
			count = 0
		}
	}
	
	return pattern
}

async function autoBetPatternFinder(){

	const betsList = document.querySelector(".bets-list");
	
	await new Promise(resolve => setTimeout(resolve, 1000));
	//try to calim any free bet if exist
	try{
		let ClaimFreeBet = document.getElementsByClassName("free-bet-wrapper ng-star-inserted")[0]

		ClaimFreeBet.getElementsByClassName("btn btn-success btn-continue text-uppercase")[0].click()
		betsList.innerHTML += `<p style="color:blue">Free Bet calim success .</p>`
		
	}catch(e){
		//betsList.innerHTML += `<p style="color:blue">Free Bet calim not Exist.</p>`
	}
	
	
	pattern12 = []
	function globalListTo12Pattern(){
		for(let x=0;x<globalList.length; x++){
			if(parseInt(globalList[x]) < 2){
				pattern12.push(1)
			}else{
				pattern12.push(2)
			}
		}
	}
	globalListTo12Pattern()
	
	let rNumber = []
	function patternReadEsy(){
		
		let r = '<br>'
		let countW = 0
		let countF = 0
		
		let  countAnyP = 0
		for(let x=0; x<pattern12.length; x++){
			if(pattern12[x] == 2){
				countW += 1
				
				if(countF > 0){
					r += `<b style="color:red">${countF}</b> `
					rNumber.push(countF)
					countAnyP+=1
				}
				countF = 0
			}else{
				if(countW > 0){
					r += `<b style="color:green">${countW}</b> `
					countAnyP+=1
					rNumber.push(countW)
					
				}
				countW = 0
				countF += 1
			}
			
			if(countAnyP > 15){
				break
			}
		}


		//betsList.innerHTML += `<div> ${r}</div>`
	}
	patternReadEsy()
	
	
	let color = 'green'
	if(globalList[0] < 2 )
		color ='red'
	
	
	//betsList.innerHTML += `<p>${rNumber.slice(0,2)} - ${rNumber.slice(2,4)} - ${rNumber.slice(4,6)} - ${rNumber.slice(6,8)} - ${rNumber.slice(8,10)} - ${rNumber.slice(10,12)}  - ${rNumber.slice(12,14)} - ${rNumber.slice(14,17)}</p> `
	
	if(rNumber.slice(0,2).reverse.toString() == rNumber.slice(4,6).toString()){
		betsList.innerHTML += `<p style="color:red">dont try !<p>`
		
	}
	
	s = ''
	for(let x=0; x<rNumber.length; x+=2){
		s += `<b style="color:${color}">${rNumber[x]}</b>,<b>${rNumber[x+1]} -- </b>`
	}
	
	betsList.innerHTML += `<div>${s}</div><br>`
	//betsList.innerHTML += `<div>r is ${rNumber}</div>`
	
	if(rNumber[0] < rNumber[1] & rNumber[2] == rNumber[3] & rNumber[4] == rNumber[5] & rNumber[3] > 1 & rNumber[5] > 1){
		betsList.innerHTML += `<b style="color:yellow">Similare Pattern is happing Bet</b> `
		
		document.getElementsByClassName("controls")[0].getElementsByClassName("btn btn-success bet ng-star-inserted")[0].click()
			
	}
	
	
	//betsList.innerHTML += `<b style="color:yellow"> ${pattern12}</b>`
	for(let x=0; x<betPatternWinn.length; x++){
		if(betPatternWinn[x].toString() == pattern12.slice(0, betPatternWinn[x].length).toString()){
			betsList.innerHTML += `<b style="color:yellow"> Bet Pattern ${x} -> ${betPatternWinn[x].toString()}</b>`
			document.getElementsByClassName("controls")[0].getElementsByClassName("btn btn-success bet ng-star-inserted")[0].click()
			document.getElementsByClassName("controls")[2].getElementsByClassName("btn btn-success bet ng-star-inserted")[0].click()
		}
		
	}

	if(globalList[0] < 2 & last13resultFaild[0] > last13resultWinn[1] & last13resultFaild[0] >  last13resultFaild[2]){
		if(last13resultFaild[2] > last13resultFaild[1]){
			document.getElementsByClassName("btn btn-success bet ng-star-inserted")[0].click()
			betsList.innerHTML += '<b style="color:yellow">Try Know Pattern Test 2</b>'
			
			document.getElementsByClassName("controls")[0].getElementsByClassName("btn btn-success bet ng-star-inserted")[0].click()
			document.getElementsByClassName("controls")[2].getElementsByClassName("btn btn-success bet ng-star-inserted")[0].click()
			
		
		}
	}
	
	for(let x=0; x<betPatternWinnWaring.length; x++){
		if(betPatternWinnWaring[x].toString() == pattern12.slice(0, betPatternWinnWaring[x].length).toString()){
			betsList.innerHTML += `<b > Don't Bet Pattern  ${x} -> ${betPatternWinnWaring[x].toString()}</b>`
		}
	}
	if(rNumber[2] == 3){
		betsList.innerHTML += `<b style="color:red"> Don't Bet After Larg 3 </b>`
	}
	
	
	
	try{
	//setup rain for bet
		document.getElementsByClassName("user-wrapper ng-star-inserted dropdown")[0].getElementsByClassName('burger-i')[0].click() //dropdown-item list-menu-item info-item ng-star-inserted
		document.getElementsByClassName("dropdown-item list-menu-item info-item ng-star-inserted")[0].click()
		let rain_list = document.getElementsByClassName("content__free-bets ng-star-inserted")[0].getElementsByClassName("free-bets-list-wrapper")
		for(let x=0; x<rain_list.length; x++){
			//await new Promise(resolve => setTimeout(resolve, 1000));
			rain_list[x].getElementsByClassName('radio ng-star-inserted')[0].click()
		}
	}catch(e){}
	
	document.getElementsByClassName("user-wrapper ng-star-inserted dropdown")[0].getElementsByClassName('burger-i')[0].click() //dropdown-item list-menu-item info-item ng-star-inserted
		
	try{
		//check free-bet-wrapper ng-star-inserted is pop updateCommands
		popUpFreeBet = document.getElementsByClassName("free-bet-wrapper ng-star-inserted")[0]
		if(popUpFreeBet){
			betsList.innerHTML += `<b>Free bet found</b>`
			let value = parseInt(popUpFreeBet.getElementsByClassName("win")[0].getElementsByClassName('value')[0].innerText)
			
		}
	}catch(e){}

	//try to close rain list
	await new Promise(resolve => setTimeout(resolve, 1000));
	try{
		document.getElementsByClassName("modal-content")[0].getElementsByClassName("close")[0].click()
	}catch(e){
		
	}
	
	//set bet Amount
	//let persent3betAmount = (((parseFloat(document.getElementsByClassName("balance-amount")[0].innerText))/100)*35)/2
		
		
	//document.getElementsByClassName("controls-content-top")[0].getElementsByClassName("spinner big")[0].getElementsByTagName("input")[0].value = persent3betAmount
	//document.getElementsByClassName("controls-content-top")[1].getElementsByClassName("spinner big")[0].getElementsByTagName("input")[0].value = persent3betAmount
		
	//document.getElementsByClassName("controls-content-top")[0].click()
		
		
	
	//change the mode to 'Auto' mode view 
	
	//document.getElementsByClassName('bet-controls')[0].getElementsByClassName("tab ng-star-inserted")[1].click()
	//document.getElementsByClassName('bet-controls')[0].getElementsByClassName("tab ng-star-inserted")[3].click()
	//await new Promise(resolve => setTimeout(resolve, 1000));
	
	//try to enable cash out 
	/*
		if auto cash out is enable class name "input-switch off" dont exist 
	
	try{
		document.getElementsByClassName("cashout-block")[0].getElementsByClassName("input-switch off")[0].click()
		
	}catch(e){
		
	}

	try{
		document.getElementsByClassName("cashout-block")[1].getElementsByClassName("input-switch off")[0].click()
	}catch(e){
		
	}
	*/
	
}

function lastProcess(){
	
	//console.clear()
	const betsList = document.querySelector(".bets-list");
	
    if (betsList) {
        betsList.innerHTML = `<b style="font-size:18px;"> -- Extract Rain & Game Result-- ${countRefresh} </b>`;
    }
	
	let payout = document.querySelector('.payouts-block').getElementsByClassName("payout")
	let result = []
	for(let x=0; x<payout.length; x++){
		result.push(parseFloat(payout[x].innerText.replace('x','')))
	}
	globalList = result
	
	let winnp  = winnPattern()
	let faildp = faildPattern()
	
	betsList.innerHTML += "<br>"
	
	
	last13resultWinn = winnp.slice(0, 3)
	last13resultFaild = faildp.slice(0, 3)
	
	stringHtml = `<div>
		Winn = <b style="color:green">${last13resultWinn}</b> <b style="color:gray">${winnp.slice(3, 6)}</b> <b style="color:gray">${winnp.slice(7, 10)}</b><br>
		Faild = <b style="color:red">${last13resultFaild}</b> <b style="color:gray">${faildp.slice(3, 6)}</b> <b style="color:gray">${faildp.slice(7, 10)}<br>
	</div>`


	betsList.innerHTML += stringHtml
	
	
	autoBetPatternFinder()

	
}

// Select the target node
const targetNodeResult = document.querySelector('.payouts-block');

// Check if the element exists
if (targetNodeResult) {
  // Create a callback function to execute when mutations are observed
  const callback = function(mutationsList, observer) {
    lastProcess()
  };

  // Create an observer instance linked to the callback function
  const observerResult = new MutationObserver(callback);

  // Set observer options
  const configResult = {
    attributes: false,      // Watch for attribute changes
    childList: true,       // Watch for additions or removals of child elements
    subtree: false,         // Watch the entire subtree
    characterData: false    // Watch for text content changes
  };

  // Start observing the target node
  observerResult.observe(targetNodeResult, configResult);

  console.log('Observer is now watching .payouts-block');
} else {
  console.error('Element with class "payouts-block" not found.');
}

/*

	-- Auto Cash Out MutationObserver -- 
*/

// Function to observe amount changes
function observeCashOut(button) {
  const amountLabel = button.querySelector('.amount');
  if (!amountLabel) return;

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
		
		let betAcmount1 = parseFloat(document.getElementsByClassName("controls-content-top")[0].getElementsByClassName("spinner big")[0].getElementsByTagName("input")[0].value)
		let betAcmount2 = parseFloat(document.getElementsByClassName("controls-content-top")[1].getElementsByClassName("spinner big")[0].getElementsByTagName("input")[0].value)
		
		let betAcmount = betAcmount1 > betAcmount2 ? betAcmount2 : betAcmount1
		//const cashOutAmountPersentage = (((betAcmount*2)/100)*95)
		const cashOutAmountPersentage = (((betAcmount)/100)*90)
		
		
		const betsList = document.querySelector(".missions-container");
		betsList.innerHTML = '<div class="cashoutFromButton">CashOut</div>'
		const cashoutTag = betsList.getElementsByClassName("cashoutFromButton")[0]
		
		cashoutTag.innerHTML = `<p style="color:white">Amount changed to:, ${amountLabel.innerText.trim()}<p>`
		
		
	  
		  if(parseFloat(amountLabel.innerText.trim()) >= cashOutAmountPersentage){
			let clickCashOut = document.getElementsByClassName('btn btn-warning cashout ng-star-inserted')
			for(let x=0; x<clickCashOut.length; x++){
				clickCashOut[x].click()
			}
		  }
    });
  });

  observer.observe(amountLabel, {
    childList: true,
    subtree: true,
    characterData: true
  });

  console.log('Now observing amount changes for:', amountLabel.innerText.trim());
}

// Observe DOM for the button appearing
const domObserverCashOut = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      if (
        node.nodeType === 1 &&
        node.classList.contains('btn') &&
        node.classList.contains('btn-warning') &&
        node.classList.contains('cashout') &&
        node.classList.contains('ng-star-inserted')
      ) {
        console.log('Cash Out button detected.');
        observeCashOut(node);
      }
    });
  });
});

domObserverCashOut.observe(document.body, {
  childList: true,
  subtree: true
});


/*
	-- Rain Collector Script Part -- 
*/

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

//betMode()
//youtubeMode();

let countRefresh = 0;
function rainCollect() {
	
    const betsList = document.querySelector(".bets-widget-footer");
	/*
    if (betsList) {
        betsList.innerHTML = `<b style="font-size:18px;"> -- Extract Rain From Chat -- ${countRefresh} </b>`;
    }*/
	
    countRefresh += 0.5;

    const mainChat = document.querySelector(".chat-bar.ng-star-inserted");
    if (!mainChat) return;

    try {
        const rainContainers = mainChat.querySelectorAll(".rain-wrapper.mb-2.ng-star-inserted");
        const latestContainer = rainContainers[rainContainers.length - 1];

        if (betsList) {
            betsList.innerHTML = `<pre style="color:green">[+] rain_containers size <b style="color:white">${rainContainers.length}</b></pre>`;
        }

        const claimList = latestContainer.querySelector(".claim-wrapper");
        if (!claimList) return;

        [...claimList.children].forEach(child => {
			try{
				[...child.children].forEach((btn, idx) => {
					if (idx > 0) {
						try { btn.click(); } catch (e) { }
					}
				});
			}catch(e){}
        });
    } catch (e) {
        // Optional: log errors to console or UI
    }

}

// Throttle the callback to avoid over-execution
let lastRunRain = 0;
const callbackRain = (mutationsList, observer) => {
    const now = Date.now();
    if (now - lastRunRain < 500) return; // Run at most every 500ms
    lastRunRain = now;

    rainCollect();

    try {
        const controls = document.querySelectorAll(".controls");
        controls[0]?.querySelector(".buttons-block")?.firstChild?.setAttribute("style", "color:gray; background-color:black; font-size:15px");
        controls[2]?.querySelector(".buttons-block")?.firstChild?.setAttribute("style", "color:gray; background-color:black; font-size:15px");
    } catch (e) {}
	
};

const targetNodeRain = document.querySelector('.messages-container');
if (targetNodeRain) {
    const observerRain = new MutationObserver(callbackRain);
    observerRain.observe(targetNodeRain, { childList: true });
} else {
    console.log("No element with class 'messages-container' found.");
}
