document.getElementById("mysubmit").onclick = function(){
    let username = document.getElementById("user").value;
    let message = document.getElementById("message").value;

    document.getElementById("1").textContent = 'HELLO ' + username;
    document.getElementById("2").textContent = message;

    // Send message to Node.js server
    fetch("http://localhost:3000/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
};
