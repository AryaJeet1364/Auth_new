import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2' 
import 'react-phone-input-2/lib/style.css'
import "../Styles/Phone.css"
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import auth from "../firebase/setup"

const Phone = () => {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState("")

  const sendOtp = async() => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setUser(confirmation);
    } catch (error) {
      console.log(error);
    }

  }

  const verifyOtp = async () => {
    try {
      const data = await user.confirm(otp);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <PhoneInput
        country={"us"}
        value={phone}
        onChange={(phone) => setPhone("+" + phone)}
      />
      <br />
      <button onClick={sendOtp}>Send OTP</button>
      <div id="recaptcha"></div>
      <br />
      <br />
      <input onChange={(e)=>setOtp(e.target.value)}  type="text" />
      <br />
      <br />
      <button onClick={verifyOtp}>Verify OTP</button>
    </div>
  );
}

export default Phone
