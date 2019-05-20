module.exports = {
  verbose: false,
  ignoreFiles: [
    'chrome/',
    'images/',
    'test/',
    'testTgt/',
    'web-ext-artifacts/',
    '*.log',
    '*.ps1',
    '.tern-project',
    'jsconfig.json',
    'package.json',
    'package-lock.json',
    'tsconfig.json',
    'web-ext-config.js',
    'yarn.lock',
  ],
  build: {
    overwriteDest: true,
  },
};
