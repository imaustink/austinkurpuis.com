document.addEventListener("DOMContentLoaded", function(event) {
    function getId(id){
        return document.getElementById(id);
    }

    var BUTTON = getId('BurgerMenu');
    var LIST = getId('NavList');
    var show = false;

    BUTTON.addEventListener('mouseup', function(e){
        if(show = !show) return LIST.classList.remove('collapse');
        LIST.classList.add('collapse');
    });
});

particlesJS('Particles', {
    "particles": {
        "number": {
            "value": 76,
            "density": {
                "enable": true,
                "value_area": 1400
            }
        },
        "color": {
            "value": "#333333"
        },
        "shape": {
            "type": "triangle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 250,
            "color": "#a9a9a9",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 1657.2100474277727,
                "rotateY": 1341.5509907748635
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
            "events": {
            "onhover": {
                "enable": false,
                "mode": "grab"
            },
            "onclick": {
                "enable": false,
                "mode": "remove"
            },
            "resize": true
            },
            "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});