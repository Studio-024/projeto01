export type HttpResponse<T = any> = {
    statusCode: number
    data: T
  }

export type HttpRequest <T = any>= {
  body?: T
}

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  data
})

export const noContent = (): HttpResponse => ({
  statusCode: 200,
  data: null
})

export const errorHandler = (error: {status: number, message: string,  stack: string}): HttpResponse => ({
  statusCode: error.status || 500,
  data: {
    status: error.status || 500,
    message: error.message || 'ops',
    stack: error.stack.split('\n').slice(0)[0] ||'undefined'
  }
})
  