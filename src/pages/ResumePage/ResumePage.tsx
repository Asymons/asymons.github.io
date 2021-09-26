import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resumePdf from "../../assets/resume/resume-2021-09-26.pdf";
import {debounce} from "lodash";

const MainWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: #ED7D3A;
    padding-top: 32px;
`;

const PdfWrapper = styled.div`
    position: relative;
`;

const DownloadButton = styled.a`
    position: absolute;
    bottom: 40px;
    right: 10px;
    background: black;
    color: white;
    padding: 10px;
    z-index: 2;
`;

const ResumePage = () => {
    const [isDownloadVisible, setIsDownloadVisible] = useState(false);
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);

    const getPdfWidth = (width: number) => Math.min(width, 1000);

    const [pdfWidth, setPdfWidth] = useState(getPdfWidth(window.innerWidth));

    function onDocumentLoadSuccess({ numPages }: {numPages: number}) {
        setNumPages(numPages);
    }

    useEffect(() => {
        window.addEventListener('resize', debounce(function() {
            setPdfWidth(getPdfWidth(window.innerWidth));
        }, 200));
    }, []);

    return (
        <MainWrapper>
            <PdfWrapper onMouseEnter={() => {
                setIsDownloadVisible(true)
            }}
            onMouseLeave={() => {
                setIsDownloadVisible(false)
            }}
            >
                <DownloadButton href={resumePdf} download style={{display: isDownloadVisible ? 'block' : 'none'}}>
                    Download
                </DownloadButton>
                <Document
                    file={resumePdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} width={pdfWidth} />
                </Document>
            </PdfWrapper>
        </MainWrapper>
    )
};

export default ResumePage;
