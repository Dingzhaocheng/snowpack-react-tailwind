/** @type {import("snowpack").SnowpackUserConfig } */
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
        '@': './src'
    },
};
