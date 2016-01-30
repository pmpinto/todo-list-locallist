// ### START NG APP ############################################################

var app = angular.module("LocalList", []);



// ### MAIN CONTROLLER #########################################################

app.controller("TasksController", ["$scope", "$filter", function($scope, $filter){
	
	$scope.tasks = [
		{ description: "Add responsiveness to your layout", completed: true },
		{ description: "List all the tasks from localstorage", completed: false },
		{ description: "Add new tasks, inject them into localstorage as well", completed: false },
		{ description: "Create a GitHub project to host the project", completed: true },
		{ description: "Create usefull CSS classes", completed: true },
		{ description: "Complete a task", completed: false },
		{ description: "Add a way to show completed tasks", completed: true },
		{ description: "Add keyboard shortcuts if you have time", completed: false },
		{ description: "Dedicate some time polishing the layout and animating", completed: false }
	];



	// ### GET TASKS BY COMPLETED STATE ########################################

	$scope.get_tasks = function(tasks, completed) {
		return $filter("filter")(tasks, { completed: completed });
	};



	// ### ADD NEW TASK ########################################################

	$scope.add_new_task = function(task) {
		//console.log(task);
		$scope.tasks.push({
			description: task,
			completed: false
		});

		$scope.new_task = null;
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
	

}]);
