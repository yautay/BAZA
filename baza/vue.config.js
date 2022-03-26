const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
                @import "@~/src/assets/styles/_colors.scss";
                @import "@~/src/assets/styles/_brakepoints.scss";
                @import "@~/src/assets/styles/_gradients.scss";
                `
            }
        }
    }
})
