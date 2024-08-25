function submitConfession() {
    const confessionText = document.getElementById("confession").value;
    if (confessionText.trim() !== "") {
        const confessionList = document.getElementById("confession-list");
        const confessionItem = document.createElement("p");
        confessionItem.textContent = confessionText;
        confessionList.appendChild(confessionItem);
        document.getElementById("confession").value = "";
        createHeartSpam();
    } else {
        alert("Please write something before submitting!");
    }
}

function createHeartSpam() {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement("span");
        heart.textContent = "❤️";
        heart.classList.add("heart-emoji");
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}