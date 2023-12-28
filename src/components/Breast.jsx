import React, { useState } from 'react'
import axios from 'axios';
import Toast from './Toast';

export default function Breast() {
        const data = {radius_mean : "",texture_mean : "", perimeter_mean: "",area_mean :"",smoothness_mean : ""
        , compactness_mean : "", concavity_mean: "",concave_points_mean : "", symmetry_mean : "", 
        fractal_dimension_mean: "",radius_se:"",texture_se : "",perimeter_se : "",
        area_se : "",smoothness_se : "",compactness_se : "",concavity_se: "",
        concave_points_se : "",symmetry_se : "",fractal_dimension_se:"",
        radius_worst: "",texture_worst:"",perimeter_worst:"",area_worst:"",
        smoothness_worst: "",compactness_worst: "",concavity_worst: "",
        concave_points_worst: "",symmetry_worst: "",fractal_dimension_worst: ""};
      
        const [inputData, setInputdata] = useState(data)
        const [isToaster, setToaster] = useState(false)
        const [message, setMessage] = useState("")
      
        const handleData = (e)=>{
          setInputdata({...inputData, [e.target.name]:e.target.value})
      
        }
      
        const handleSubmit = (e)=>{
          e.preventDefault();
        for (let i in inputData) inputData[i] = Number(inputData[i])
          axios.post("http://127.0.0.1:8000/api/v1/breast-predict", inputData)
          .then((response)=>{
            console.log(response.data)
            setMessage(response.data.message);
            setToaster(true);
            window.scrollTo(0,0);
          })
        }
      
    return (
        <div className='h-[400vh] bg-yellow-400'>
             {isToaster&&<Toast message={message} setToaster={setToaster}/>}
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
                                value={inputData.radius_mean}
                                onChange={handleData}
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
                                value={inputData.texture_mean}
                                onChange={handleData}
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
                                value={inputData.perimeter_mean}
                                onChange={handleData}
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
                                value={inputData.area_mean}
                                onChange={handleData}
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
                                value={inputData.smoothness_mean}
                                onChange={handleData}
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
                                value={inputData.compactness_mean}
                                onChange={handleData}
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
                                value={inputData.concavity_mean}
                                onChange={handleData}
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
                                value={inputData.concave_points_mean}
                                onChange={handleData}
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
                                value={inputData.symmetry_mean}
                                onChange={handleData}
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
                                value={inputData.fractal_dimension_mean}
                                onChange={handleData}
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
                                value={inputData.radius_se}
                                onChange={handleData}
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
                                value={inputData.texture_se}
                                onChange={handleData}
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
                                value={inputData.perimeter_se}
                                onChange={handleData}
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
                                value={inputData.area_se}
                                onChange={handleData}
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
                                value={inputData.smoothness_se}
                                onChange={handleData}
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
                                value={inputData.compactness_se}
                                onChange={handleData}
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
                                value={inputData.concavity_se}
                                onChange={handleData}
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
                                value={inputData.concave_points_se}
                                onChange={handleData}
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
                                value={inputData.symmetry_se}
                                onChange={handleData}
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
                                value={inputData.fractal_dimension_se}
                                onChange={handleData}
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
                                value={inputData.radius_worst}
                                onChange={handleData}
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
                                value={inputData.texture_worst}
                                onChange={handleData}
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
                                value={inputData.perimeter_worst}
                                onChange={handleData}
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
                                value={inputData.area_worst}
                                onChange={handleData}
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
                                value={inputData.smoothness_worst}
                                onChange={handleData}
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
                                value={inputData.compactness_worst}
                                onChange={handleData}
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
                                value={inputData.concavity_worst}
                                onChange={handleData}
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
                                value={inputData.concave_points_worst}
                                onChange={handleData}
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
                                value={inputData.symmetry_worst}
                                onChange={handleData}
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
                                value={inputData.fractal_dimension_worst}
                                onChange={handleData}
                                className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
                                placeholder="Enter fractal_dimension_worst"
                                required=""
                            />
                        </div>
                        <div className="text-center">
                            <button onClick={handleSubmit}
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
