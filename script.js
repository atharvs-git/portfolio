function toggleTheme() {
    let body = document.body
    let btn = document.getElementById("themeBtn")
    
    if (body.style.backgroundColor === "white") {
        body.style.backgroundColor = "#0a0a0a"
        body.style.color = "#e0e0e0"
        btn.textContent = "Switch to Light Mode"
        document.querySelector("h1").style.color = "#ffffff"
        document.querySelector("h2").style.color = "#ffffff"
        let items = document.querySelectorAll("li")
        items.forEach(function(item) {
            item.style.backgroundColor = "#1a1a1a"
            item.style.color = "#ccc"
            
        })
    } else {
        body.style.backgroundColor = "white"
        body.style.color = "#333"
        btn.textContent = "Switch to Dark Mode"
        document.querySelector("h1").style.color = "#1a1a1a"
        document.querySelector("h2").style.color = "#1a1a1a"
        let items = document.querySelectorAll("li")
        items.forEach(function(item) {
            item.style.backgroundColor = "#f0f0f0"
            item.style.color = "#333"
        })
    }
}