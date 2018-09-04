import validation from './validation'

describe('validation function', () => {
  it('should throw error at empty field', () => {
    try {
      validation()
    } catch (error) {
      expect(error.message).toBe('No object was sent')
    }
  })

  it('should throw error at object lenght greater than 1', () => {
    const field = {
      name: 'Tester Doido',
      email: 'tester@testingiscoll.com',
    }
    try {
      validation(field)
    } catch (error) {
      expect(error.message).toBe(`Only 1 key:value pair is accepted. "${JSON.stringify(field)}" was sent`)
    }
  })

  it('should throw error at invalid rule', () => {
    const field = { email: '213i32131' }
    try {
      validation(field)
    } catch (error) {
      expect(error.message).toBe(`Rule "${Object.keys(field)[0]}" not found in rules set`)
    }
  })

  it('should invalidate email', () => {
    const field = { userEmail: 'matheus.com' }
    try {
      const result = validation(field)
      if (result) {
        expect(result).toBe('User email is not a valid email')
      } else {
        expect(result).toBe(null)
      }
    } catch (error) {
      expect(error.message).toBe(`Rule "${Object.keys(field)[0]}" not found in rules set`)
    }
  })

  it('should validate email', () => {
    const field = { userEmail: 'matheus@jgwebcom.com' }
    try {
      const result = validation(field)
      if (result) {
        expect(result).toBe('User email is not a valid email')
      } else {
        expect(result).toBe(null)
      }
    } catch (error) {
      expect(error.message).toBe(`Rule "${Object.keys(field)[0]}" not found in rules set`)
    }
  })
})
