// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.rankRed = functions.database.ref('/requestRanking')
    .onWrite(event => {
    	const ref = event.data.ref.parent;
    	var team = {
    		name:"red",
    		score:0,
    		meanScore:0,
    		playerCount:0
    	};
    	const users = ref.child('user').once('value').then(function(snapshot) {
			snapshot.forEach(function(childSnapshot) {

			  var childData = childSnapshot.val();
			  if(childData.team === "red"){
			  	team.score += childData.clickCount;
			  	team.playerCount++;
			  }
		  });
		  team.meanScore = (team.score / team.playerCount);
		  return ref.child('team').child(team.name).set(team);
		});
    });
    
exports.rankBlue = functions.database.ref('/requestRanking')
    .onWrite(event => {
    	const ref = event.data.ref.parent;
    	var team = {
    		name:"blue",
    		score:0,
    		meanScore:0,
    		playerCount:0
    	};
    	const users = ref.child('user').once('value').then(function(snapshot) {
			snapshot.forEach(function(childSnapshot) {

			  var childData = childSnapshot.val();
			  if(childData.team === "blue"){
			  	team.score += childData.clickCount;
			  	team.playerCount++;
			  }
		  });
		  team.meanScore = (team.score / team.playerCount);
		  return ref.child('team').child(team.name).set(team);
		});
    });
    
exports.rankYellow = functions.database.ref('/requestRanking')
    .onWrite(event => {
    	const ref = event.data.ref.parent;
    	var team = {
    		name:"yellow",
    		score:0,
    		meanScore:0,
    		playerCount:0
    	};
    	const users = ref.child('user').once('value').then(function(snapshot) {
			snapshot.forEach(function(childSnapshot) {

			  var childData = childSnapshot.val();
			  if(childData.team === "yellow"){
			  	team.score += childData.clickCount;
			  	team.playerCount++;
			  }
		  });
		  team.meanScore = (team.score / team.playerCount);
		  return ref.child('team').child(team.name).set(team);
		});
    });
