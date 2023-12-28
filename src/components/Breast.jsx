import React from 'react'

export default function Breast() {
    return (
        <div className='h-[400vh] bg-yellow-400'>
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold text-center mb-8">
                    Breast Cancer Prediction
                </h1>
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="radius_mean" className="block text-gray-700 font-semibold mb-2">
                            radius_mean:
                            </label>
                            <input
                                type="number" 
                                id="radius_mean"
                                name="radius_mean"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter radius_mean"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="texture_mean" className="block text-gray-700 font-semibold mb-2">
                            texture_mean:
                            </label>
                            <input
                                type="number"
                                id="texture_mean"
                                name="texture_mean"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter texture_mean"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="perimeter_mean" className="block text-gray-700 font-semibold mb-2">
                            perimeter_mean:
                            </label>
                            <input
                                type="number"
                                id="perimeter_mean"
                                name="perimeter_mean"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter perimeter_mean"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="area_mean" className="block text-gray-700 font-semibold mb-2">
                            area_mean:
                            </label>
                            <input
                                type="number"
                                id="area_mean"
                                name="area_mean"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter area_mean"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="smoothness_mean" className="block text-gray-700 font-semibold mb-2">
                            smoothness_mean:
                            </label>
                            <input
                                type="number"
                                id="smoothness_mean"
                                name="smoothness_mean"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter smoothness_mean"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="compactness_mean" className="block text-gray-700 font-semibold mb-2">
                            compactness_mean:
                            </label>
                            <input
                                type="number"
                                id="compactness_mean"
                                name="compactness_mean"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter compactness_mean"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="concavity_mean" className="block text-gray-700 font-semibold mb-2">
                            concavity_mean:
                            </label>
                            <input
                                type="number"
                                id="concavity_mean"
                                name="concavity_mean"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter concavity_mean"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="concave_points_mean" className="block text-gray-700 font-semibold mb-2">
                            concave_points_mean:
                            </label>
                            <input
                                type="number"
                                id="concave_points_mean"
                                name="concave_points_mean"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter concave_points_mean"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="symmetry_mean" className="block text-gray-700 font-semibold mb-2">
                            symmetry_mean:
                            </label>
                            <input
                                type="number"
                                id="symmetry_mean"
                                name="symmetry_mean"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter symmetry_mean"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="fractal_dimension_mean" className="block text-gray-700 font-semibold mb-2">
                            fractal_dimension_mean:
                            </label>
                            <input
                                type="number"
                                id="fractal_dimension_mean"
                                name="fractal_dimension_mean"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter fractal_dimension_mean"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="radius_se" className="block text-gray-700 font-semibold mb-2">
                            radius_se:
                            </label>
                            <input
                                type="number"
                                id="radius_se"
                                name="radius_se"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter radius_se"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="texture_se" className="block text-gray-700 font-semibold mb-2">
                            texture_se:
                            </label>
                            <input
                                type="number"
                                id="texture_se"
                                name="texture_se"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter texture_se"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="perimeter_se" className="block text-gray-700 font-semibold mb-2">
                            perimeter_se:
                            </label>
                            <input
                                type="number"
                                id="perimeter_se"
                                name="perimeter_se"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter perimeter_se"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="area_se" className="block text-gray-700 font-semibold mb-2">
                            area_se:
                            </label>
                            <input
                                type="number"
                                id="area_se"
                                name="area_se"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter area_se"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="smoothness_se" className="block text-gray-700 font-semibold mb-2">
                            smoothness_se:
                            </label>
                            <input
                                type="number"
                                id="smoothness_se"
                                name="smoothness_se"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter smoothness_se"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="compactness_se" className="block text-gray-700 font-semibold mb-2">
                            compactness_se:
                            </label>
                            <input
                                type="number"
                                id="compactness_se"
                                name="compactness_se"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter compactness_se"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="concavity_se" className="block text-gray-700 font-semibold mb-2">
                            concavity_se:
                            </label>
                            <input
                                type="number"
                                id="concavity_se"
                                name="concavity_se"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter concavity_se"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="concave_points_se" className="block text-gray-700 font-semibold mb-2">
                            concave_points_se:
                            </label>
                            <input
                                type="number"
                                id="concave_points_se"
                                name="concave_points_se"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter concave_points_se"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="symmetry_se" className="block text-gray-700 font-semibold mb-2">
                            symmetry_se:
                            </label>
                            <input
                                type="number"
                                id="symmetry_se"
                                name="symmetry_se"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter symmetry_se"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="fractal_dimension_se" className="block text-gray-700 font-semibold mb-2">
                            fractal_dimension_se:
                            </label>
                            <input
                                type="number"
                                id="fractal_dimension_se"
                                name="fractal_dimension_se"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter fractal_dimension_se"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="radius_worst" className="block text-gray-700 font-semibold mb-2">
                            radius_worst:
                            </label>
                            <input
                                type="number"
                                id="radius_worst"
                                name="radius_worst"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter radius_worst"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="texture_worst" className="block text-gray-700 font-semibold mb-2">
                            texture_worst:
                            </label>
                            <input
                                type="number"
                                id="texture_worst"
                                name="texture_worst"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter texture_worst"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="perimeter_worst" className="block text-gray-700 font-semibold mb-2">
                            perimeter_worst:
                            </label>
                            <input
                                type="number"
                                id="perimeter_worst"
                                name="perimeter_worst"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter perimeter_worst"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="area_worst" className="block text-gray-700 font-semibold mb-2">
                            area_worst:
                            </label>
                            <input
                                type="number"
                                id="area_worst"
                                name="area_worst"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter area_worst"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="smoothness_worst" className="block text-gray-700 font-semibold mb-2">
                            smoothness_worst:
                            </label>
                            <input
                                type="number"
                                id="smoothness_worst"
                                name="smoothness_worst"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter smoothness_worst"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="compactness_worst" className="block text-gray-700 font-semibold mb-2">
                            compactness_worst:
                            </label>
                            <input
                                type="number"
                                id="compactness_worst"
                                name="compactness_worst"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter compactness_worst"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="concavity_worst" className="block text-gray-700 font-semibold mb-2">
                            concavity_worst:
                            </label>
                            <input
                                type="number"
                                id="concavity_worst"
                                name="concavity_worst"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter concavity_worst"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="concave_points_worst" className="block text-gray-700 font-semibold mb-2">
                            concave_points_worst:
                            </label>
                            <input
                                type="number"
                                id="concave_points_worst"
                                name="concave_points_worst"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter concave_points_worst"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="symmetry_worst" className="block text-gray-700 font-semibold mb-2">
                            symmetry_worst:
                            </label>
                            <input
                                type="number"
                                id="symmetry_worst"
                                name="symmetry_worst"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter symmetry_worst"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="fractal_dimension_worst" className="block text-gray-700 font-semibold mb-2">
                            fractal_dimension_worst:
                            </label>
                            <input
                                type="number"
                                id="fractal_dimension_worst"
                                name="fractal_dimension_worst"
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter fractal_dimension_worst"
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
