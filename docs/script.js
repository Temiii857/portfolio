window.addEventListener("DOMContentLoaded", init, false);

function init() {
    const animatedItems = document.querySelectorAll(
        ".gallery-header, .project, .reflection-header, .content, .resume-section, .about-profile, .about-section, .fun-facts-section, .floating-image, .small-image, .hello-kitty-image, .project-image"
    );

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.02,
        rootMargin: "0px 0px -40px 0px"
    });

    animatedItems.forEach(item => {
        item.classList.add("scroll-animate");
        observer.observe(item);
    });
}