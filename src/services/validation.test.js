import validation from './validation'

describe('validation function', () => {
  it('should throw error at invalid rule', () => {
    const name = 'use31231rEmail'
    const value = 'matheus.com'
    try {
      validation(name, value)
    } catch (error) {
      expect(error).toBe(`Rule "${name}" not found in rules set`)
    }
  })

  it('should validate email', () => {
    const name = 'userEmail'
    const value = 'matheus.com'
    try {
      const result = validation(name, value)
      if (result) {
        expect(result).toBe('User email is not a valid email')
      } else {
        expect(result).toBe(null)
      }
    } catch (error) {
      expect(error).toBe(`Rule "${name}" not found in rules set`)
    }
  })
})
