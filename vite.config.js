const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                blog: resolve(__dirname, "blog.html"),
                detail: resolve(__dirname, "detail.html"),
                endow: resolve(__dirname, "endow.html"),
                tour: resolve(__dirname, "tour.html"),
                payment: resolve(__dirname, "payment.html"),
            },
        },
    },
});