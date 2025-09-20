// Example: Alert when "shop Now" is clicked
document.addEventListener("DOMContentLoaded", () => {
    const shopBtn =
    document.querySelector(".btn");
    if (shopBtn) {
        shopBtn.addEventListener("click", ()=> {
        alert("Redirecting to shop page...");
    });
    }
});
