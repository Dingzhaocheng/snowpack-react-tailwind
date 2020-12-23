
const postcssPresetEnv = require('postcss-preset-env');
module.exports = {
    plugins: [
      // ...
      require('tailwindcss'),
      postcssPresetEnv({
        autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 3,
      }),
      require('postcss-normalize'),
      require('postcss-import'),
      require('postcss-mixins'),
      require('postcss-nested'),
      require('autoprefixer'),
     

      // ...
    ],
  };