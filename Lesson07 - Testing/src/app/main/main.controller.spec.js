(function() {
  'use strict';


  describe('MathCalculator Service Test', function() {
      var toTest;

      beforeEach(module('template'));

      beforeEach(inject(function(_MathCalculator_) {
        toTest = _MathCalculator_;
      }));


      it('should calculate the average correctly', function() {
        var myArray = [100, 50];
        var result = toTest.calcuateAverage(myArray);

        expect(result).toBe(75);
      });
  });

  describe('Person Factory Test', function() {
    var Person;
    beforeEach(module('template'));

    beforeEach(inject(function(_Person_) {
      Person = _Person_;
    }));

    it('should initialize the object correctly', function() {
      var init = {
        fname: 'george',
        lname: 'dagher'
      };

      var result = new Person(init);

      expect(result.fname).toBe('george');

    })
  });

  describe('MainController Test', function() {
    var toTest;

    beforeEach(module('template'));

    beforeEach(inject(function(_$controller_) {
      toTest = _$controller_('MainController')
    }));

    it('should initialize with a greeting', function() {

      expect(toTest.greeting).toBeDefined();
    })
  });























  // describe('controllers', function(){
  //   var vm;
  //   var $timeout;
  //   var toastr;

  //   beforeEach(module('template'));
  //   beforeEach(inject(function(_$controller_, _$timeout_, _webDevTec_, _toastr_) {
  //     spyOn(_webDevTec_, 'getTec').and.returnValue([{}, {}, {}, {}, {}]);
  //     spyOn(_toastr_, 'info').and.callThrough();

  //     vm = _$controller_('MainController');
  //     $timeout = _$timeout_;
  //     toastr = _toastr_;
  //   }));

  //   it('should have a timestamp creation date', function() {
  //     expect(vm.creationDate).toEqual(jasmine.any(Number));
  //   });

  //   it('should define animate class after delaying timeout ', function() {
  //     $timeout.flush();
  //     expect(vm.classAnimation).toEqual('rubberBand');
  //   });

  //   it('should show a Toastr info and stop animation when invoke showToastr()', function() {
  //     vm.showToastr();
  //     expect(toastr.info).toHaveBeenCalled();
  //     expect(vm.classAnimation).toEqual('');
  //   });

  //   it('should define more than 5 awesome things', function() {
  //     expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
  //     expect(vm.awesomeThings.length === 5).toBeTruthy();
  //   });
  // });
})();
