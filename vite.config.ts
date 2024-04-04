import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import fs from 'fs/promises';


// https://vitejs.dev/config/
export default defineConfig(async () => {
    const jsonFilePath1 = './db/items.json';
    const jsonFilePath2 = './db/materials.json';
    const outputFilePath = './db/db.json';

    async function combineJsonFiles(): Promise<void> {
        try {
            const data1 = await fs.readFile(jsonFilePath1, 'utf8');
            const parsedData1 = { items: JSON.parse(data1) };

            const data2 = await fs.readFile(jsonFilePath2, 'utf8');
            const parsedData2 = { materials: JSON.parse(data2) };

            const combinedData = { ...parsedData1, ...parsedData2 };

            await fs.writeFile(outputFilePath, JSON.stringify(combinedData));

            console.log('Данные объединены и записаны в файл', outputFilePath);
        } catch (error) {
            console.error('Произошла ошибка:', error);
        }
    }

    await combineJsonFiles();

    return {
        plugins: [vue()],
        esbuild: {
            target: 'esnext',
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
                "@img": path.resolve(__dirname, "./assets/images"),
                "@icons": path.resolve(__dirname, "./src/icons"),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@import "src/styles/functions.scss"; ' +
                        '@import "src/styles/functions.scss";' +
                        '@import "src/styles/consts.scss";',
                },
            },
        },
    }
})
