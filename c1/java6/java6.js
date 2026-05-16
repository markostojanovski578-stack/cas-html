// // Document Object model (DOM)

// // console.log(document);

// // console.dir(document.body);

// // console.dir(document.body.children);

// const h2_name = document.getElementById("name");
// h2_name.innerHTML = "Hello World";
// h2_name.style.color = "red";
// console.dir(h2_name);


// // const box = document.getElementsByClassName("box");
// // console.log(box.length);

// // box = [1, 2, 3, 4]
// // let user = {
// //     test: "test"
// // }
// // console.log(Array.isArray(user))
// // for(let i = 0; i < box.length; i++) {
// //     console.log(box[i]);
// // }

// const box = document.getElementsByClassName("box")
// box[0].style.backgroundColor = "red";
// box[0].style.width = "50px"
// box[0].style.height = "50px"
// console.log(box[0].style);

// const text = document.getElementsByClassName("text")
// text[1].innerHTML= "Changed the second paragraph"
// text[1].style.color = "blue";
// console.log(text);

// // const my_image = document.getElementsByClassName("img");
// // console.log(my_image)

// const my_image = document.querySelector(".sample-image");
// // const my_image = document.querySelectorAll("img");
// my_image.src = "https://picsum.photos/200/300"
// my_image.width = 1000;
// console.log(my_image)

// const programming_language = document.getElementById("prog-language")
// const button = document.querySelector("button");

// console.log(programming_language)
// console.log(button);

// button.addEventListener("click", function() {
//     programming_language.innerHTML = "Python";

// })


// const main_paragraph = document.querySelector(".main-paragraph")
// const paragraph_button = document.querySelector(".paragraph_button")

// let count = 0;

// paragraph_button.addEventListener("click", () =>{
//     count++;
//     // main_paragraph.innerHTML = "This is a button was clicked " + count + "times";
//     main_paragraph.innerHTML= `This button was clicked ${count} times`;
// })


// const changer= document.querySelector(".changer");
// const link= document.querySelector(".link");

// changer.addEventListener("click", () => {
//     // link.classList.add("new-class");
//     link.classList.toggle("new-class");
// });

const h2 = document.createElement("h2");
h2.textContent = "Hello World";
document.body.appendChild(h2);
console.log(h2);

let colors = ["Red", "Green", "Blue"];

const ul = document.createElement("ul");

for(let i=0; i < colors.length; i++) {
    const li=document.createElement("li");
    li.textContent = colors[i];
    ul.appendChild(li);
}

document.body.appendChild(ul);

let movies = ["Rushmore" , "His Girl Friday", "F for Fake", "A Matter of life and death"]

const table = document.createElement("table");
const row = document.createElement("tr")

for(let i = 0; i < movies.length; i++) {
    const cell = document.createElement("td");
    cell.textContent = movies[i];
    row.appendChild(cell);

}

table.appendChild(row);
document.body.appendChild(table);
 




