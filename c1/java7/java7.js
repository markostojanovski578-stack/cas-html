// const promise = new Promise((resolve,reject) =>{
//     const success =  true;

//     if(success) {
//         resolve ("The promise worked")
//     } else {
//         reject ("Something went wrong")
//     }
// })

// promise.then(result => console.log(result)).catch(error => {
//     console.log(error)
// })

// const delayedPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data loaded after two seconds");

//     }, 2000) 
// })

// delayedPromise.then(res =>{
//     console.log(res);
// })

// const failingPromsie= new Promise((resolve, reject) =>{
//     setTimeout(()=> {
//         reject("Server error");

//     }, 2000);
// })

// failingPromise.then(res => {
//     console.log(res);
// }).catch(error => {
//     console.error(error);
// })

// Fetch

// Get

// const main_div = document.getElementById("posts");





// fetch("https://jsonplaceholder.typicode.com/posts").
// then(response =>{
//     return response.json();
// }).then(data => {
//     console.log(data);
//     data.forEach(singlePost => {
//         const inner_div = document.createElement("div");
//         inner_div.innerHTML = `<h2>${singlePost.title}</h2> <p>${singlePost.body}</p>`
//         main_div.appendChild(inner_div);
        
//     });
// })

// Post

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"

//     },
//     body: JSON.stringify({
//         title: "Our added title",
//         body: "The body of our first POST method",
//         userId: 101,
//     })      
        
    
// }).then(response =>{
//     return response.json();
// }).then(data => {
//     console.log(data);
// })


// // Error handling and Async/await
// fetch("https://jsonplaceholder.typicode.com/invalid-url")
// .then(response => {
//     if(!response.ok) {
//         throw new Error("Request failed");
//     }

//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(error =>{
//     console.error(error);
// });


// async function loadPosts() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const posts = await response.json();
//         console.log(posts);
//     } catch (error) {
//         console.error(error);
//     }

    

// }

// loadPosts();

// Exercise
