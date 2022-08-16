
import { Modal, Label, TextInput, Checkbox, Button } from "flowbite-react";
import React from "react";
interface IModal{
    isOpen:boolean,
    onClose: () => void
}


const FormModal:React.FC<IModal> = ({isOpen,onClose}) => {
    return(
        <Modal
            show={isOpen}
            onClose={onClose}
        >
            <Modal.Header>
            EDIT TODO
            </Modal.Header>
            <Modal.Body>
            <div className="flex flex-col gap-4 pb-4">
                    <Label htmlFor="idInput">
                        ID
                    </Label>
                    <TextInput
                        type="text"
                        id="idInput"
                        placeholder="Todo ID"
                    />
                    <Label htmlFor="titleInput">
                        TITLE
                    </Label>
                    <TextInput
                        type="text"
                        id="titleInput"
                        placeholder="Title"
                    />
                    <Label htmlFor="statusInput">
                        STATUS
                    </Label>
                    <TextInput
                        type="text"
                        id="statusInput"
                        placeholder="Status"
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="flex flex-wrap gap-2 ">
                    {/* <Button 
                    color="success"
                    onClick={onClose}
                    >
                        SAVE
                    </Button> */}
                    <button
                        onClick={onClose}
                        className="bg-blue-700 rounded-md px-4 py-2 text-white font-semibold"
                        >
                           + ADD TODO
                        </button>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default FormModal;