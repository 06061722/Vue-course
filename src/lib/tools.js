export const doCustomtimes = (times, callback) => {
  let i = -1
  while(++i < times) {
    callback(i)
  }
}