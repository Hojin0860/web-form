import Postcode from "./PostCode"

export default function Modal({isOpen, callback, onClose}) {
    return isOpen && (
        <div id="defaultModal" tabIndex="-1" aria-hidden="true"
             className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center">
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto self-center">

                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {"주소 찾기"}
                        </h3>
                    </div>

                    <div className="p-6 space-y-6">
                    <Postcode callback={callback}/>
                    </div>

                    <div
                        className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                        <button onClick={() => onClose()} data-modal-toggle="defaultModal" type="button"
                                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"> {"닫기"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}