class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
   // var title = createElement('h2')
    this.title.html("Car Racing Game");
    
   this.title.position(this.displayWidth/2-50,0);

    this.input.position(this.displayWidth/2-40,this.displayHeight/2-80);
    this.button.position(this.displayWidth/2+30,this.displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(this.displayWidth/2-70,this.displayHeight/4);
    });

  }
}
