import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import userFeedbackAction from "../rudux/userAction";
import Feedback from "./Feedback";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const UserFeedback = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [state, setState] = useState([]);
    const [country, setcountry] = useState([]);
    const [city, setcity] = useState([]);
    const [formData, setFormData] = useState({
        name: "varsha",
        gender: "Female",
        mobileNo: "7654632810",
        country: "india",
        state: "maharashtra",
        city: "pune",
        rating: "2",

    });

    /** Emplty Field */
    const [emptyFields, setEmptyFields] = useState([]);

    /** Update Field value */
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    /** Form Submission */
    const handleSubmit = (e) => {
        e.preventDefault();

        const emptyFieldsArray = Object.keys(formData).filter(
            (key) => formData[key] === ""
        );
        setEmptyFields(emptyFieldsArray);

        // if (emptyFieldsArray.length === 0) {

        // }

        console.log("user form data", formData);
        dispatch(userFeedbackAction(formData))
        navigate("/")

    };
    const handleCountryData = async () => {
        const {
            data: { data },
        } = await axios.get("https://countriesnow.space/api/v0.1/countries/states");
        // console.log(data);
        setcountry(data);
    };

    const handleStateData = async (arg) => {
        const { data: { data } } = await axios.get("https://countriesnow.space/api/v0.1/countries/states");
        const x = data.filter((item) => item.name === arg);
        setState(x[0].states.map(item => item.name))
    };







    useEffect(() => {
        handleCountryData()
    }, []);






    return (
        <div className='p-6 bg-white border border-gray-500 rounded-lg  text-black mt-10 shadow-white shadow-md mb-10 w-[460px]'>

            <p className='text-2xl text-[butler] font-medium  leading-10  text-[#08090A] mb-6  flex justify-start'>
                Lets Give FeedBack
            </p>
            <form onSubmit={handleSubmit}>
                <div className='mb-4 '>
                    <div className='mr-2 '>
                        <div className='text-[#08090A]  text-lg font-medium'>
                            Name
                        </div>
                        <input
                            type='text'
                            placeholder='name'
                            name='name'
                            onChange={handleChange}
                            value={formData.name}
                            id='name'
                            className={`outline-none mt-1 p-2  w-full border rounded-md flex-1  ${emptyFields.includes("name") ? "border-red-500" : ""
                                }`}
                        />
                    </div>


                </div>
                <div className="mb-4 ">
                    <div className="text-[#08090A] text-lg font-medium">
                        Gender
                    </div>
                    <div className="flex items-start justify-start">
                        <label className="inline-flex items-center mr-6">
                            <input
                                type="radio"
                                className="form-radio text-indigo-600 h-5 w-5"
                                name="gender"
                                value="male"
                                onChange={handleChange}
                                checked={formData.gender === 'male'}
                            />
                            <span className="ml-2">Male</span>
                        </label>
                        <label className="inline-flex items-center mr-6">
                            <input
                                type="radio"
                                className="form-radio text-indigo-600 h-5 w-5"
                                name="gender"
                                value="female"
                                onChange={handleChange}
                                checked={formData.gender === 'female'}
                            />
                            <span className="ml-2">Female</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                className="form-radio text-indigo-600 h-5 w-5"
                                name="gender"
                                value="other"
                                onChange={handleChange}
                                checked={formData.gender === 'other'}
                            />
                            <span className="ml-2">Other</span>
                        </label>
                    </div>
                </div>


                <div className='mb-4'>
                    <div className='text-[#08090A]  text-lg font-medium'>
                        MobileNo
                    </div>
                    <input
                        type='mobileNo'
                        placeholder='7788665544'
                        name='mobileNo'
                        onChange={handleChange}
                        value={formData.mobileNo}
                        id='mobileNo'
                        className={`outline-none mt-1 p-2  w-full border rounded-md flex-1  ${emptyFields.includes("mobileNo") ? "border-red-500" : ""
                            }`}
                    />
                </div>

                <div className="mb-4">
                    <div className='text-[#08090A]  text-lg font-medium'>
                        Country
                    </div>
                    <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={e => {
                            handleChange(e)
                            handleStateData(e.target.value)

                        }}
                        className={`outline-none mt-1 p-2 z-50  w-full border rounded-md flex-1  ${emptyFields.includes('country') ? 'border-red-500' : ''
                            }`}
                    >
                        {country &&
                            country.map((item) => (
                                <option key={item.id} value={item.name}>
                                    {item.name}
                                </option>
                            ))}

                    </select>
                </div>

                <div className="mb-4">
                    <div className='text-[#08090A]  text-lg font-medium'>
                        State
                    </div>
                    <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={(e) => {
                            handleChange(e)
                        }}
                        className={`outline-none mt-1 p-2 z-50  w-full border rounded-md flex-1  ${emptyFields.includes('state') ? 'border-red-500' : ''
                            }`}
                    >
                        {state && state.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}

                    </select>
                </div>

                <input type="text" id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`outline-none mt-1 p-2 z-50  w-full border rounded-md flex-1  ${emptyFields.includes('city') ? 'border-red-500' : ''
                        }`} />
                <div className="mb-4">
                    <div className='text-[#08090A]  text-lg font-medium'>
                        Rating
                    </div>
                    <select
                        id="rating"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        className={`outline-none mt-1 p-2 z-50  w-full border rounded-md flex-1  ${emptyFields.includes('rating') ? 'border-red-500' : ''
                            }`}
                    >
                        <option value="">Select rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                </div>

                <button
                    type='submit'
                    className='bg-slate-700 text-lg w-full text-[#FFFFFF] font-bold px-4 py-3 rounded-md mt-2'
                >
                    Add Rating
                </button>
            </form>

        </div>

        // <div className="grid grid-cols-12 gap-4 mb-10 mt-10">
        //     <div className="col-span-6">

        //     </div>
        //     <div className="col-span-6  mt-10">
        //         <h1 className="text-5xl text-center font-[Lato] text-white shadow-md p-4">Rating</h1>
        //         <Feedback />
        //     </div>
        // </div>

    );
};

export default UserFeedback;
