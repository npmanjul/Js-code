// console.log(window)

// console.log(window.document)

// console.log(document)

// console.dir(document)

// document.getElementById('.page2').innerHTML="<h1>Chai aur code</h1>"

// document.getElementById("title")

// document.getElementById("title").id
// document.getElementById("title").className
// document.getElementById("title").getAttribute("id")
// document.getElementById("title").getAttribute("class")

// document.getElementById("title").setAttribute("class","test heading")

// ---------------------------------------------------------------------
const title=document.getElementById("title")
// undefined

title
// <h1 id=​"title" class=​"heading">​…​</h1>​

title.style.backgroundColor="green"

title.style.padding="15px"

title.style.borderRadius="15px"

// -----------------------------------------------------------------------

title.innerHTML 
// 'DOM learning on Chai aur code <span style="display: none;">test text</span>'

title.innerText 
// 'DOM learning on Chai aur code'

title.textContent
// 'DOM learning on Chai aur code test text'


// ---------------------------------------------------------------------------

//query selector

document.querySelector('h2')
{/* <h2>​Lorem ipsum dolor sit.​</h2>​ */}

document.querySelector("#title")
{/* <h1 id=​"title" class=​"heading">​…​</h1>​ */}

document.querySelector(".heading")
{/* <h1 id=​"title" class=​"heading">​…​</h1>​"DOM learning on Chai aur code "<span style=​"display:​ none;​">​test text​</span>​</h1>​ */}

document.querySelector("input")
{/* <input type=​"password" name id>​ */}


//query selector All

const temp=document.querySelectorAll("li")
// undefined

temp
// NodeList(4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object

temp[0].style.backgroundColor="yellow"
// 'yellow'

temp.forEach(function (l) {
    l.style.backgroundColor="green"
})


// ---------------------------------------------------------------------------------------

const tempClass=document.getElementsByClassName("list-item")
// undefined




// ----------------------------------------------------------------------------------
const arr=Array.from(tempClass)
// undefined

arr
// (4) [li.list-item, li.list-item, li.list-item, li.list-item]


arr.forEach(function (li) {
    li.style.color="orange"
})



