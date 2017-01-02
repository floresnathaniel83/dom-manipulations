
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
 	alert("yowch! Don't click me so hard")

})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  	
  var pNode = document.querySelector("#compoundInvestment")
  var value = pNode.textContent
  pNode.textContent = parseInt(value) * 2


})

document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var divNode = document.querySelector("#circle-bw")
 	console.log(divNode)
  if (divNode.style.backgroundColor === "black") {
  	//console.log(divNode.style.backgroundColor)
  	    divNode.style.backgroundColor = "white"
	} else {

		divNode.style.backgroundColor = "black"
	}

})

document.querySelector("#blow-up button").addEventListener('click',function(){

	var divNode = document.querySelector("div .circle-red")	
	//console.log(divNode)
	var computedStyle = window.getComputedStyle(divNode)
  //console.log(computedStyle)
	var intWidth = parseInt(computedStyle.width)

	var intHeight = parseInt(computedStyle.height)

  divNode.style.width = (intWidth * 2) + "px"
  //console.log(divNode.style.width)

  divNode.style.height = (intHeight * 2) + "px"
  //console.log(divNode.style.height)   



	if(intWidth * 2 > 320) {
    
    divNode.style.width = 40 + "px"
  //console.log(divNode.style.width)

    divNode.style.height = 40 + "px"
	
  } else {

    divNode.style.width = (intWidth * 2) + "px"
  //console.log(divNode.style.width)

    divNode.style.height = (intHeight * 2) + "px"
  //console.log(divNode.style.height)   

   
  }

  // TASK #4}
})

document.querySelector("#remove button").addEventListener('click',function(){
  
var ulNode = document.querySelector(".answer-box > ul")
console.log(ulNode)
var liNodes = ulNode.querySelectorAll("li")
console.log(liNodes)

var clearInactive = function(container,liNodes) {
  for (var i = 0; i < liNodes.length; i ++) {
    var liNode = liNodes[i]
    if (liNode.classList.contains('inactive')) {
       container.removeChild(liNode)
       
    } 
  }
}

clearInactive(ulNode, liNodes)


  // TASK #5
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){

var spanNodes = document.querySelectorAll("#reverse-squares span")
var containerNode = document.querySelector("#reverse-squares .answer-box")
 
var reverseSquares = function(spanNodes) {
  for(var i = spanNodes.length - 1; i >= 0; i--){
      var oneSpan = spanNodes[i]
      containerNode.removeChild(oneSpan)
      containerNode.appendChild(oneSpan)
     }
  
  

}
reverseSquares(spanNodes)

})

  // TASK #6

document.querySelector("#pig-latin button").addEventListener('click',function(){

var containerNode = document.querySelector("#tasks")

var liNodes = document.querySelectorAll("#tasks li")

containerNode.innerHTML = ''

var reverseWord = ""
    for(var i = 0; i < liNodes.length; i++) {
      var oneNode = liNodes[i]
      var content = oneNode.innerHTML
      var changedContent = ''

      for(var x = content.length - 1; x >= 0; x--) {
        changedContent += content[x] 
      }

      content = changedContent
      containerNode.innerHTML += '<li>' + content + '</li>'
    
    }

//split into an array of strings and then reverse the words
  // TASK #7
})
//split url into a string and push a new number
// TASK #8
document.querySelector("#cycle-image button").addEventListener('click',function(){
  var cityImg = document.querySelector("#city-img")
  urlLength = cityImg.src.length
  urlLastChar = cityImg.src[urlLength - 1]
  var i = urlLastChar
  i = parseInt(urlLastChar) + 1
  cityImg.src = "http://lorempixel.com/400/200/city/" + i

})