const logoutIconThreeDot = $('.header__user-logout')
const logout = $('.user-logout')

logoutIconThreeDot.onclick = function(e) {
    e.stopPropagation()
    logout.classList.toggle('open')
    if(logout.classList.contains('open')) {
        document.onclick = function(event) {
            if(!logout.contains(event.target)) {
                logout.classList.remove('open')
            }
        }
    }
}

logout.onclick = function(e) {
    e.stopPropagation()
}