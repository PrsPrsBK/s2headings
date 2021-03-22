module.exports = {
  verbose: false,
  ignoreFiles: [
    'chrome/',
    'images/',
    'test/',
    'testTarget/',
    'web-ext-artifacts/',
    '*.log',
    '*.ps1',
    'package.json',
    'package-lock.json',
    'tsconfig.json',
    'web-ext-config.js',
    'yarn.lock',
    'note/',
  ],
  build: {
    overwriteDest: true,
  },
};
