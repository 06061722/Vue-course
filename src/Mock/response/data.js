import { doCustomtimes } from '@/lib/tools'
import Mock from 'mockjs'
const Random = Mock.Random

export const getTableData = () => {
  const template = {
    name: '@name',
    'age|18-25': 0,
    email: '@email'
  }
  let arr = []
  doCustomtimes(5, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}


export const getFolderList = () => {
  const template1 = {
    'name|1': '@word',
    'created_time': '@datetime',
    'folder_id': 0,
    'id|+1': 1
  }
  const template2 = {
    'name|1': '@word',
    'created_time': '@datetime',
    'folder_id|+1': 1,
    'id|+1': 4
  }
  let arr = []
  doCustomtimes(3, () => {
    arr.push(Mock.mock(template1))
  })
  doCustomtimes(2, () => {
    arr.push(Mock.mock(template2))
  })
  return arr
}


export const getFileList = () => {
  const template = {
    'name|5': '@cword',
    'created_time': '@datetime',
    'folder_id|1-5': 0,
    'id|+1': 10000
  }
  let arr = []
  doCustomtimes(10, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}
