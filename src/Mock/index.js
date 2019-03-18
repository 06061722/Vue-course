import Mock from 'mockjs'
import { getUserInfo, login, authorization } from './response/user'
import { getFileList, getFolderList, getTableData } from "./response/data";
const Random = Mock.Random

// Mock.mock('http://localhost:3001/getUserInfo', getUserInfo)
Mock.mock(/\/getUserInfo/, getUserInfo)
Mock.mock(/\/getFolderList/, getFolderList)
Mock.mock(/\/getFileList/, getFileList)
Mock.mock(/\/login/, login)
Mock.mock(/\/authorization/, authorization)

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