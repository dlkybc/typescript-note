"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./../modules/db");
//定义数据库的映射
var UserClass = /** @class */ (function () {
    function UserClass() {
    }
    return UserClass;
}());
exports.UserClass = UserClass;
// var u = new User()
// u.username = "zhangsan"
// u.password="88888888"
var dbuser = new db_1.MysqlDb();
exports.dbuser = dbuser;
