// RGB
const rgbBtn = document.getElementById("btn6");
const closeBtn = document.getElementById("close");
rgbBtn.addEventListener('click', function () {
    document.body.classList.add("rgb");
    rgbBtn.style.display = "none";
    closeBtn.classList.add("show")
    closeBtn.classList.remove("hide")
});
closeBtn.addEventListener("click", function () {
    document.body.classList.remove("rgb");
    closeBtn.classList.add("hide")
    closeBtn.classList.remove("show")
    rgbBtn.style.display = "block";
})
