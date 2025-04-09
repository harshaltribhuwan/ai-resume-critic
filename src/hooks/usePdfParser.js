import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.js?worker";

pdfjsLib.GlobalWorkerOptions.workerPort = new pdfWorker();

export const usePdfParser = () => {
    const parsePdf = async (file) => {
        const fileReader = new FileReader();
        return new Promise((resolve, reject) => {
            fileReader.onload = async () => {
                try {
                    const typedarray = new Uint8Array(fileReader.result);
                    const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;

                    let text = "";
                    const numPages = pdf.numPages;

                    for (let i = 1; i <= numPages; i++) {
                        const page = await pdf.getPage(i);
                        const content = await page.getTextContent();
                        text += content.items.map((item) => item.str).join(" ") + "\n";
                    }

                    resolve({ text, numPages });
                } catch (err) {
                    reject(err);
                }
            };
            fileReader.onerror = reject;
            fileReader.readAsArrayBuffer(file);
        });
    };

    return { parsePdf };
};
