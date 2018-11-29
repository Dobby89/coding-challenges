const path = require('path');
const cwd = process.cwd();

module.exports = {
    data: '$foo: "bar";', // See: https://github.com/parcel-bundler/parcel/issues/1032
    includePaths: [
        path.resolve(cwd, 'node_modules')
    ]
};
