const title = document.querySelector("#title")
const description = document.querySelector("#desc")
const btn = document.querySelector("#add")

const mainfunc = ()=>{
    const titleval = title.value
    const descval = description.value
    if(titleval&&descval){
        localStorage.setItem(titleval,descval)
        console.table(localStorage)
    }
    const container = document.querySelector("#main")
    if(localStorage.length>0){
        var fieldset=document.createElement('fieldset')
        var legend = document.createElement('legend')
        legend.textContent = "Your todo's"
        fieldset.appendChild(legend)

        for (let i=0; i<localStorage.length ;i++){
            const key=localStorage.key(i)
            const value=localStorage.getItem(key)
            var contain = document.createElement('div')
            contain.setAttribute('class','item')
            contain.setAttribute('data',`${key}`)
            
            var link = document.createElement('button')
            link.setAttribute('class','delete')
            link.setAttribute('data',`${key}`)
            link.textContent = 'Delete todo'
            
            var todo_title = document.createElement('h3')
            var todo_description = document.createElement('p')
            todo_title.textContent = key
            todo_description.textContent = value
            
            contain.appendChild(todo_title)
            contain.appendChild(todo_description)
            contain.appendChild(link)
            fieldset.appendChild(contain)
        }
        container.appendChild(fieldset)
    }
    var deletebtns = document.querySelectorAll('.delete')
    deletebtns.forEach(element=>element.addEventListener('click',(e)=>{
        const data = e.target.getAttribute('data')
        console.log(data)
        localStorage.removeItem(data)
        const divToDel = document.querySelector(`[data=${data}]`);
        console.log(divToDel)
        fieldset.remove(divToDel)
    }))
    const view_btn = document.querySelector(".btn_view")
    view_btn.textContent = 'Your todo has been added click to view it here'
    view_btn.addEventListener('click',()=>{
        document.querySelector('#all').click()
    })
}


btn.addEventListener('click',mainfunc)
description.addEventListener('keypress',(event)=>{
    if(event.key=='Enter'){
        mainfunc()
    }
})

function tabsSwitch(){
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener('click',() => {
            const sidebar = button.parentElement
            const tabsContainer = sidebar.parentElement
            const tabsNum = button.dataset['forTab']
            const tabToActivate = document.querySelector(`.tabs_content[data-tab="${tabsNum}"]`)

            sidebar.querySelectorAll('.btn').forEach(button=>{
                button.classList.remove('btn--active')
            })
            document.querySelectorAll('.tabs_content').forEach(tab=>{
                tab.classList.remove('tabs_content--active')
            })
            button.classList.add('btn--active')
            tabToActivate.classList.add('tabs_content--active')
        })
    })
}
document.addEventListener("DOMContentLoaded",()=>{
    tabsSwitch()
    
})






