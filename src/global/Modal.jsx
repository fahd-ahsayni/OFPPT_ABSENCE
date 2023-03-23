import Billet from "../components/Billet/Billet";

export default function Modal() {
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <Billet />
          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className="-mt-2 cursor-pointer inline-flex w-full justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 sm:text-sm"
            >
              Retour au tableau d'absence
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
