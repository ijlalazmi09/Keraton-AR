        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.card');
            
            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.2}s`;
                card.classList.add('fade-in');
            });

        });

        gsap.from("h2",{
                opacity:0,
                duration:1,
                x:-30,
                delay:1
        })

        gsap.from("p",{
            opacity:0,
            duration:1,
            y:30,
            delay:1
        })
