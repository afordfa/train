$(document).ready(function(){


	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyBkHsKXSIY2ApTPb9E1rnjEQ0OOT_7WuO8",
		authDomain: "train-ford.firebaseapp.com",
		databaseURL: "https://train-ford.firebaseio.com",
		storageBucket: "train-ford.appspot.com",
		messagingSenderId: "656972178308"
	};
	firebase.initializeApp(config);

	var database = firebase.database();


	var trainName = "";
	var destination = "";
	var firstTrain = "";
	var frequency = 0;
	var nextArrival = "12:30";
	var minutesUntilTrain = 0;


	$(document).on("click", ".submit-button", function(){
		event.preventDefault();
		trainName = $(".name-input").val().trim();
		destination = $(".destination-input").val().trim();
		firstTrain = $(".first-input").val().trim();
		frequency = $(".frequency-input").val().trim();

		$(".name-input").val("");
		$(".destination-input").val("");
		$(".first-input").val("");
		$(".frequency-input").val("");
		console.log(trainName);
		console.log(destination);
		console.log(firstTrain);
		console.log(frequency);


		database.ref().push({
			trainName: trainName,
			destination: destination,
			firstTrain: firstTrain,
			frequency: frequency
 		});
	});



		database.ref().on("child_added", function(snapshot) {

  		console.log(snapshot.val());
  // 		console.log(snapshot.val().trainName);
		// console.log(snapshot.val().destination);
		// console.log(snapshot.val().firstTrain);
		// console.log(snapshot.val().frequency);


		// console.log(snapshot.val().destination);


//create columns - add text
// create row - add columns to row
// add row at the end

		var addTrain = $(".train-schedule");
		var trainRow = $("<tr class= \"train-row\">");
		// trainrow.append("<td class=\"train-data train-data-name\">")
		// .text(snapshot.val().trainName);
		// addTrain.append(trainrow);




		var trainColumnName = $("<td class=\"train-data train-data-name\">")
		.text(snapshot.val().trainName);

		var trainColumnDestination = $("<td class=\"train-data train-data-name\">")
		.text(snapshot.val().destination);

		var trainColumnFirstTrain = $("<td class=\"train-data train-data-firstTrain\">")
		.text(snapshot.val().firstTrain);

		var trainColumnFrequency = $("<td class=\"train-data train-data-frequency\">")
		.text(snapshot.val().frequency);

		var trainColumnNextArrival = $("<td class=\"train-data train-data-next-arrival\">")
		.text(nextArrival);


		var trainColumnMinutesUntilTrain= $("<td class=\"train-data train-data-minutes-until-train\">")
		.text(minutesUntilTrain);

		trainRow.append(trainColumnName);
		trainRow.append(trainColumnDestination);
		trainRow.append(trainColumnFirstTrain);
		trainRow.append(trainColumnNextArrival);
		trainRow.append(trainColumnMinutesUntilTrain);




		addTrain.append(trainRow);

		// addTrain.append("<tr class= \"train-row\">");
		// 	var addTrainName = $(".train-row")
		// 	addTrainName.append("<td class=\"train-data train-data-name\">");
		// 	$(".train-data-name").text(snapshot.val().trainName);

		// 	var addTrainDestination = $(".train-row")
		// 	addTrainDestination.append("<td class=\"train-data train-data-destination\">");
		// 	$(".train-data-destination").text(snapshot.val().destination);

		// 	var addFrequency = $(".train-row")
		// 	addFrequency.append("<td class=\"train-data train-data-frequency\">");
		// 	$(".train-data-frequency").text(snapshot.val().frequency);

		// 	var addFirstTrain = $(".train-row")
		// 	addFirstTrain.append("<td class=\"train-data train-data-firstTrain\">");
		// 	$(".train-data-firstTrain").text(snapshot.val().firstTrain);





		}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});



});




