function wordClicked(word) {
    if (counter < adjectives.length) {
        adjectives[counter] = word;
        counter++;
        updateView();
    }
}