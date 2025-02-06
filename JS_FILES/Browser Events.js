// let cach = document.getElementsByClassName("container")[0]
// cach.onclick = () => {
//     let cachb = document.getElementsByClassName("container")[0]
//     cachb.innerHTML = "hellow i am here"//click btn to hellow i am here execute when click btn
// }

let mycolor = ["green", "blue", "orange", "purple", "black", "yellow"]
let colorIndex = 0
document.getElementById("mycont").addEventListener("click", function () {
    document.body.style.backgroundColor = mycolor[colorIndex];

    colorIndex = (colorIndex + 1) % mycolor.length;
})

console.log("mycont");
