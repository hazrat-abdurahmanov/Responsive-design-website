const menuBtn = document.querySelector('#menu-btn')
const container = document.querySelector('.container')

let showMenu = false;
const showbar = () => {
    if (!showMenu) {
        menuBtn.classList.add("close")
        container.classList.add('change')

        showMenu = true;
    } else {
        menuBtn.classList.remove("close")
        container.classList.remove('change')

        showMenu = false
    }
}
menuBtn.addEventListener('click', showbar)


window.onload = () => {
    setTimeout(() => {
        document.querySelector('body').classList.add('display')
    }, 3000)
}

const upBtn = document.querySelector('.up-btn')
const html = document.querySelector('html')
upBtn.addEventListener('click', () => {
    html.style.scrollBehavior = 'smooth'
})


const btn = document.getElementById('button');
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_86idfax';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            alert('Sent!');
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
  
});

