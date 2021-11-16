(function() {
    const navList = document.querySelector("#nav-list");

    const pulseItems = document.querySelectorAll(".pulseItem");
   
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.9
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach( entry => {
            const card = entry.target;

            if(entry.isIntersecting) {
                card.classList.add('pulse');
                return;
            }

            card.classList.remove('pulse');
        });
    }, options);
    
    pulseItems.forEach( pulseItem => {
        observer.observe(pulseItem);
    });

    function getResolution() {
        if(window.innerWidth <= 1025) {
            navList.classList.add('none');
            
        } else {
            navList.classList.remove('none');
        }
        
    };


    window.addEventListener('resize', getResolution);




})()

// const services = document.querySelectorAll(".service")

// const options = {
//     root: null, //viewport
//     threshold: 0.25,
//     rootMargin: "0px"
// }

// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         console.log(entry);
//     });
// }, options)

// services.forEach( service => {
//     observer.observe(service)
// })

