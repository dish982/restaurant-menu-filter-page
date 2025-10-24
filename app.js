const tabs = document.querySelectorAll(".tab");
const categories = document.querySelectorAll(".category")


tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const filter = tab.id;
        tabs.forEach(tab => tab.classList.remove("active"));
        tab.classList.add("active");
        categories.forEach(category => {
            if(filter == "fullMenu" || category.classList.contains(filter)){
                category.style.display= "block";
            }
            else {
                category.style.display = "none";
            }
        });
    });
});