module.exports = {
  use: [
    'neutrino-preset-mozilla-frontend-infra/styleguide',
    ['neutrino-preset-mozilla-frontend-infra/react-components', {
      style: {
        extract: true,
      }
    }],
    (neutrino) => {
      if (neutrino.options.command === 'styleguide:start') {
        neutrino.config.module.rules.delete('lint');
      }
    },
    ['@neutrinojs/jest', {
        setupFiles: [
          '<rootDir>/config/jest-shim.js',
          '<rootDir>/config/jest-setup.js'
        ],
        snapshotSerializers: [
          'enzyme-to-json/serializer'
        ],
        "coveragePathIgnorePatterns": [
          "src/coverage",
          "/.*\\example.js$"
        ]
      }
    ]
  ],
};
