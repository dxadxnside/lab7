function website() {
    document.addEventListener("DOMContentLoaded", create);
    function create() {
        let ans = ["Так", "Ніт", "Можливо", "Дай бог", "Спитай пізніш", "Йди своєю дорогою сталкер", "50/50", "Ймовірно", "Обов'язково", "Ніколи у житті", "Без сумнівів", "Хз", "404"];
        let hold = document.createElement("div");
        hold.classList.add("holder");
        
        let labName = document.createElement("h1");
        labName.innerHTML = "Магічна куля передбачень";
        hold.appendChild(labName);
        hold.appendChild(document.createElement("br"));
        
        let inputField = document.createElement("input");
        inputField.type = "text";
        inputField.classList.add("question");
        hold.appendChild(inputField);
        hold.appendChild(document.createElement("br"));
        
        let balls = document.createElement("img");
        balls.classList.add("magicBall");
        balls.src = "img/Untitled-2.png";
        balls.alt = "Куля";
        balls.style = "border-radius: 50%;"
        hold.appendChild(balls);
        hold.appendChild(document.createElement("br"));
        
        let ask = document.createElement("button");
        ask.classList.add("askButton");
        ask.innerHTML = "Запитати";
        hold.appendChild(ask);
        hold.appendChild(document.createElement("br"));
        
        let answer = document.createElement("div");
        answer.classList.add("answer");

        hold.append(answer);
        hold.appendChild(document.createElement("br"));
        
        document.body.appendChild(hold);

        ask.addEventListener("click", function () { 
            let question = inputField.value.trim();
            answer.textContent = question ? ans[Math.floor(Math.random() * ans.length)] : "Будь ласка, введіть запитання!";
        });
    }
}
website();й