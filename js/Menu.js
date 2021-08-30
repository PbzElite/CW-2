class Menu  {

    constructor(){
        this.input = createInput("").attribute("placeholder","Enter In Game Name");
        this.joinButton = createButton("Join");
        this.titleImg = createImg("images/title.png");
        this.greeting = createElement("h2");
        this.team1btn = createImg("images/RedButtonTran.png");
        this.team2btn = createImg("images/BlueButtonTran.png"); 
        this.teamrbtn = createImg("images/GrayButtonTran.png");
        this.select = 0;
    }

    setElementsPosition(){

        this.titleImg.position(width/2-180,80);

        this.input.position(width/2-260,300);
        this.input.class("customInput");

        this.team1btn.position(500,400);
        this.team1btn.size(100,100);

        this.team2btn.position(600,400);
        this.team2btn.size(100,100);

        this.teamrbtn.position(700,400);
        this.teamrbtn.size(100,100);

        this.joinButton.position(width/2-75,height/2 + 200);
        this.joinButton.class("customButton");
        this.joinButton.style('background','lightblue');

        this.greeting.position(width/2-200,height/2-100);
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.team1btn.hide();
        this.team2btn.hide();
        this.teamrbtn.hide();
        this.joinButton.hide();
    }

    display(){
        this.setElementsPosition();
        this.team1MousePressed();
        this.team2MousePressed();
        this.teamrMousePressed();
        this.joinMousePressed();
    }

    team1MousePressed(){
        this.team1btn.mousePressed(()=>{
            this.select = 1;
        });
    }

    team2MousePressed(){
        this.team2btn.mousePressed(()=>{
            this.select = 2;
        });
    }

    teamrMousePressed(){
        this.teamrbtn.mousePressed(()=>{
            this.select = Math.round(random(1,2));
        });
    }

    joinMousePressed(){
        this.joinButton.mousePressed(()=>{
            hide();
            var message = ` Hello ${this.input.value()} </br>
            Waiting...`;
            this.greeting.html(message);

                if(this.select === 1){
                    team1Count++;
                }

                else if(this.select === 2){
                    team2Count++;
                }

            player.name = this.input.value();
                
        });
    }
}