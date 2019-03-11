// const baseURL = 'http://localhost:3000' 
export const baseUrl = process.env.NODE_ENV ===  'production'
  ? 'http://production.com/' 
  : ''    
  //写上之后不走vue.config.vue中的代理
  // : 'http://localhost:3001/'