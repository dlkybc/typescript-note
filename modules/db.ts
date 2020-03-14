// var url = 'xxx'
// export function getData():any[] {
//   console.log('data')
//   return [{
//     title:'www'
//   }]
// }
// export function save(){
//   console.log('save')

// }


interface DBI <T>{
  add(info:T): boolean;
  update(info:T,id:number): boolean;
  delete(id:number): boolean;
  get(id:number): any[];
}
// 定义一个操作mysql数据库的类 注意：要实现泛型接口，这个类也应该是泛型类
export class MysqlDb<T> implements DBI<T>{
  add(info: T): boolean {
     console.log(info,'add')
    return true
    throw new Error("Method not implemented.");
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }

}
// 定义一个操作mssql数据库的类
export class MssqlDb<T> implements DBI<T>{
  constructor() {
    console.log('数据库建立连接')
  }
  add(info: T): boolean {
    console.log(info,'mssql')
    return true
    // throw new Error("Method not implemented.");
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    var list = [{
      title: 'xxx',
      desc:'ddd'
    }]
    return list
    throw new Error("Method not implemented.");
  }

}
