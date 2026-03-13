function updateView() {
    app.innerHTML = /*HTML*/ `
            <h1>Adjective Story</h1>
            
            <p>This text ${adjectives[0]} ${adjectives[1]} ${adjectives[2]} all words. It is your ${adjectives[3]} to put ${adjectives[4]} where they ${adjectives[5]}.</p>
            <button onclick="wordClicked('them')">them</button>
            <button onclick="wordClicked('not')">not</button>
            <button onclick="wordClicked('does')">does</button>
            <button onclick="wordClicked('job')">job</button>
            <button onclick="wordClicked('include')">include</button>
            <button onclick="wordClicked('belong')">belong</button>
            `;
}
updateView();