// ### START NG APP ############################################################

var app = angular.module("LocalList", ["LocalStorageModule", "ngAnimate"]);
	
	app.config(["localStorageServiceProvider", function(localStorageServiceProvider){
		localStorageServiceProvider.setPrefix("LocalList");
	}]);



// ### MAIN CONTROLLER #########################################################

app.controller("TasksController", ["$scope", "$filter", "localStorageService", function($scope, $filter, localStorageService){

	// CONTROLS THE VISIBILITY OF THE WELCOME SCREEN
	$scope.old_visitor = localStorageService.get("oldVisitor");
	
	$scope.tasks = localStorageService.get("tasks") || [
		{ id: 1, description: "Add a new task.", completed: false },
		{ id: 2, description: "Here's what a completed task looks like.", completed: true, completedDate: 1454151978339 },
		{ id: 3, description: "Add another task.", completed: false },
		{ id: 4, description: "Ok, add just one more for the fun of it.", completed: false },
		{ id: 5, description: "Don't forget to click the checkbox as soon as you complete the previous tasks.", completed: false },
		{ id: 6, description: "Now refresh the page, go ahead! I'll be here when you come back.", completed: false },
		{ id: 7, description: "Heck! You can even quit the browser and shutdown your computer!", completed: false },
		{ id: 8, description: "Don't forget to resize the window as well.", completed: false },
		{ id: 9, description: "Make some introductory tasks.", completed: true, completedDate: 1454151990466 },
	];



	// ### GET TASKS BY COMPLETED STATE ########################################

	$scope.get_tasks = function(tasks, completed) {
		return $filter("filter")(tasks, { completed: completed });
	};



	// ### ADD NEW TASK ########################################################

	$scope.add_new_task = function(task) {
		//console.log(task);

		if (task) {
			$scope.tasks.push({
				description: task,
				completed: false,
				id: new Date().getTime()
			});

			$scope.new_task = null;
		}
	};



	// ### KEYPRESS EVENT ON TEXT INPUT ########################################
	
	$scope.keypressed_on_new_task = function(event, new_task) {
		//console.log(event);
		
		switch (event.keyCode) {
			case 13: // ENTER
				$scope.add_new_task(new_task);
		    break;
		}
	};
	


	// ### REMOVE TASK #########################################################

	$scope.remove_task = function(task) {
		//console.log("task position ->", $scope.tasks.indexOf(task));
		$scope.tasks.splice($scope.tasks.indexOf(task), 1);
	};



	// ### COMPLETE TASK #######################################################

	$scope.complete_task = function(task) {
		task.completed = true;
		task.completedDate = new Date().getTime();
	};
	
	

	// ### WATCH FOR CHANGES ON TASKS, SAVE ON LOCALSTORAGE ####################

	$scope.$watch("tasks", function(newObj){
		if (newObj) {
			localStorageService.set("tasks", newObj);
		}
	}, true);



	// ### GET STARTED #########################################################
	
	$scope.get_started = function() {
		localStorageService.set("oldVisitor", true);
		$scope.old_visitor = true;
	};
	

}]);
