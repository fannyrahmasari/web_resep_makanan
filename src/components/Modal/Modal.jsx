import './modal.css'
import { useState } from 'react'
const Modal = () => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    if(modal) {
        document.body.classList.add('active-modal')
    }else {
        document.body.classList.remove('active-modal')
    }

    return(
        <>
        <div>
            <button
            className='btn-modal'
            onClick={toggleModal}
            >
                Open
            </button>

            {modal && (
                <div className='modal'>
                <div onCLick={toggleModal} className='overlay'></div>
                <div className='modal-content'>
                    <h2>Hello Modal</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptate id at quidem temporibus eaque cum incidunt ab ducimus quis fuga, sapiente similique repellat ipsum? Adipisci, id in earum, dolorem beatae sit dolorum quo repudiandae numquam minus est cumque obcaecati magnam sed recusandae incidunt perferendis ratione officia exercitationem? Debitis, reprehenderit.</p>

                    <button
                    className='close-modal'
                    onClick={toggleModal}
                    >
                        Close
                    </button>
                </div>
            </div>
            )}
        </div>
        </>
    )
}

export default Modal 