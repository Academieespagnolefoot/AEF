
var header = null;

window.addEventListener("load", init)

function init () {

    header = document.querySelector('#header')

    initLinksTopPosition();
}

function initLinksTopPosition () {

    let links = document.querySelectorAll('a[href^="#"]')

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault()

            var targetId = link.getAttribute('href')
            var target = document.querySelector(targetId)
            var menuHeight = header.offsetHeight

            if (target) {
                var targetPosition = target.offsetTop - menuHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' })
            }
        })
    })
}