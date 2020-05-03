// default webpack file preprocessor is good for simple cases
// Required to temporarily patch async components, chunking, and inline image loading
const { onFileDefaultPreprocessor } = require('cypress-vue-unit-test/dist/preprocessor/webpack');

module.exports = (on) => {
  on('file:preprocessor', onFileDefaultPreprocessor);
};
