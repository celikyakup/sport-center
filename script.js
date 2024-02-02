const buttons=document.querySelectorAll(".btns>button")

const btnTexts=document.querySelectorAll("section.btn-text")



buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const btnId = e.target.id.split("-")[1];

        btnTexts.forEach(text => {
            const textId = text.id.split("-")[1];
            if (textId === btnId) {
                text.classList.add("active");
                button.classList.add("buttn-focus");
                
            } else {
                let correspondingButton = null;
                for (const btn of buttons) {
                    if (btn.id.split("-")[1] === textId) {
                        correspondingButton = btn;
                        break;
                    }
                }

                if (correspondingButton) {
                    correspondingButton.classList.remove("buttn-focus");
                }

                text.classList.remove("active");
            }
        });
    });
});


let sliderDom = document.querySelector(".slider");
let heightInput = document.querySelector(".height");
let weightInput = document.querySelector(".weight");

const calculateBMI = () => {
  const weight = weightInput.value;
  const height = heightInput.value;
  if (!!weight && !!height) {
    const bmi = weight / ((height / 100) * (height / 100));
    if (bmi < 18.9) {
      sliderDom.value = 1;
    } else if (bmi < 24.9) {
      sliderDom.value = 2;
    } else if (bmi < 29.9) {
      sliderDom.value = 3;
    } else if (bmi < 34.9) {
      sliderDom.value = 4;
    } else {
      sliderDom.value = 5;
    }
  }
};
weightInput.addEventListener("input", (e) => {
  calculateBMI();
});

heightInput.addEventListener("input", () => {
  calculateBMI();
});

const navbar=document.querySelector(".navbar")

document.addEventListener("scroll",()=>{
    navbar.classList.add("nav-scroll")
    
    if(window.scrollY===0){
        navbar.classList.remove("nav-scroll")
    }
})
