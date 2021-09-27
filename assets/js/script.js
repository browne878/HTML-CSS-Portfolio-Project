document.getElementById('copyright-date').textContent = new Date().getFullYear();

function toggleVisible(trigger) {

    // Switches on trigger ID from element that triggered event
    switch (trigger) {

        // Toggles Support Bot info visibility below 1100px
        case "support-info-toggle":
            var supportModal = document.getElementById("support-info");

            if (supportModal.style.visibility == "visible") {
                supportModal.style.visibility = "hidden";
            } else {
                supportModal.style.visibility = "visible";
            }
            break;
        
        // Toggles RCON Bot info visibilty below 1100px
        case "rcon-info-toggle":
            var rconModal = document.getElementById("rcon-info");

            if (rconModal.style.visibility == "visible") {
                rconModal.style.visibility = "hidden";
            } else {
                rconModal.style.visibility = "visible";
            }
            break;

        // Toggles Event Bot info visibility below 1100px
        case "event-info-toggle":
            var eventModal = document.getElementById("event-info");

            if (eventModal.style.visibility == "visible") {
                eventModal.style.visibility = "hidden";
            } else {
                eventModal.style.visibility = "visible";
            }
            break;
    }
}