import Mock from 'mockjs'
import { randomBytes } from 'crypto';
const  Random = Mock.Random

export const getUserInfo = (options) => {
  // console.log(options);
  const template = {
    'str|2-4': 'Qiao',
    'name|6': 'Qiao',
    'age|+2': 23,
    'num|4-10': 0,
    'float|3-8.2-5': 0,
    'bool|1': true,
    'bool2|1-9': true,
    'obj|2': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'obj2|1-2': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'arr|3': [1,2,3],
    'arr2|3-5': [1,2,3],
    'func': () => 'This is created by function',
    'reg': /[1-9][a-z]/,
    // 'email': Random.email()
    'email': Mock.mock('@email'),
    'range' : Random.range(1, 10, 2),
    'data': Random.date('yy-MM-dd'),
    'time': Random.time('hh:mm:ss'),
    'datetime': Random.datetime('yyyy-MM-dd hh:mm:ss'),
    'now': Random.now('hour', 'yyyy-MM-dd hh:mm:ss'),
    "img": Random.img('250x250', '#00ff00', '#ffffff', 'png','Qiao'),
    'img_base64': Random.dataImage(),
    'color': Random.color(),
    'cword': Random.cword('白云千载空悠悠', 2, 5),
    'cname': Random.cname(),
    'email2': Random.email('outlook.com'),
    'region': Random.region(),
    'province': Random.province(),
    'city': Random.city(true),
    'county': Random.county(true),
    'zip': Random.zip(),
    'upperFirstLetter': Random.capitalize('qiao'),
    'pick': Random.pick([1,2,3,4]),
    'shuffle': Random.shuffle([1,2,3,4]),
    'guid': Random.guid(),
    'fruit': Random.fruit(),
    'fruit2': '@fruit'
  }
  // let i = 3
  // const arr = []
  // while(i--) arr.push(template)
  return Mock.mock(template)
}