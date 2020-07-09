//factory function for creating candidates
var createPolitician = function(name, partyColor) {
  
  var politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor =  partyColor;
  
   return politician;
};


var jack = createPolitician("Jack Handy", [132, 17, 11]);
var oliver = createPolitician("Oliver Closoff", [245, 141, 136]);

jack.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2]

oliver.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1]

jack.electionResults[9] = 1;
oliver.electionResults[9] = 28;

jack.electionResults[4] = 17;
oliver.electionResults[4] = 38;

jack.electionResults[43] = 11;
oliver.electionResults[43] = 27;


// method for tallying votes, add to factory function above return statement
jack.tallyUpTotalVotes = function()
{
    this.totalVotes = 0;
  
    for (var i = 0; i < this.electionResults.length; i++)
      {
        this.totalVotes = this.totalVotes + this.electionResults[i];
        
      }
};

oliver.tallyUpTotalVotes = function()
{
    this.totalVotes = 0;
  
    for (var i = 0; i < this.electionResults.length; i++)
      {
        this.totalVotes = this.totalVotes + this.electionResults[i];
        
      }
};



var setStateResults = function(state){
  
  theStates[state].winner = null;
  
    if (jack.electionResults[state] > oliver.electionResults[state]){
      theStates[state].winner = jack;
    }else if
      (jack.electionResults[state] < oliver.electionResults[state]){
      theStates[state].winner = oliver;
    }
  
  var stateWinner = theStates[state].winner;
  
  if (stateWinner !== null){
    theStates[state].rgbColor = stateWinner.partyColor; 
  } else {
    theStates[state].rgbColor = [11,32,57];
  }

var countryInfoTable = document.getElementById("countryResults");
var row = countryInfoTable.children[0].children[0];


row.children[0].innerText = jack.name;
row.children[1].innerText = jack.totalVotes;
row.children[2].innerText = oliver.name;
row.children[3].innerText = oliver.totalVotes;
row.children[5].innerText = winner;


var stateInfoTable = document.getElementById("stateResults");
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];


stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

candidate1Name.innerText = jack.name;
candidate2Name.innerText = oliver.name;

candidate1Results.innerText = jack.electionResults[state];
candidate2Results.innerText = oliver.electionResults[state];

if (theStates[state].winner === null){
  winnersName.innerText = "DRAW";
} else { 
  winnersName.innerText = theStates[state].winner.name;
}

};




// calling the method for each politician, add below the code that updates the electionResults arrays
jack.tallyUpTotalVotes();
oliver.tallyUpTotalVotes();


var winner = "???";

if (jack.totalVotes > oliver.totalVotes){
  winner = jack.name;
}else if (jack.totalVotes < oliver.totalVotes){
  winner = oliver.name;
}else{
  winner = "DRAW."
}















