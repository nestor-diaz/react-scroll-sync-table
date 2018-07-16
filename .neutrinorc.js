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
  ],
};
