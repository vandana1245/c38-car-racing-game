class Form {
    constructor() {
        this.title =createElement("h2");
        this.input = createInput("Name");
        this.button = createButton("PLAY");
        this.greeting = createElement("h3");
    }

    hide() {
        input.hide()
        button.hide()
        greeting.hide()
        title.hide()
    }

    display() {

        this.title.html("Car Racing Game");
        this.title.position(130,160);

        this.input = createInput("Name");
        this.input.position(130,260);

        this.button = createButton("PLAY");
        this.button.position(200,300);

        this.button.mousePressed(()=> {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;

            player.updateCount(playerCount);

            this.greeting.html("Hello" + player.name);
            this.greeting.position(130,100);
        })
    }
}



