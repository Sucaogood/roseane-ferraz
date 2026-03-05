const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
});


document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const box = button.parentElement;

        document.querySelectorAll(".faq-box").forEach(item => {
            if (item !== box) item.classList.remove("active");
        });

        box.classList.toggle("active");
    });
});

const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Mensagem enviada com sucesso 💙");
    });
}

const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('shrink', window.scrollY > 40);
    });
}

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}