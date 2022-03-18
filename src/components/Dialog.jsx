import '../styles/Dialog.css';

const Dialog = ({ cancelHandler, confirmHandler }) => {
  return (
    <div id="dialogBackground" className="dialog-background">
      <dialog className="bg-hex-eee4dd border-gray-200 border-4 rounded-md filter drop-shadow-2xl" open>
        <p className="p-10 text-center text-2xl">Remove item removeItemID?</p>

        <div className="flex flex-row w-full p-2 flex-wrap justify-evenly">
          <div className="px-2 space-x-2 mb-2">
            <button className="bg-gray-400 p-1 w-48 px-4 text-teal-900 rounded-2xl" onClick={cancelHandler}>
              Cancel
            </button>
          </div>
          <div className="px-2 space-x-2">
            <button className="bg-blue-700 p-1 w-48 px-4 hover:text-teal-100 text-white rounded-2xl " onClick={confirmHandler}>
              Ok
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dialog;
