/** @type {import("snowpack").SnowpackUserConfig } */

const path = require('path')

const pathResolve = (pathUrl) => path.join(__dirname, pathUrl)

module.exports = {
    mount: {
        public: '/',
        src: '/_dist_',
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-dotenv',
        '@snowpack/plugin-typescript',
        '@snowpack/plugin-postcss',
        /*  [
             '@snowpack/plugin-build-script',
             { cmd: 'postcss $FILE', input: ['.css'], output: ['.css'] },
         ], */
    ],
    install: [

    ],
    installOptions: {

        treeshake: true,
        polyfillNode: true,
    },
    devOptions: {
        port: 3000,
        src: 'src',
        bundle: false,
        fallback: 'index.html',
    },
    buildOptions: {
        baseUrl: "./",
        sourceMaps: true,

    },
    proxy: {
        /* ... */
    },
    alias: {
        '@': pathResolve('src'),
        '@api': pathResolve('src/api'),
        '@assets': pathResolve('src/assets'),
        '@common': pathResolve('src/common'),
        '@components': pathResolve('src/components'),
        '@hooks': pathResolve('src/hooks'),
        '@views':pathResolve('./src/views') ,
        '@store': pathResolve('src/store'),
        '@utils': pathResolve('src/utils'),
        

    },
};
