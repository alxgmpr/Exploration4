angular
	.module("mvc", [])
	.controller("bookCtrl", function($scope) {
		$scope.data = books = [];
		
		try {
			books = $scope.getFromLocalStorage();
		} catch (e) {
			console.log(e);
		}
		
		$scope.getTotalBooks = function(){
			return $scope.data.length; 
		};
		
		$scope.getFromLocalStorage = function(){
			return JSON.parse(localStorage.getItem("booksmvc") || '[]');
		};

		$scope.saveToLocalStorage = function(books) {
			localStorage.setItem("booksmvc", JSON.stringify(books));
		};
		
		$scope.addBook = function(){
			 $scope.data.push({
				isbn: $scope.isbn,
				name: $scope.name,
				author: $scope.author,
				publisher: $scope.publisher,
				year: $scope.year,
				type: $scope.type,
				edition: $scope.edition,
				stock: $scope.stock  
    		})
    		$scope.saveToLocalStorage(books);
		};
		
		$scope.removeBook = function(book) {
			var index = $scope.data.indexOf(book);
	  		$scope.data.splice(index, 1); 
	  		$scope.saveToLocalStorage(books);
		};
		
		
	});    
