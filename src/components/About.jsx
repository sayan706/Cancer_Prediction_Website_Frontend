import React from 'react'


export default function About() {
  return (
    <>
    <div className=' h-[100vh] bg-red-400'>
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-4">About Cancer Prediction</h2>
        <p className="text-gray-700 leading-relaxed font-bold">
          Our website is dedicated to providing accurate predictions and
          information about cancer. We utilize advanced machine learning
          algorithms and data analysis techniques to predict the likelihood of
          different types of cancer based on various factors and symptoms.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4 font-bold">
          Our team comprises experienced oncologists, data scientists, and
          healthcare professionals who work tirelessly to improve the accuracy
          of our predictions and ensure the reliability of the information we
          provide to our users.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4 font-bold">
          At Cancer Prediction, our mission is to empower individuals by
          providing them with valuable insights that can aid in early detection,
          prevention, and better management of cancer.
        </p>
      </div>
    </div>
    </div>
    </>

  )
}
