// ### START NG APP ############################################################

var app = angular.module("LocalList", []);



// ### MAIN CONTROLLER #########################################################

app.controller("TasksController", ["$scope", "$filter", function($scope, $filter){
	
	$scope.tasks = [
		// { description: "Add responsiveness to your layout", completed: true, completedDate: 1424649600000 },
		// { description: "List all the tasks from localstorage", completed: false, completedDate: 0 },
		// { description: "Add new tasks, inject them into localstorage as well", completed: false, completedDate: 0 },
		// { description: "Create a GitHub project to host the project", completed: true, completedDate: 1423785600000 },
		// { description: "Create usefull CSS classes", completed: true, completedDate: 1438902000000 },
		// { description: "Complete a task", completed: false, completedDate: 0 },
		// { description: "Add a way to show completed tasks", completed: true, completedDate: 1453248000000 },
		// { description: "Add keyboard shortcuts if you have time", completed: false, completedDate: 0 },
		// { description: "Dedicate some time polishing the layout and animating", completed: false, completedDate: 0 }
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
	
	

}]);
