'use strict';


  var myMod = angular.module('example366', ['ngAnimate', 'ngTouch']);

  myMod.controller('MainCtrl', function () {

    var self = this;

    // Set of Photos
    self.photos = [
        {src: 'http://farm9.staticflickr.com/8042/7918423710_e6dd168d7c_b.jpg', desc: 'Image 01'},
        {src: 'http://farm9.staticflickr.com/8449/7918424278_4835c85e7a_b.jpg', desc: 'Image 02'},
        {src: 'http://farm9.staticflickr.com/8457/7918424412_bb641455c7_b.jpg', desc: 'Image 03'},
        {src: 'http://farm9.staticflickr.com/8179/7918424842_c79f7e345c_b.jpg', desc: 'Image 04'},
        {src: 'http://farm9.staticflickr.com/8315/7918425138_b739f0df53_b.jpg', desc: 'Image 05'},
        {src: 'http://farm9.staticflickr.com/8461/7918425364_fe6753aa75_b.jpg', desc: 'Image 06'}
    ];

    // initial image index
    self._Index = 0;

    // if a current image is the same as requested image
    self.isActive = function (index) {
        return self._Index === index;
    };

    // show prev image
    self.showPrev = function () {
        console.log(self._Index +' || '+--self._Index);
        self._Index = (self._Index > 0) ? --self._Index : self.photos.length - 1;
    };

    // show next image
    self.showNext = function () {
        self._Index = (self._Index < self.photos.length - 1) ? ++self._Index : 0;
    };

    // show a certain image
    self.showPhoto = function (index) {
        self._Index = index;
    };
});
