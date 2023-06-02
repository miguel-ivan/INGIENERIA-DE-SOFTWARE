const posts = document.querySelector(".posts")
const post = document.querySelectorAll(".post")
const countpost = document.querySelector("#countpost")
const showpost = document.querySelector("#showpost")

posts.style.display="none"
countpost.innerHTML=post.length
showpost.addEventListener("click", function(){
 posts.style.display= "grid"
}) 

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json() )
.then(json=>{
    let template=''
    json.forEach(element => {
        template+=`
        <div class="post">  
        <h2>${element.name}</h2>
        <h3>${element.username}</h3>
        <p>${element.email}</p>
    </div>`            
    });
    posts.innerHTML = template
})

fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json() )
.then(json=>{
    let template=''
    json.forEach(element => {
        template+=`
        <div class="post">  
        <h2>${element.title}</h2>
        <h3>${element.completed}</h3>
    </div>`            
    });
    posts.innerHTML = template
})

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json() )
.then(json=>{
    let template=''
    json.forEach(element => {
        template+=`
        <div class="post">  
        <h2>${element.title}</h2>
        <p>${element.body}</p>
    </div>`            
    });
    posts.innerHTML = template
})

fetch("https://jsonplaceholder.typicode.com/comments")
.then(response => response.json() )
.then(json=>{
    let template=''
    json.forEach(element => {
        template+=`
        <div class="post">  
        <h2>${element.name}</h2>
        <h3>${element.email}</h3>
        <p>${element.body}</p>
    </div>`            
    });
    posts.innerHTML = template
})