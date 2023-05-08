import close from "../SPRcomps/images/icon-close.svg";
import ReactDOM from "react-dom";


const Modal = ({ toggle }) => {
    return ReactDOM.createPortal(
      <div className="friend-modal-container">
        <div className="friend-modal-box">
          <div className="modal__header">
            <h1>Add a friend!</h1>
            <button onClick={toggle}>
              <img src={close} alt="Close" srcset="" />
            </button>
            <div className="search-bar">
              <input type="text" placeholder="Search username" />
            </div>
            <button>Add user</button>
          </div>
        </div>
      </div>,
      document.getElementById("modal")
    );
  };
  
  export default Modal;