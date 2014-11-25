// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])



.controller('MyCtrl', function($scope){



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

      } else if(checkedItemsFromUser.length >2 && i == 0){
        console.log("mmmmmmm");

      } else {
        itemsSelected += ", "+checkedItemsFromUser[i];
      }
    }
    console.log(itemsSelected);
    alert(userName +" selected: "+itemsSelected)
  }


})




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
