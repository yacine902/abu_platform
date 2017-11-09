(function () {
'use strict';
   
angular.module('BlurAdmin', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
  'ngTouch',
  'toastr',
  'smart-table',
  "xeditable",
  'ui.slimscroll',
  'ngJsTree',
  'angular-progress-button-styles',
  'BlurAdmin.theme',
  'BlurAdmin.pages',
  'firebase',
  'db'
]);
var config = {
  apiKey: "AIzaSyD9C5UymUcn70mFARwn1jJV_r6ira7h8r0",
  authDomain: "dashboard-blur.firebaseapp.com",
  databaseURL: "https://dashboard-blur.firebaseio.com",
  projectId: "dashboard-blur",
  storageBucket: "",
  messagingSenderId: "391685662126"
};
firebase.initializeApp(config);

})();