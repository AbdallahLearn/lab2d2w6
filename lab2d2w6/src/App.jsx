import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [idealWeight, setIdealWeight] = useState(null);
    const [status, setStatus] = useState('');

    const calculate = () => {
        const heightInMeters = height / 100; // تحويل الطول إلى متر
        const calculatedBmi = weight / (heightInMeters * heightInMeters); // حساب BMI
        setBmi(calculatedBmi);

        // حساب الوزن المثالي باستخدام صيغة بسيطة (مؤشر كتلة الجسم المثالي)
        const idealWeight = 22 * (heightInMeters * heightInMeters);
        setIdealWeight(idealWeight);

        // تحديد حالة الكتلة
        if (calculatedBmi < 18.5) {
            setStatus('منخفض');
        } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
            setStatus('مثالي');
        } else {
            setStatus('عالي');
        }
    };

  return (
    <>
      <div className="container m-auto mt-40 text-center">
        <h1 className=" text-center">ادخل طولك و وزنك</h1>
        <div className="inputs flex justify-center items-center mt-5 max-sm:flex-col">
          <div className="input-weight me-5 max-sm:me-0 ">
            <input
              type="number"
              placeholder="Weight kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="p-2 border rounded mx-2"
              style={{ border: "1px solid black", padding: "10px 5px " }}
            />
          </div>
          <div className="input-height">
            <input
              type="number"
              placeholder="Height cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="p-2 border rounded mx-2"
              style={{ border: "1px solid black", padding: "10px 5px " }}
            />
          </div>
        </div>
        <button
          onClick={calculate}
          className="p-3 bg-blue-500  text-white rounded mt-4"
        >
          Calculate
        </button>
        {/* {bmi !== null && (
                <div className="mt-4">
                    <h2 className="text-xl">كتلة الجسم (BMI): {bmi.toFixed(2)}</h2>
                    <h2 className="text-xl">الوزن المثالي: {idealWeight.toFixed(2)} كجم</h2>
                    <h2 className="text-xl">حالة الكتلة: {status}</h2>
                    <img
                        src={status === 'منخفض' ? 'https://i.pinimg.com/564x/b9/2f/59/b92f596cae24e4882c12e3ef536959ac.jpg' : status === 'مثالي' ? 'https://i.pinimg.com/736x/2d/82/d5/2d82d5cb3d2bc3d84e596567bddb18c8.jpg' : 'https://m.media-amazon.com/images/I/61a1Geu-DsL._AC_UF1000,1000_QL80_.jpg'}
                        alt="صورة توضح شكل الجسم"
                        className="mt-4 w-1/2 mx-auto"
                    />
                </div>
            )} */}
        {bmi !== null && (
          <div className="mt-4">
            <h2 className="text-xl">كتلة الجسم (BMI): {bmi.toFixed(2)}</h2>
            <h2 className="text-xl">
              الوزن المثالي: {idealWeight.toFixed(2)} كجم
            </h2>
            <h2 className="text-xl">حالة الكتلة: {status}</h2>
            <img
              src={
                bmi < 18.5
                  ? "https://i.pinimg.com/564x/b9/2f/59/b92f596cae24e4882c12e3ef536959ac.jpg"
                  : bmi >= 18.5 && bmi < 24.5
                  ? "https://i.pinimg.com/736x/2d/82/d5/2d82d5cb3d2bc3d84e596567bddb18c8.jpg"
                  : bmi >= 25 && bmi < 30
                  ? "https://m.media-amazon.com/images/I/61a1Geu-DsL._AC_UF1000,1000_QL80_.jpg"
                  : bmi >= 30 && bmi < 35
                  ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-quZixzutXC5BVhPbzV3Tr2wwDic51aJTw&s" // استبدل بالرابط المناسب
                  : "https://i.pinimg.com/736x/4d/54/53/4d54536d7b055bde77ea0cec9b01bb9e.jpg" // استبدل بالرابط المناسب
              }
              alt="صورة توضح شكل الجسم"
              className="mt-4 w-1/2 mx-auto"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App
