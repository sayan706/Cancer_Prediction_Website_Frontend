import React from 'react'
import Breast from './Breast'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="h-[100vh] bg-gradient-to-r from-purple-400 to-indigo-600">
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold text-center mb-8">Cancer Prediction</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Lung Cancer Prediction */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <Link to="/Lung">
                            <img
                                src="https://images.unsplash.com/photo-1555708982-8645ec9ce3cc?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Lung Cancer Prediction"
                                className="rounded-lg mb-4"
                            />
                            <h2 className="text-xl font-semibold text-gray-800">
                                Lung Cancer Prediction
                            </h2>
                            <p className="text-gray-600">Click here for lung cancer prediction</p>
                        </Link>
                    </div>
                    {/* Breast Cancer Prediction */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <Link to="/breast">
                            <img
                                src="https://images.unsplash.com/photo-1598885159329-9377168ac375?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Breast Cancer Prediction"
                                className="rounded-lg mb-4"
                            />
                            <h2 className="text-xl font-semibold text-gray-800">
                                Breast Cancer Prediction
                            </h2>
                            <p className="text-gray-600">Click here for breast cancer prediction</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
