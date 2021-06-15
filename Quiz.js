class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
    
    question = new Question();
    question.display();
  }
}
play(){
  //write code here to hide question elements
  //question.hide();
  //write code to change the background color here
  background("yellow")
  //write code to show a heading for showing the result of Quiz
  textFont("CASTELLAR");
  textSize(35);
  fill("green")
  textAlign(CENTER)
  text("Result of the quiz: ",width/2,75);
  //call getContestantInfo( ) here
  //write condition to check if contestantInfor is not undefined
  Contestant.getPlayerInfo();
  //write code to highlight contest who answered correctly
  if(allContestants !== undefined){
    var display_Answers = 230
    fill("blue");
    textAlign(CENTER);
    textFont("Algerian");
    text("Contestants who answered correctly are highlighted in 'green' color!")
  for(var plr in allContestants){
    var correctAns = "2";
    if(correctAns === allContestants[plr].answer){
      fill("green");
    }
    else 
        fill("red")
        display_Answers+=30
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, width/2,display_Answers);
    }
  }
  }
  
}
