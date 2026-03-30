export default function myThrottle<T extends (...args: any[]) => any>(
  fn: T,
  wait: number
){
  let startTime = Date.now()
  return function(this: ThisParameterType<T>, ...args: Parameters<T>){
    const nowTime = Date.now()
    if(nowTime - startTime >= wait){
      startTime = nowTime
      return fn.apply(this,args)
    }
  }
}