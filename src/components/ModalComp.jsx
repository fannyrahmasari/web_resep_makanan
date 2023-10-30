import React from 'react' 
import Button from './Button'
import "../styles/style.css"

import { Modal, Header, Image} from 'semantic-ui-react'

const ModalComp = ({open, setOpen, img, name, deskription, ingredients, make, id, handleDelete}) => {

  return (
    <Modal
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    className="container mx-auto"
    >
        <Modal.Header className='text-center font-semibold mt-10 text-xl'>Detail Resep</Modal.Header>
        <Modal.Content image>
            <div className='flex flex-col lg:flex-row container mx-auto gap-3 justify-between p-10'>
                <div>
                    <Image src={img} alt="" className='lg:w-[900px] w-[200px] mx-auto mt-5'/>
                </div>
                <div>
                    <Modal.Description>
                    <Header className='font-semibold mt-5'>{name}</Header>
                    <p className='mt-5 mb-5'>{deskription}</p>
                    <h2 className='font-semibold'>Bahan - Bahan</h2>
                    <p className='mb-10'>{ingredients}</p>

                    <h2 className='font-semibold'>Cara Buat</h2>
                    <p>{make}</p>
                    </Modal.Description>
                </div>
            </div>
        </Modal.Content>
        <Modal.Actions>
            <div className='flex justify-center items-center gap-2 text-white mt-5 mb-10'>
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
            </div>
        </Modal.Actions>
    </Modal>
  )
}

export default ModalComp