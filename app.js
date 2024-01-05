const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show")
            entry.target.classList.add("show-side")
        } else{
            entry.target.classList.remove("show")
            entry.target.classList.remove("show-side")
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-side, .hidden');
hiddenElements.forEach((el) => observer.observe(el));

