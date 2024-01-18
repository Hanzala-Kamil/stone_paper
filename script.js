let gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

let userScore = 0;
let cpuScore = 0;

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "rock.png";
    result.textContent = "Wait...";

    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      let imageSrc = e.target.querySelector("img").src;

      userResult.src = imageSrc;

      let randomNumber = Math.floor(Math.random() * 3);

      let cpuImages = ["rock.png", "paper.png", "scissors.png"];

      cpuResult.src = cpuImages[randomNumber];

      let cpuValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];

      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };

      let outComeValue = outcomes[userValue + cpuValue];

      if (userValue === cpuValue) {
        result.textContent = "Match Draw";
      } else {
        result.textContent = `${outComeValue} Won!!`;
        if (outComeValue === "User") {
          userScore++;
        } else if (outComeValue === "Cpu") {
          cpuScore++;
        }
      }

      updateScore();
    }, 800);
  });
});

function updateScore() {
  document.querySelector(".score").textContent = `User: ${userScore} - CPU: ${cpuScore}`;
}
