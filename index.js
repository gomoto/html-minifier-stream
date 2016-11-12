const htmlMinifier = require('html-minifier');
const Transform = require('readable-stream/transform');



/**
 * @param  {Object} options passed directly to html-minifier
 * @return {Transform} stream
 */
module.exports = function htmlMinifierStream(options) {
  return new Transform({
    transform: function minifyHtml(chunk, encoding, callback) {
      try {
        callback(null, new Buffer(htmlMinifier.minify(String(chunk), options)));
      } catch (err) {
        callback(err);
      }
    }
  });
};
