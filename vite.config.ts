import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'
import {resolve} from 'path'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                law: resolve(__dirname, '特定商取引法に基づく表記/index.html'),
            },
        },
    },
})
