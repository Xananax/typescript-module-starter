import http from 'http'

export const add = (n: number, m: number) => n+m

const port = process.env.PORT || 3000

http.createServer((req, res)=> {
  res.end("hello world")
}).listen(port, () => console.log(`server is running on ${port}`))