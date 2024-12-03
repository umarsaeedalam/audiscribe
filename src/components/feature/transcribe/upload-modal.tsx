import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import MediaUpload from "@/components/feature/transcribe/media-upload";
import { FilePondFile } from 'filepond';
import { Dispatch, SetStateAction } from "react";
import { transcribe } from '@/lib/functions';
import { Status } from "@/utils/types";

type Props = {
    files: FilePondFile[];
    setFiles: Dispatch<SetStateAction<FilePondFile[]>>;
    setStatus: Dispatch<SetStateAction<Status>>;
}

function UploadModal({ files, setFiles, setStatus }: Props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure({isOpen: true});

    async function handleOnClick() {
        await transcribe(files[0], setStatus);
    }

    return (
        <Modal defaultOpen isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true} backdrop="blur" hideCloseButton={true} placement="center">
            <ModalContent className="rounded-lg">
                {(onClose) => (
                    <>
                        <ModalHeader className="text-center">Upload Audio File</ModalHeader>

                        <ModalBody>
                            <MediaUpload files={files} setFiles={setFiles} />
                        </ModalBody>

                        <ModalFooter>
                            <button onClick={handleOnClick}>Transcribe</button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default UploadModal;