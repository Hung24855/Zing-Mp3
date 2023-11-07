const settingBtn = $('.header__setting-setting-btn')
const menuNav = $('.header__setting-menu')

// handle click setting btn
settingBtn.onclick = function(e) {
    e.stopPropagation()

    menuNav.classList.toggle('open')
    if(menuNav.classList.contains('open')) {
        document.onclick = function(event) {    
            if(!menuNav.contains(event.target)) {
                menuNav.classList.remove('open')
            }
            else
            {
                console.log(1)
            }
        }
    }

}

// handle click inside menuNav

menuNav.onclick = function(e) {
    e.stopPropagation()
}