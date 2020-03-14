import { MysqlDb } from './../modules/db';
class artClass {
  username: string | undefined;
  password: string | undefined;
}
var artuser = new MysqlDb<artClass>()
// db.add(u)
export {
  artClass,artuser
}
