import { useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useEffect, useState } from 'react'
import pimage from '../assets/profile.webp'
import { addContact } from '../store/slices/ContatcSlice'
import { useDispatch } from 'react-redux'

export default function Form() {
    const [profileImage, setProfileImage] = useState(pimage)

    const dispatch = useDispatch()

    const [formData, setFormData] = useState([])

    useEffect(() => {
        console.log('formData: ', formData);
    }, [formData])

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        image: null,
        facebook: '',
        twitter: '',
        instagram: '',
    }

    const formSchema = Yup.object().shape({
        name: Yup.string()
            .required('required'),
        email: Yup.string()
            .email('Invalid email')
            .required('required'),
        phone: Yup.string()
            .matches(/^\d{10}$/, "Invalid phone number")
            .required("required"),
        image: Yup.mixed()
            .required("Image is required")
    })

    const formik = useFormik({
        initialValues,
        validationSchema: formSchema,
        onSubmit: (values, { resetForm }) => {
            console.log('values: ', values);
            resetForm();
            setProfileImage(pimage);
            dispatch(addContact(values)); // Dispatch the addContact action
        },
    });

    const handleImageChange = async (event) => {
        const selectedFile = event.target.files[0];
        formik.setFieldValue("image", selectedFile);
        setProfileImage(URL.createObjectURL(selectedFile));
    };

    // const handleDelete = (index) => {
    //     const newData = formData.filter((data, i) => i !== index);
    //     setFormData(newData);
    // };

    return (
        <>
            <form className='form p-3' onSubmit={formik.handleSubmit}>
                <div className="container">
                    <h5 className="text-center">Add Detail</h5>
                    <div className="row">
                        <div className="col-md-7">
                            <div>
                                <label htmlFor="name">Name: {formik.touched.name && formik.errors.name && <span className='text-danger'>{formik.errors.name}</span>}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className='form-control'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                            </div>
                            <div className='mt-4'>
                                <label htmlFor="email">Email: {formik.touched.email && formik.errors.email && <span className='text-danger'>{formik.errors.email}</span>}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className='form-control'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                            </div>
                            <div className='mt-4'>
                                <label htmlFor="phone">Phone: {formik.touched.phone && formik.errors.phone && <span className='text-danger'>{formik.errors.phone}</span>}
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    className='form-control'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                    maxLength={10}
                                    onInput={(e) => { e.target.value = e.target.value.slice(0, 10).replace(/\D/g, ""); }}
                                />
                            </div>

                        </div>
                        <div className="col-md-5 mt-4 mt-md-0">
                            <div className="imgPrev" style={{ backgroundImage: `url(${profileImage})` }}>
                                <label htmlFor="image"></label>
                                <input
                                    type="file"
                                    name="image"
                                    id="image"
                                    className='d-none'
                                    onChange={handleImageChange}
                                    onBlur={formik.handleBlur}
                                    accept='.jpg'
                                />
                            </div>
                            {formik.touched.image && formik.errors.image && <span className='text-danger'>{formik.errors.image}</span>}
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    <h5 className="text-center">Social Links</h5>

                    <div className="input-group mb-4">
                        <span className="input-group-text">facebook</span>
                        <input
                            type="url"
                            name="facebook"
                            id="facebook"
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.facebook}
                        />
                    </div>
                    <div className="input-group mb-4">
                        <span className="input-group-text">twitter</span>
                        <input
                            type="url"
                            name="instagram"
                            id="instagram"
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.instagram}
                        />
                    </div>
                    <div className="input-group mb-4">
                        <span className="input-group-text">instagram</span>
                        <input
                            type="url"
                            name="twitter"
                            id="twitter"
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.twitter}
                        />
                    </div>
                </div>
                <div className='container mt-4'>
                    <button className='btn btn-primary' type="submit">Save</button>
                </div>
            </form>
        </>

    )
}



