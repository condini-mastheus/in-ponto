const validationRules = {
  userEmail: {
    email: true,
  },
  userCode: {
    presence: {
      allowEmpty: false,
    },
    length: {
      minimum: 4,
    },
  },
  captcha: {
    presence: {
      allowEmpty: false,
    },
  },
}

export default validationRules
