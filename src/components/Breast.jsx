import React from 'react'

export default function Breast() {
    return (
        <div className='h-[100vh] bg-yellow-400'>
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold text-center mb-8">
                    Breast Cancer Prediction
                </h1>
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">
                                Age:
                            </label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter age"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="family-history"
                                className="block text-gray-700 font-semibold mb-2"
                            >
                                Family History of Breast Cancer:
                            </label>
                            <select
                                id="family-history"
                                name="family-history"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                required=""
                            >
                                <option value="" disabled="" selected="">
                                    Select an option
                                </option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="biopsy"
                                className="block text-gray-700 font-semibold mb-2"
                            >
                                Previous Biopsy:
                            </label>
                            <input
                                type="text"
                                id="biopsy"
                                name="biopsy"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter previous biopsy details"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="mammography"
                                className="block text-gray-700 font-semibold mb-2"
                            >
                                Last Mammography Date:
                            </label>
                            <input
                                type="date"
                                id="mammography"
                                name="mammography"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                required=""
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600
                  focus:outline-none"
                            >
                                Predict
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
