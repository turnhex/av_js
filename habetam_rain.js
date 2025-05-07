function autoBetPatternFinder(){
	const betsList = document.querySelector(".bets-list");
	
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
	betsList.innerHTML += `<div>${s}</div>`
	
	if(rNumber[0] < rNumber[1] & rNumber[2] == rNumber[3] & rNumber[4] == rNumber[5] & rNumber[2] != 1){
		betsList.innerHTML += `<b style="color:yellow">Similare Pattern is happing Bet</b> `
	}
	

	
	
	//betsList.innerHTML += `<b style="color:yellow"> ${pattern12}</b>`
	for(let x=0; x<betPatternWinn.length; x++){
		if(betPatternWinn[x].toString() == pattern12.slice(0, betPatternWinn[x].length).toString()){
			betsList.innerHTML += `<b style="color:yellow"> Bet Pattern ${x} -> ${betPatternWinn[x].toString()}</b>`
		}
		
	}

	for(let x=0; x<betPatternWinnWaring.length; x++){
		if(betPatternWinnWaring[x].toString() == pattern12.slice(0, betPatternWinnWaring[x].length).toString()){
			betsList.innerHTML += `<b > Don't Bet Pattern  ${x} -> ${betPatternWinnWaring[x].toString()}</b>`
		}
	}
	
	
	return false
	
	//setup rain for bet
	document.getElementsByClassName("user-wrapper ng-star-inserted dropdown")[0].getElementsByClassName('burger-i')[0].click() //dropdown-item list-menu-item info-item ng-star-inserted
	document.getElementsByClassName("dropdown-item list-menu-item info-item ng-star-inserted")[0].click()
	let rain_list = document.getElementsByClassName("content__free-bets ng-star-inserted")[0].getElementsByClassName("free-bets-list-wrapper")
	for(let x=0; x<rain_list.length; x++){
		//await new Promise(resolve => setTimeout(resolve, 1000));
		rain_list[x].getElementsByClassName('radio ng-star-inserted')[0].click()
	}
	
	document.getElementsByClassName("user-wrapper ng-star-inserted dropdown")[0].getElementsByClassName('burger-i')[0].click() //dropdown-item list-menu-item info-item ng-star-inserted
	
	//check free-bet-wrapper ng-star-inserted is pop updateCommands
	popUpFreeBet = document.getElementsByClassName("free-bet-wrapper ng-star-inserted")[0]
	if(popUpFreeBet){
		betsList.innerHTML += `Yes `
		let value = parseInt(popUpFreeBet.getElementsByClassName("win")[0].getElementsByClassName('value')[0].innerText)
		
	}
	
	//try to enable cash out 
	/*
		if auto cash out is enable class name "input-switch off" dont exist 
	*/
	try{
		document.getElementsByClassName("cashout-block")[0].getElementsByClassName("input-switch off")[0].click()
		
	}catch(e){
		
	}

	try{
		document.getElementsByClassName("cashout-block")[1].getElementsByClassName("input-switch off")[0].click()
	}catch(e){
		
	}
}
