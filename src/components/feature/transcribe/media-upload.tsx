import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import 'filepond/dist/filepond.min.css';
import { FilePondFile } from 'filepond';
import { Dispatch, SetStateAction } from 'react';
import { acceptedTypes } from '@/lib/data';

type Props = {
    files: any[];
    setFiles: Dispatch<SetStateAction<FilePondFile[]>>
}

registerPlugin(
    FilePondPluginFileValidateType,
    FilePondPluginFileValidateSize
);

const MediaUpload = ({ files, setFiles }: Props) => {
    return (
        <div className='w-full'>  
            <FilePond
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={false}
                server={null}
                instantUpload={false}
                acceptedFileTypes={acceptedTypes}
                allowFileTypeValidation={true}
                labelFileTypeNotAllowed={'Please upload a supported audio or video file'}
                fileValidateTypeLabelExpectedTypes='Accepts: MP3, WAV, AAC, M4A, FLAC, MP4, MOV, WEBM, AVI'
                allowFileSizeValidation={true}
                maxFileSize={'50MB'}
                labelMaxFileSizeExceeded={'File is too large'}
                labelMaxFileSize={'Maximum file size is 50MB'}
                credits={false}
                className="media-upload-filepond"
            />

            <style jsx global>{`
                /* Inherit font family from your website */
                .media-upload-filepond.filepond--root {
                    font-family: inherit;
                }

                /* Make sure all child elements inherit the font */
                .media-upload-filepond .filepond--drop-label,
                .media-upload-filepond .filepond--label-action,
                .media-upload-filepond .filepond--file-info-main,
                .media-upload-filepond .filepond--file-status {
                    font-family: inherit;
                }

                .media-upload-filepond .filepond--item-panel {
                    background-color: #FF7F50;
                    font-weight: 600;
                }

                .media-upload-filepond [data-filepond-item-state*='error'] .filepond--item-panel,
                [data-filepond-item-state*='invalid'] .filepond--item-panel {
                    background-color: #DC143C;
                }

                @media (max-width: 1000px) {
                    .media-upload-filepond .filepond--drop-label {
                        font-size: 15px;
                    }
                }

                @media (max-width: 700px) {
                    .media-upload-filepond .filepond--drop-label {
                        font-size: 14px;
                    }
                }

            `}</style>
        </div>
    );
};

export default MediaUpload;