"use strict";
var StatusColor;
(function (StatusColor) {
    StatusColor["backgroung"] = "#cececece";
    StatusColor["font"] = "#0000000";
})(StatusColor || (StatusColor = {}));
var userPermission;
(function (userPermission) {
    userPermission[userPermission["ADMIN"] = 0] = "ADMIN";
    userPermission[userPermission["USER"] = 1] = "USER";
    userPermission[userPermission["SUPPORT"] = 2] = "SUPPORT";
})(userPermission || (userPermission = {}));
//São tipos imutáveis, que terão sempre o mesmo valor
// no caso do userPermission, se a gente não atribuir nenhum valor, segue uma sequencia numeral crescente;
console.log(userPermission.ADMIN);
