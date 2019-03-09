import Mock from 'mockjs'
import { getUserInfo } from './response/user'
const Random = Mock.Random

// Mock.mock('http://localhost:3001/getUserInfo', getUserInfo)
Mock.mock(/\/getUserInfo/, getUserInfo)

Mock.setup({
  timeout: 0
})

Random.extend({
  fruit() {
    const fruit = ['apple', 'peach', 'lemon']
    return this.pick(fruit)
  }
})



export default Mock