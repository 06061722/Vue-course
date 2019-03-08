export const getAppName = () => {
  return new Promise((reslove, reject) => {
    const err = null 
    setTimeout(() => {
      if (!err) reslove({ code: 200, info: { appName: 'newAppName'}})
      else reject(err)
    })
  })
}