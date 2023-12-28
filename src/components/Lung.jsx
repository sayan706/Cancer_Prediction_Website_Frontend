import React from 'react'

export default function Lung() {
  return (
    <div className='h-[200vh] bg-gradient-to-r from-purple-500 to-pink-500'>
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
          type="number" min="0" max="100"
          id="AGE"
          name="AGE"
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
          className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
          placeholder="Enter Shortness Of Breath"
          required=""
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Swalloing Difficulty" className="block text-gray-700 font-semibold mb-2">
          Swalloing Difficulty:
        </label>
        <input
          type="number" min="0"
          id="SWALLOING_DIFFICULTY"
          name="SWALLOING_DIFFICULTY"
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
          className="w-full px-3 py-2 border rounded-md
                  focus:outline-none focus:border-blue-500"
          placeholder="Enter age"
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
