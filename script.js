const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const lineContainer = document.querySelector(".lineContainer");
const backgroundContainerTag = document.querySelector(".backgroundContainer");
const liTag = document.getElementsByClassName("li-a");

const forgetPassword = () => {
  alert("Forgot Password ");
};
const signIn = () => {
  alert("You Need To Sing In");
};

lineContainer.addEventListener("click", () => {
  if (lineContainer.classList.contains("openTag")) {
    line1.classList.remove("plusDegree");
    line2.classList.remove("opacityZero");
    line3.classList.remove("minusDegree");
    lineContainer.classList.remove("openTag");
    backgroundContainerTag.style.opacity = "0";
    for (let i = 0; i < liTag.length; i++) {
      liTag[i].classList.remove("moveListUp");
    }
  } else {
    line1.classList.add("plusDegree");
    line2.classList.add("opacityZero");
    line3.classList.add("minusDegree");
    lineContainer.classList.add("openTag");
    backgroundContainerTag.style.opacity = "1";
    for (let i = 0; i < liTag.length; i++) {
      liTag[i].classList.add("moveListUp");
    }
  }
});
