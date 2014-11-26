// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
.factory('Camera', ['$q', function($q) {

  return {
    getPicture: function(options) {
      var q = $q.defer();

      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    }
  }
}])//Service - Camera 


.controller('MyCtrl', function($scope, Camera){



  // list items as rows in the view
  $scope.listItems = [
    {"title": "here is something", "icon":"ion-heart"},
    {"title": "a second item", "icon":"ion-location"},
    {"title": "... and a third", "icon":"ion-bug"}
  ];


  //--form items----------
  $scope.usernameInput = "";

  //toggle default
  $scope.toggleSwitchHtml = true;
  $scope.toggleSwitchCss = false;

  //CHeckboxes
  $scope.checkboxObjC = true;
  $scope.checkboxSwift = false;

  //Submit button
  $scope.sendFormData = function(){
    var userName = "You have";
    if ($scope.usernameInput != ""){
      userName = $scope.usernameInput +" has";
    }
    var checkedItemsFromUser = [];
    if($scope.toggleSwitchHtml === true){
      checkedItemsFromUser.push("HTML");
    } 
    if($scope.toggleSwitchCss === true){
      checkedItemsFromUser.push("CSS");
    } 
    if($scope.checkboxObjC === true){
      checkedItemsFromUser.push("ObjectiveC");
    } 
    if($scope.checkboxSwift === true){
      checkedItemsFromUser.push("Swift");
    } 
    var itemsSelected = "";
    for (var i in checkedItemsFromUser){
      if(checkedItemsFromUser.length >=1 && i == 0){
        itemsSelected += checkedItemsFromUser[i];
      } else {
        itemsSelected += ", "+checkedItemsFromUser[i];
      }
    }
    alert(userName +" selected: "+itemsSelected)
  }


  // Camera - Get Photo
  $scope.getPhoto = function() {
    console.log('Getting camera');
    Camera.getPicture()
      .then(function(imageURI) {
        console.log(imageURI);
        $scope.lastPhoto = imageURI;
        alert(lastPhoto);
      }, function(err) {
        console.err(err);
      }, {
        quality: 75,
        targetWidth: 320,
        targetHeight: 320,
        saveToPhotoAlbum: false
      });
  }//getPhoto



})//Controller-MyCtrl

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
