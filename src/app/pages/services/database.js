
angular.module('db', [])

.factory("$DB", function () {
            var root = firebase.database().ref();
            References = {
                smartTableRef:root.child("smarttable")
            };
            return References;
        });