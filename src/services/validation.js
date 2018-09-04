import validatejs from 'validate.js'
import validationRules from './validationRules'

const validation = (field) => {
  if (!field) {
    throw new Error('No object was sent')
  }

  const fieldObj = Object.keys(field)

  if (fieldObj.length !== 1) {
    throw new Error(`Only 1 key:value pair is accepted. "${JSON.stringify(field)}" was sent`)
  }

  const name = fieldObj[0]

  const rule = {}
  rule[name] = validationRules[name]

  if (!rule[name]) {
    throw new Error(`Rule "${name}" not found in rules set`)
  }

  const result = validatejs(field, rule)

  if (result) {
    return result[name][0]
  }

  return null
}

export default validation
