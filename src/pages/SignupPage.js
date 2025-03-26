import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { db } from "../firebaseConfig"; 
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";


function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    degree: "",
    field: "",
    internship: "",
    whyChoose: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordStrength, setPasswordStrength] = useState("");
  const navigate = useNavigate(); 

  const internships = [
    "MERN Stack Internship",
    "MEAN Stack Internship",
    "PHP Development",
    "Web 3.0 Internship",
    "NodeJS Internship",
    "Flutter Internship",
    "React Native Internship",
    "Swift Internship",
    "Android Internship",
    "Photoshop Internship",
    "Illustrator Internship",
    "Autodesk Maya Internship",
    "Figma Internship",
    "Dialogflow Internship",
    "Alexa Skill Internship",
    "RA SA Internship",
    "Generative AI Internship",
    "Salesforce CRM Internship",
    "HTML CSS JS Internship",
    "React Internship",
    "WordPress Internship",
    "Angular Internship",
    "Django Internship",
    ".NET Core Internship",
    "NextJS Internship",
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "password") {
      const password = e.target.value;
      if (password.length < 8) {
        setPasswordStrength("Weak");
      } else if (password.match(/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/)) {
        setPasswordStrength("Strong");
      } else {
        setPasswordStrength("Moderate");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    if (passwordStrength === "Weak") {
        alert("Password is too weak. Please choose a stronger password.");
        return;
    }

    try {
        
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);

        
        const { name, email, degree, field, internship, whyChoose, password } = formData;
        const dataToSave = { name, email, degree, field, internship, whyChoose, password };

        
        await addDoc(collection(db, "signups"), dataToSave);

        alert("Sign-up successful! Check your email for further instructions.");

        
        navigate("/LoginPortal");
    } catch (error) {
        console.error("Error during sign-up: ", error);
        alert("Failed to sign up. Please try again later.");
    }
};


  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        background: "linear-gradient(to bottom right, #a0eac9, #34d399)",
        backgroundImage: `url('/frame.png'), url('/frame.png')`,
        backgroundPosition: "top left, bottom right",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-green-600">Sign Up</h1>
          <p className="text-gray-500">Join Internee.pk today!</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-black mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded-lg text-sm focus:ring focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-black mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded-lg text-sm focus:ring focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-black mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded-lg text-sm focus:ring focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-black mb-1">Degree</label>
              <select
                name="degree"
                value={formData.degree}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded-lg text-sm focus:ring focus:ring-green-300"
                required
              >
                <option value="" disabled>
                  Select your degree status
                </option>
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-black mb-1">Field</label>
              <input
                type="text"
                name="field"
                value={formData.field}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded-lg text-sm focus:ring focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-black mb-1">
                Select an Internship
              </label>
              <select
                name="internship"
                value={formData.internship}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded-lg text-sm focus:ring focus:ring-green-300"
                required
              >
                <option value="" disabled>
                  Select an internship
                </option>
                {internships.map((internship, index) => (
                  <option key={index} value={internship}>
                    {internship}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-black mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded-lg text-sm focus:ring focus:ring-green-300"
                required
              />
              <p
                className={`text-sm mt-1 ${
                  passwordStrength === "Strong"
                    ? "text-green-600"
                    : passwordStrength === "Moderate"
                    ? "text-yellow-500"
                    : "text-red-600"
                }`}
              >
                Password Strength: {passwordStrength || "Enter password"}
              </p>
            </div>
            <div>
              <label className="block text-sm text-black mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded-lg text-sm focus:ring focus:ring-green-300"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-black mb-1">
              Why choose this internship? (At least 3 sentences)
            </label>
            <textarea
              name="whyChoose"
              value={formData.whyChoose}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-lg text-sm focus:ring focus:ring-green-300"
              rows="2"
              required
            ></textarea>
          </div>
          <div className="flex justify-center mt-2">
            <button
              type="submit"
              className="px-4 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
