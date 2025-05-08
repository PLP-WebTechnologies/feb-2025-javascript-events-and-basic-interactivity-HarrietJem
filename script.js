document.getElementById("rideForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let pickup = document.getElementById("pickup").value;
    let destination = document.getElementById("destination").value;
    let email = document.getElementById("email").value;

    if (!pickup || !destination || !email) {
        alert("Please fill in all fields!");
        return;
    }

    let fareEstimate = Math.floor(Math.random() * 500) + 100; 
    document.getElementById("fareResult").innerText = `Estimated Fare: Ksh ${fareEstimate}`;
});

document.getElementById("showEco").addEventListener("click", function() {
    let ecoList = document.getElementById("ecoList");
    ecoList.style.display = (ecoList.style.display === "none") ? "block" : "none";
});
