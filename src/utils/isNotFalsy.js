import { CustomError } from '../services/errors/custom-error.js'
import { EErros } from '../services/errors/enums.js'
export function isNotFalsy (...params) {
  const falsyValues = []
  for (let i = 0; i < params.length; i++) {
    const value = params[i]
    if (!value) {
      falsyValues.push(i + 1)
    }
  }
  if (falsyValues.length === 0) {
    return 'all the values are not falsy'
  } else {
    CustomError.createError({
      name: 'Error verifying if the values are falsy',
      cause: `The code cannot continue, the next position of the values you sent are falsy ${falsyValues}`,
      message: 'Error trying to continue the code, some values are falsy',
      code: EErros.INCORRECT_CREDENTIALS_ERROR
    })
  }
}
