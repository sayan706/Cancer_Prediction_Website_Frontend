import React, { useState } from 'react'
import axios from 'axios'
import Toast from './Toast';


export default function Lung() {
  const data = {AGE : "",SMOKING : "",YELLOW_FINGERS : "",ANXIETY :"",PEER_PRESSURE : ""
  , CHRONIC_DISEASE : "",FATIGUE : "",ALLERGY : "", WHEEZING : "", 
  ALCHOHOL: "",CONSUMING:"",COUGHING : "",SHORTNESS_OF_BREATH: "",
  SWALLOWING_DIFFICULTY : "",CHEST_PAIN : ""};

  const [inputData, setInputdata] = useState(data)
  const [isToaster, setToaster] = useState(false)
  const [message, setMessage] = useState("")

  const handleData = (e)=>{
    setInputdata({...inputData, [e.target.name]:e.target.value})

  }

  const handleSubmit = (e)=>{
    e.preventDefault();
  for (let i in inputData) inputData[i] = Number(inputData[i])
    axios.post("http://127.0.0.1:8000/api/v1/lung-predict", inputData)
    .then((response)=>{
      console.log(response.data);
      setMessage(response.data.message);
      setToaster(true);
      window.scrollTo(0,0);
    })
  }


  return (
    <div className='h-[200vh] bg-gradient-to-r from-purple-500 to-pink-500'>
      {isToaster&&<Toast message={message} setToaster={setToaster}/>}
      <div className="container mx-auto p-8">
  <h1 className="text-4xl font-bold text-center mb-8">
    Lung Cancer Prediction
  </h1>
  <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
    <form>
      <div className="mb-4">
        <label htmlFor="Age" className="block text-gray-700 font-semibold mb-2">
          Age:
        </label>
        <input
          type="number"  min="0"
          id="AGE"
          name="AGE"
          value={inputData.AGE}
          onChange={handleData}
          className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
          placeholder="Enter age"
          required=""
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Smoking" className="block text-gray-700 font-semibold mb-2">
        Smoking:
        </label>
        <input
          type="number" min="0"
          id="SMOKING"
          name="SMOKING"
          value={inputData.SMOKING}
          onChange={handleData}
          className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
          placeholder="Enter smoking years"
          required=""
        />
      </div>
      <div className="mb-4">
        <label htmlFor="yellow Fingers" className="block text-gray-700 font-semibold mb-2">
        Yellow Fingers:
        </label>
        <input
          type="number"
          id="YELLOW_FINGERS" min="0"
          name="YELLOW_FINGERS"
          value={inputData.YELLOW_FINGERS}
          onChange={handleData}
          className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
          placeholder="Enter yellow fingers"
          required=""
        />
      </div>
      <div className="mb-4">
        <label htmlFor="anxiety" className="block text-gray-700 font-semibold mb-2">
          Anxiety:
        </label>
        <input
          type="number" min="0"
          id="ANXIETY"
          name="ANXIETY"
          value={inputData.ANXIETY}
          onChange={handleData}
          className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
          placeholder="Enter Anxiety"
          required=""
        />
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">
          Peer Pressure:
        </label>
        <input
          type="number" min="0"
          id="PEER_PRESSURE"
          name="PEER_PRESSURE"
          value={inputData.PEER_PRESSURE}
          onChange={handleData}
          className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
          placeholder="Enter Peer Pressure"
          required=""
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Chronic Disease" className="block text-gray-700 font-semibold mb-2">
          Chronic Disease:
        </label>
        <input
          type="number" min="0"
          id="CHRONIC_DISEASE"
          name="CHRONIC_DISEASE"
          value={inputData.CHRONIC_DISEASE}
          onChange={handleData}
          className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
          placeholder="Enter Chronic Disease"
          required=""
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Fatigue" className="block text-gray-700 font-semibold mb-2">
          Fatigue:
        </label>
        <input
          type="number" min="0"
          id="FATIGUE"
          name="FATIGUE"
          value={inputData.FATIGUE}
          onChange={handleData}
          className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
          placeholder="Enter Fatigue"
          required=""
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Allergy" className="block text-gray-700 font-semibold mb-2">
          Allergy:
        </label>
        <input
          type="number" min="0"
          id="ALLERGY"
          name="ALLERGY"
          value={inputData.ALLERGY}
          onChange={handleData}
          className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
          placeholder="Enter Allergy"
          required=""
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Wheezing" className="block text-gray-700 font-semibold mb-2">
          Wheezing:
        </label>
        <input
          type="number" min="0"
          id="WHEEZING"
          name="WHEEZING"
          value={inputData.WHEEZING}
          onChange={handleData}
          className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
          placeholder="Enter Wheezing"
          required=""
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Alchohol" className="block text-gray-700 font-semibold mb-2">
          Alchohol:
        </label>
        <input
          type="number" min="0"
          id="ALCHOHOL"
          name="ALCHOHOL"
          value={inputData.ALCHOHOL}
          onChange={handleData}
          className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
          placeholder="Enter Alchohol"
          required=""
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Consuming" className="block text-gray-700 font-semibold mb-2">
          Consuming:
        </label>
        <input
          type="number" min="0"
          id="CONSUMING"
          name="CONSUMING"
          value={inputData.CONSUMING}
          onChange={handleData}
          className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
          placeholder="Enter Consuming"
          required=""
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Coughing" className="block text-gray-700 font-semibold mb-2">
          Coughing:
        </label>
        <input
          type="number" min="0"
          id="COUGHING"
          name="COUGHING"
          value={inputData.COUGHING}
          onChange={handleData}
          className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
          placeholder="Enter Coughing"
          required=""
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Shortness Of Breath" className="block text-gray-700 font-semibold mb-2">
          Shortness Of Breath:
        </label>
        <input
          type="number" min="0"
          id="SHORTNESS_OF_BREATH"
          name="SHORTNESS_OF_BREATH"
          value={inputData.SHORTNESS_OF_BREATH}
          onChange={handleData}
          className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
          placeholder="Enter Shortness Of Breath"
          required=""
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Swallowing Difficulty" className="block text-gray-700 font-semibold mb-2">
          Swallowing Difficulty:
        </label>
        <input
          type="number" min="0"
          id="SWALLOWING_DIFFICULTY"
          name="SWALLOWING_DIFFICULTY"
          value={inputData.SWALLOWING_DIFFICULTY}
          onChange={handleData}
          className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
          placeholder="Enter Swalloing Difficulty"
          required=""
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Chest Pain" className="block text-gray-700 font-semibold mb-2">
          Chest Pain:
        </label>
        <input
          type="number" min="0"
          id="CHEST_PAIN"
          name="CHEST_PAIN"
          value={inputData.CHEST_PAIN}
          onChange={handleData}
          className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
          placeholder="Enter Chest Pain"
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
