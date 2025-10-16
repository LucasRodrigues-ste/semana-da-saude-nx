'use client';

import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export default function PDFViewer() {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [width, setWidth] = useState<number>(600);

    useEffect(() => {
        const handleResize = () => {
            setWidth(Math.min(window.innerWidth * 0.8, 700));
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    return (
        <div className="w-full max-w-screen px-4 mx-auto">
            <Document
                file="/cartilha-nutri-stellantis.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                className="w-full flex flex-col items-center"
            >

                {numPages &&
                    Array.from({ length: numPages }, (_, index) => (
                        <div key={index} className="w-full flex justify-center mb-6">
                            <Page
                                pageNumber={index + 1}
                                width={width}
                                renderTextLayer={true}
                                renderAnnotationLayer={true}
                            />

                        </div>
                    ))}
            </Document>
        </div>
    );
}