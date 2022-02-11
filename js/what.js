function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '59176296884';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    // buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
        let correo = document.querySelector('#correo').value
        let mensaje = document.querySelector('#mensaje').value
        let mensajefinal = 'send?phone=' + telefono + '&text=*Me interesa trabajar contigo*%0A*Mi nombre:*%0A' + nombre + '%0A*Mi correo:*%0A' + correo + '%0A*Mensaje:*%0A' + mensaje + ''
        if(isMobile()) {
            window.open(urlMobile + mensajefinal, '_blank')
        }else{
            window.open(urlDesktop + mensajefinal, '_blank')
        }
        // buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});