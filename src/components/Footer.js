import React,{useState} from 'react';
import Modal from './Model';

const Footer=()=>{
    const [modal,setModal]=useState(false);


    const toggle=()=>{
        setModal(!modal)
    }

    return (
        <>


        <footer className="footer">
            <div className="attribution">
                <button onClick={toggle}>Rules</button>
            </div>
        </footer>
        {modal?<Modal toggle={toggle}/>:null}
        </>
    )
}


export default Footer;