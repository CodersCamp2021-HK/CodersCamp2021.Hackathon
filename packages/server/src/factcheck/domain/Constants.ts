const FACTCHECK_CONSTANTS = Object.freeze({
  title: Object.freeze({
    minLength: 5,
    maxLength: 200,
  }),
  verifiedBy: Object.freeze({
    minLength: 5,
    maxLength: 200,
  }),
  description: Object.freeze({
    minLength: 5,
    maxLength: 2000,
  }),
});

export { FACTCHECK_CONSTANTS };
