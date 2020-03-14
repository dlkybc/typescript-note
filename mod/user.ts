import { MysqlDb } from './../modules/db';
//定义数据库的映射
class UserClass {
  username: string | undefined;
  password: string | undefined;
}
// var u = new User()
// u.username = "zhangsan"
// u.password="88888888"
var dbuser = new MysqlDb<UserClass>()
// db.add(u)
export {
  UserClass,dbuser
}
