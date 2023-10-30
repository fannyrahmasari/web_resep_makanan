import React from 'react' 
import Button from './Button'

import { Modal, Header, Image} from 'semantic-ui-react'

const ModalComp = ({open, setOpen, img, name,deskription,ingredients, make, id, handleDelete}) => {

  return (
    <Modal
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    >
        <Modal.Header>Resep Detail</Modal.Header>
        <Modal.Content image>
            <Image src={img} alt="" size="medium" />
            <Modal.Description>
                <Header>{name}</Header>
                <p>{deskription}</p>
                <p>{ingredients}</p>
                <p>{make}</p>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button
                text="Cancel"
                classname="bg-green-500"
                onClick={() => setOpen(false)}
            />
            <Button
                text="Delete"
                classname="bg-red-600"
                onClick={() => handleDelete(id)}
            />
        </Modal.Actions>
    </Modal>
  )
}

export default ModalComp