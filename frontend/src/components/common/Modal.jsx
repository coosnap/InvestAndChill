import {Button} from "../ui/button";

function Modal(props) {
  const handleClickModal = () => props.handleClickModal();

  function statusColor(key) {
    switch (key) {
      case "Success": {
        return "bg-green-500";
      }
      case "Warning": {
        return "bg-yellow-500";
      }
      case "Error": {
        return "bg-red-500";
      }
      default: {
        return;
      }
    }
  }

  return (<div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-start sm:p-0">
        <div
          className="relative overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className={`${statusColor(props.status)} px-4 pb-4 pt-5 sm:p-6 sm:pb-4`}>
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <p className="text-lg font-semibold leading-6 text-white" id="modal-title">{props.status}</p>
              </div>
            </div>
          </div>
          <div className="py-5 text-center">
            <p className="text-sm text-gray-500">{props.message}</p>
          </div>
          <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <Button variant="outline"
                    onClick={handleClickModal}>{props.status === "Success" ? "Ok" : "Cancel"}</Button>
          </div>
        </div>
      </div>
    </div>
  </div>);
}

export default Modal;
