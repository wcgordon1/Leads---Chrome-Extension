let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    renderLeads()

})

//document.createElement('li') << Other way to append html elements 
//li.textContent = myLeads[i]
//ulEl.append(li)
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        //Use template strings. code below is too messy
        //listItems += '<li> <a target="_blank" href="' + myLeads[i] + myLeads[i] + '" ></a></li>'
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
    `

    }

    ulEl.innerHTML = listItems
}
