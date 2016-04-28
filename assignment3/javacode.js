angular.module('MyControllerModule', [])

.controller('MyStudentController', function(StudentReportCard) {
	var self = this;
	self.studentProfilename = new StudentReportCard(self.studentName);
	

	self.onAddClick = function(){

		self.studentProfilename.addAssignment(self.studentAssignment.assignmentName,self.studentAssignment.assignmentGrade);
		self.studentAssignment.assignmentName ='';
		self.studentAssignment.assignmentGrade = '';

		self.studAverage = self.studentProfilename.average();
		self.studGrade = self.studentProfilename.grade(self.studAverage);
		self.studPass = self.studentProfilename.pass(self.studGrade);


	};


	self.onRemoveClick = function(index){

		self.studentProfilename.removeAssignment(index);

		self.studAverage = self.studentProfilename.average();
		self.studGrade = self.studentProfilename.grade(self.studAverage);
		self.studPass = self.studentProfilename.pass(self.studGrade);

	};

})





.factory('StudentReportCard', function(MathExpressionsCalc) {

	function StudentReportCard(name) {
	    this.student = name;
	    this.studentAssignment = [];
	}

	
	StudentReportCard.prototype.addAssignment = function(name, grade) {
		 var mynewAssignment = {
		 	assignmentName:name,
		 	assignmentGrade: grade
		 }

	     this.studentAssignment.push(mynewAssignment);
 
	}


	StudentReportCard.prototype.removeAssignment = function(index) {
		 
	     this.studentAssignment.splice(index, 1);
 
	}


	StudentReportCard.prototype.average = function() {
		var myAvg = 0;
	     
	    for (var i = 0; i < this.studentAssignment.length ; i++) {
            myAvg = parseInt(this.studentAssignment[i].assignmentGrade) + myAvg;
        }
        myAvg = myAvg/this.studentAssignment.length;
        return myAvg;
 	}


 	StudentReportCard.prototype.grade = function(avg) {
		
		if (avg>=90) {return 'A+'
		} else if (avg>=80 && avg<90) {
			return 'A'
		} else if (avg>=70 && avg<80) {
			return 'B+'
		} else if (avg>=60 && avg<70) {
			return 'B'
		} else if (avg>=50 && avg<60) {
			return 'C+'
		} else if (avg>=40 && avg<50) {
			return 'C'
		} else if (avg<40) {
			return 'F'
		};
	}

	StudentReportCard.prototype.pass = function(pass) {
		
		if (pass == 'F') {
			return 'No'
		} else { 
			return 'Yes'
		};
	}


	return StudentReportCard;
})




.service('MathExpressionsCalc', function() {
	var self = this;

	function myPrivateFunc() {

	}

	var myPrivateObject = {
		hello: 'world'
	}

	self.calculateSum = function(a, b) {
		return a + b;
	};

	self.getMax = function(a, b) {
		if (a>b) {
			return a;
		} else {
			return b;
		}
	};

});

