async function sendToHelix() {
    const token = document.getElementById('token').value;
    const sourceId = document.getElementById('sourceId').value;
    const destId = document.getElementById('destId').value;
    const type = document.getElementById('cloneType').value;
    const consoleDiv = document.getElementById('live-console');

    if (!token || !sourceId || !destId) {
        consoleDiv.innerHTML = "> Error: Missing Fields!";
        return;
    }

    consoleDiv.innerHTML = "> Connecting to Helix Clouds...<br>";

    try {
        const response = await fetch("http://cloner.taseen.ggff.net/clone", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token, sourceId, destId, type })
        });

        if(response.ok) {
            consoleDiv.innerHTML += "> Request Received!<br>";
            consoleDiv.innerHTML += "> [INFO] Starting Clone...<br>";
            setTimeout(() => { consoleDiv.innerHTML += "> [OK] Roles Cloned.<br>"; consoleDiv.scrollTop = consoleDiv.scrollHeight; }, 3000);
            setTimeout(() => { consoleDiv.innerHTML += "> [INFO] Creating Channels...<br>"; consoleDiv.scrollTop = consoleDiv.scrollHeight; }, 6000);
            setTimeout(() => { consoleDiv.innerHTML += "> 🟢 Process Finished!"; consoleDiv.scrollTop = consoleDiv.scrollHeight; }, 12000);
        }
    } catch (err) {
        consoleDiv.innerHTML += "> 🔴 Connection Error! Check Helix Status.<br>";
    }
}
