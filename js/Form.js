class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
  }
  hide(){
  this.button.hide();
  this.greeting.hide();
  this.input.hide();

  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(300, 0);
    
    
    this.input.position(300, 160);
    this.button.position(300, 200);

    this.button.mousePressed(function(){
   this.input.hide();
   this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.update();
      player.index = playerCount;
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name);
      this.greeting.position(130, 160)
    });

  }
}
