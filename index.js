let myNewTitle = document.getElementById("title");
myNewTitle.innerText ="Nuovo titolo";

let myNewBackground = document.getElementById("body");
myNewBackground.style.background = "red";

let myNewAddress = document.getElementById("address");
myNewAddress.innerText = "Janus Shop - Via Tartaglia 5, Milano";

let myA = document.getElementsByTagName("a");
for (let i = 0; i < myA.length; i++) {
      myA[i].classList.add("test");
  }

let myImg = document.getElementsByTagName("img");
for (let i = 0; i < myImg.length; i++) {
myImg[i].classList.toggle("hidden");
}

let myPrice = document.getElementsByClassName("price");
for (let i = 0; i < myPrice.length; i++){
myPrice[i].style.color = "white";
}