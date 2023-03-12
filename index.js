let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "Somu Ravinder",
    age: 25
};


let profileContainerElement = document.getElementById("profileContainer")
profileContainerElement.classList.add("profile-container", "text-center" , "d-flex" , "flex-column","justify-content-center" )

let imgContainerElement = document.getElementById("imgContainer")

let imageElement = document.createElement("img")
console.log(imageElement)
imageElement.setAttribute("src" , profileDetails.imgSrc)
imgContainerElement.appendChild(imageElement)


let headingElement = document.createElement("h1")
headingElement.classList.add("heading")
headingElement.textContent = profileDetails.name 
imgContainerElement.appendChild(headingElement)

let ageElement = document.createElement("p")
console.log(ageElement)
ageElement.textContent = "AGE :" + profileDetails.age 
imgContainerElement.appendChild(ageElement)

