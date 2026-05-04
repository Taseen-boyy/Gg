async function startClone() {
    const urlInput = document.getElementById('urlInput').value;
    const statusDiv = document.getElementById('status');

    if (!urlInput) {
        statusDiv.innerText = "Please enter a URL!";
        return;
    }

    statusDiv.innerText = "Cloning in progress...";

    try {
        const response = await fetch("https://cloner.taseen.ggff.net/clone", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url: urlInput })
        });

        const data = await response.json();

        if (data.success) {
            statusDiv.innerText = "Success: " + data.message;
        } else {
            statusDiv.innerText = "Error: " + data.error;
        }
    } catch (error) {
        console.error("Error:", error);
        statusDiv.innerText = "Failed to connect to the server. Check Console (F12).";
    }
}