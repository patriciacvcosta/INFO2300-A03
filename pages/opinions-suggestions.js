import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'
import { useForm } from 'react-hook-form'

const Review = () => {
    const [form, setForm] = useState({
        FullName: '',
        Email: '',
        Phone: '',
        Suggestion: '',
        Score: 0
    })

    const scores = [0, 1, 2, 3, 4, 5]

    const [sucess, setSuccess] = useState(false)
    const [dataReturn, setDataReturn] = useState({})
    const [showLoading, setShowLoading] = useState(false)

    const save = async () => {
        setShowLoading(true)
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })

            const data = await response.json()
            setSuccess(true)
            setDataReturn(data)
        }
        catch (err) {
        }
    }

    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name

        setForm(old => ({
            ...old, //gets everything from the old form and copies
            [key]: value
        }))
    }

    const normalizePhoneNumber = (value) => {

        if (value.match(/^(\d{10})$/)) {
            return '(' + value.substr(0, 3) + ') ' + value.substr(3, 3) + '-' + value.substr(6, 4)
        }
        return value
    }

    const { register, handleSubmit, errors, control } = useForm();
    const validator = require("email-validator");

    return (
        <div className='pt-6'>
            <PageTitle title='Reviews' />
            <h1 className='text-2xl text-center font-bold my-4'>Opinions and Suggestions</h1>
            <p className='text-center mb-6'>
                Restaurant X always seeks to better serve its customers. <br />
                This is is why we are always open to hear what you think!
            </p>

            {!sucess &&
                <form className='sm:w-auto md:w-full lg:w-1/5 xl:w-1/5 mx-auto' onSubmit={handleSubmit(save)}>

                    <label className='font-bold'>Full Name:</label>
                    <input
                        type='text'
                        className='w-full p-4 block shadow bg-blue-100 my-2 rounded'
                        placeholder='Full Name'
                        onChange={onChange}
                        name='FullName'
                        defaultValue={form.FullName}
                        ref={
                            register({
                                required: true,
                                minLength: 2
                            })
                        }
                    />
                    {errors.FullName &&
                        <span className='block italic bold pb-4 text-red-500 text-xs'>
                            This field is required and must have at least 2 characters.
                        </span>
                    }

                    <label className='font-bold'>Email:</label>
                    <input
                        type='text'
                        className='w-full p-4 block shadow bg-blue-100 my-2 rounded'
                        placeholder='Email'
                        onChange={onChange}
                        name='Email'
                        defaultValue={form.Email}
                        ref={
                            register({
                                required: true,
                                validate: {
                                    validEmail: value => validator.validate(value)
                                }
                            })
                        }
                    />
                    {errors.Email && errors.Email.type === 'required' &&
                        <span className='block italic bold pb-4 text-red-500 text-xs'>
                            This field is required.
                        </span>
                    }
                    {errors.Email && errors.Email.type === 'validEmail' &&
                        <span className='block italic bold pb-4 text-red-500 text-xs'>
                            This field must be a valid email.
                        </span>
                    }

                    <label className='font-bold'>Phone:</label>
                    <input
                        type='tel'
                        className='w-full p-4 block shadow bg-blue-100 my-2 rounded'
                        placeholder='(xxx) xxx-xxxx'
                        onChange={onChange}
                        name='Phone'
                        defaultValue={form.Phone}
                        ref={
                            register({
                                required: true,
                                validate: {
                                    phonePattern:
                                        (value) =>
                                            /^(\(\d{3}\)\s\d{3}\-\d{4})$/.test(value) ||
                                            /^(\d{10})$/.test(value)
                                }
                            })
                        }
                        onBlur = {(event) => {
                            const {value} = event.target
                            event.target.value = normalizePhoneNumber(value)
                            onChange(event)
                        }}
                    />
                    {errors.Phone &&
                        <span className='block italic bold pb-4 text-red-500 text-xs'>
                            Phone is required and must follow the pattern: (xxx) xxx-xxxx.
                        </span>
                    }
                    <label className='font-bold'>Opinions and/or Suggestions:</label>
                    <textarea
                        type='text'
                        className='w-full h-40 p-4 block shadow bg-blue-100 my-2 rounded'
                        placeholder='Your opinion and/or suggestion...'
                        onChange={onChange}
                        name='Suggestion'
                        defaultValue={form.Suggestion}
                        ref={
                            register({
                                required: true,
                                minLength: 10
                            })
                        }
                    />
                    {errors.Suggestion &&
                        <span className='block italic bold pb-4 text-red-500 text-xs'>
                            This field is required and must have at least 10 characters.
                        </span>
                    }

                    <label className='font-bold'>Score:</label>
                    <div className='w-full flex p-3 shadow bg-blue-100 my-2 rounded'>
                        {scores.map(score => {
                            return (
                                <label key={'score-' + score.toString()} className='block text-center ml-4 mr-2'>
                                    {score} <br />
                                    <input
                                        type='radio'
                                        name='Score'
                                        value={score}
                                        onChange={onChange}
                                        ref={
                                            register({
                                                required: true
                                            })
                                        }
                                    />
                                </label>
                            )
                        })}
                    </div>
                    {errors.Score &&
                        <span className='block italic bold pb-4 text-red-500 text-xs'>
                            This field is required
                        </span>
                    }

                    <button type='submit'
                        className={
                            showLoading
                                ? 'm-6 ml-16 bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow hidden'
                                : 'm-6 ml-16 bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'
                        }
                    >
                        Save
                    </button>

                    <span className={
                        showLoading
                            ? "inline-flex rounded-md shadow-sm"
                            : "inline-flex rounded-md shadow-sm hidden"
                    }
                    >
                        <button type="button"
                            className="inline-flex m-6 ml-16 bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow cursor-not-allowed"
                            disabled="">
                            <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24">
                                <circle
                                    className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4">
                                </circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                            Saving...
                        </button>
                    </span>

                </form>
            }

            {sucess &&
                <div className='mb-6 text-center w-1/5 mx-auto bg-blue-100 border-t-2 border-b-2 border-blue-500 text-blue-700'>
                    <p className="font-bold mt-8">Sent!</p>
                    <p className="text-sm mb-8">Thank you for letting us know your opinion!</p>
                    {
                        dataReturn.showCoupon &&
                        <div className='text-center border-dashed border-2 pt-10 pb-10 mb-2'>
                            Your coupon number is: <br />
                            <span className='font-bold text-2xl'>{dataReturn.Coupon}</span>
                        </div>
                    }
                    {
                        dataReturn.showCoupon &&
                        <div className='text-center p-4 mb-6'>
                            Your promo: <br />
                            <span className='font-bold block mb-8'>{dataReturn.Promo}</span>
                            <p className='italic'>Print this screen and show it to one of our waiters.</p>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Review