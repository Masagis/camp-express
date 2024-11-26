const { create } = require('./schema');

const booksValidation = {
  validateCreatePayload: (payload) => {
    const validationResult = create.validate(payload);

    if (validationResult.error) {
      throw validationResult.error.message;
    }
  },
};

module.exports = booksValidation;