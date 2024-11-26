const { create, update } = require('./schema');

const booksValidation = {
  validateCreatePayload: (payload) => {
    const validationResult = create.validate(payload);

    if (validationResult.error) {
      throw validationResult.error.message;
    }
  },

  validateUpdatePayload: (payload) => {
    const validationResult = update.validate(payload);

    if (validationResult.error) {
      throw validationResult.error.message;
    }
  },
};

module.exports = booksValidation;