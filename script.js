let p = document.querySelector("h5");
let btn = document.querySelector(".Add");

let flag = 0;
btn.addEventListener("click",()=>{

        p.innerText = "Everything";
        btn.innerText = "Friend Added";

})

let btn2 = document.querySelector(".remove");
btn2.addEventListener("click",()=>{

        p.innerText = "stranger";
        btn.innerText = "Add Friend";
})