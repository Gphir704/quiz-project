import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createData } from "../store/createData.thunk";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //  R E G U L A R      ------  E X P R E S S I O N S
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const fullNameRef = useRef(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  //    C H E C K   ------    S T A T E

  const checkValues = () => {
    if (fullName.length < 8) {
      alert(` NEED MORE THEN 8 symbols`);
      return false;
    }
    if (!emailRegex.test(email)) {
      alert(`IS NOT VALID EMAIL `);
      return false;
    }
    if (!passwordRegex.test(passWord)) {
      alert(` AT LEAST 1, CAPITAL, 1 LOWER CASE , 1 speacial character `);

      return false;
    }
    if (passWord !== confirmPassword) {
      alert(` PASSWORDS DOESNT MATCH`);
      return false;
    }
    return true;
  };

  // H A N D L E -------  S U B M I T

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkValues()) return false;
    dispatch(createData({ fullName, email, passWord, selectedValue }));
    navigate("/home");
    return true;
  };

  useEffect(() => {
    fullNameRef.current.focus();
  }, []);
  //  J S X ___

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h1> Student </h1>
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setFullName(e.target.value)}
          ref={fullNameRef}
        />
        <input
          type="email"
          placeholder="Email  Adress"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <select
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          required
        >
          <option value="">Choose Your Course</option>
          <option value="Frontdend React">Frontdend React</option>
          <option value="Python Django">Python Django</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="QA/DIGITAL PRODUCTS">QA/DIGITAL PRODUCTS</option>
        </select>
        <button
          disabled={
            !fullName || !passWord || !confirmPassword || !selectedValue
          }
        >
          Sing Up
        </button>
        <Link to={"/login"}> Already have an account? Login </Link>
      </form>
    </div>
  );
};

export default RegisterPage;
