const token = localStorage.getItem('token')

function validaLogin() {
    if(!token){
        window.location.href="/"
    }
}