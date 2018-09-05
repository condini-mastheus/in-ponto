import dateFormat from './dateFormat'

describe('dateFormat function', () => {
  it('should throw error at empty date', () => {
    const dateToTest = {
      date: '',
      format: 'tester@testingiscoll.com',
    }
    try {
      dateFormat(dateToTest)
    } catch (error) {
      expect(error.message).toBe('Date was not defined')
    }
  })

  it('should throw error at empty format string', () => {
    const dateToTest = {
      date: '2018-09-04',
      format: '',
    }
    try {
      dateFormat(dateToTest)
    } catch (error) {
      expect(error.message).toBe('Format was not defined')
    }
  })

  it('should throw error at invalid date', () => {
    const dateToTest = {
      date: '2018-4129-24',
      format: 'DD-MM-YYYY',
    }
    const result = dateFormat(dateToTest)

    expect(result).toBe('Invalid date')
  })

  it('should return current date with date setted to "now" in MM-DD-YYYY format', () => {
    const dateToTest = {
      date: 'now',
      format: 'DD-MM-YYYY',
    }
    const result = dateFormat(dateToTest)

    expect(result).toBe('04-09-2018')
  })

  it('should return date in MM-DD-YYYY format', () => {
    const dateToTest = {
      date: '2018-08-05',
      format: 'DD-MM-YYYY',
    }
    const result = dateFormat(dateToTest)

    expect(result).toBe('05-08-2018')
  })
})
