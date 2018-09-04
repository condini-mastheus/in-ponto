import validatejs from 'validate.js'
import validationRules from './validationRules'

const validation = (name, value) => {
  const formValue = {}
  formValue[name] = value

  const rule = {}
  rule[name] = validationRules[name]

  if (!rule[name]) {
    throw `Rule "${name}" not found in rules set`
  }

  const result = validatejs(formValue, rule)

  if (result) {
    return result[name][0]
  }

  return null
}

export default validation
