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
  userHuman: {
    presence: {
      allowEmpty: false,
    },
  },
  captcha: {
    presence: {
      allowEmpty: false,
    },
  },
  name: {
    presence: {
      allowEmpty: false,
    },
  },

}

export default validationRules
