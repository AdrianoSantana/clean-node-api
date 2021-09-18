import { MissingParamError } from '../errors/missing-param-errors'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      const result: HttpResponse = {
        statusCode: 400,
        body: new MissingParamError('name')
      }
      return result
    } else {
      const result: HttpResponse = {
        statusCode: 400,
        body: new MissingParamError('email')
      }
      return result
    }
  }
}
