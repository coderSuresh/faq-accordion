var question = document.querySelectorAll(".faq");

question.forEach(acc => {
    acc.onclick = () => {
        question.forEach(subAcc => {
            subAcc.classList.remove("active");
        });
        acc.classList.add("active");
    }
});