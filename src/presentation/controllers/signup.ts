import { MissingParamError } from '../errors/missing-param-errors'
import { BadRequest } from '../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return BadRequest(new MissingParamError('name'))
    } else {
      return BadRequest(new MissingParamError('email'))
    }
  }
}
