const game = () => {
  let pScore = 0;
  let cScore = 0;

  //ゲーム開始
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //じゃんけん
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });

    //コンピュータの手
    const computerOptions = ["rockClick!", "paperClick!", "scissorsClick!"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //コンピューターの出した手
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //勝負
          compareHands(this.textContent, computerChoice);
          //写真の差し替え
          playerHand.src = `./assets/${this.textContent}.jpg`;
          computerHand.src = `./assets/${computerChoice}.jpg`;
        }, 2000);
        //アニメーション
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //テキストのアップデート
    const winner = document.querySelector(".winner");
    //引き分け
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    //グーの場合
    if (playerChoice === "rockClick!") {
      if (computerChoice === "scissorsClick!") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //パーの場合
    if (playerChoice === "paperClick!") {
      if (computerChoice === "scissorsClick!") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    //チョキの場合
    if (playerChoice === "scissorsClick!") {
      if (computerChoice === "rockClick!") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //関数の呼び出し
  startGame();
  playMatch();
};

//ゲーム開始の関数
game();


