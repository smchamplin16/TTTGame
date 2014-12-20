var squares = [];
    var SIZE = 3;
    var EMPTY = "nbsp;";
    var score;
    var moves;
    var turn = "X";
    var wins = [7, 56, 448, 73, 146, 292, 273, 84];
    
    
    function newGame(){
      turn = "X";
      score = {"X": 0, "O": 0};   //js object "score" has an X and O element
      moves = 0;
      squares.forEach(function(square){square.html(EMPTY);});
    };
    
    
    function win(score){
      for (var i = 0; i < wins.length; i++){
        // checks for win situation - single "&" is for bitwise AND (will only execute if all bits match)
        if((win[i] & score) === wins[i]){
          return true;
        };
      };
      return false;
    }
    
    
    function set(){
      if ($(this).html() !== EMPTY){
        return;
      };
      
      $(this).html(turn);
      console.log($(this));
      moves += 1;
      score[turn] += $(this)[0].indicator;
      if (win(score[turn])){
        alert(turn + " wins!");
        newGame();
      } else if (moves == SIZE * SIZE){  // checks if the number of moves = number of spaces (board is full)
        alert("Game Over!");
      } else {  // changes player
        if (turn == "X"){
          turn = "O";
        } else if (turn == "O"){
          turn = "X";
        };
      };
    };
    
    function play(){
      var board = $("<table border=1 cellspacing=0>"), indicator = 1;  // creates board
      for (var i = 0; i < SIZE; i++){
        var row = $("<tr>");  // creates SIZE rows
        board.append(row);
        for (var j = 0; j < SIZE; j++){
          var cell = $("<td height=50 width=50 align=center valign=center></td>") // 
          cell[0].indicator = indicator;
          cell.click(set);
          row.append(cell);
          squares.push(cell);
          indicator += indicator
        }
      }
      
      $(document.getElemengtByID("tictactoe") || document.body).append(board);
      newGame();
      
    };
    
  //var x = document.createElement("tictactoe");
  
   //boolean X = false;
    //boolean O = false;
    
    /*
    <button onclick="chooseX()">X</button>
  <button onclick="chooseO()">O</button>
  
  <h1 onclick="mark(this)">___</h1>
  
  
  <input type='text' id='name' placeholder='Name'>
  
  <input type='text' id='xin' placeholder='X (0-2)'>
  <input type='text' id='yin' placeholder='Y (0-1)'>
  
  <input type='text' id='marker' placeholder='Marker'>
    
    tableRef.set({
      row1: "|    | "
      
    })
    
    function chooseX(){
      X = true;
      tableRef.update
      return " X "
    }
    
    function chooseO(){
      O = true;
      return " O "
    }
    
    function mark(id){
      if (X == true){
        id.innerHTML = chooseX();
      } else if (Y == true){
        id.innerHTML = chooseO();
      }
    }
    
    tableRef.on
    
    /*$('#yin').keypress(function (e){
      if (e.keyCode == 13){
        var x = $('#xin').val();
        var y = $('#yin').val();
        
        if (x == 0){
          if (y == 0){
           tableRef.set() 
          }
          if (y == 1){
            
          }
        }
      }
    }
    tableRef.set()*/