import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';

import Jumbotron from '../components/Jumbotron';

import image from '../assets/contact/desktop/bg-pattern-hero-desktop.svg';
import Locations from '../components/Locations';

/**
 * The Contact component is a functional component that uses the useForm hook to create a form that
 * submits to Netlify
 */
const Contact = () => {

    useEffect(() => {
        const midsection = document.querySelector('.midsection');
        midsection.style = "display: none";
        console.log(midsection)
    }, [])

    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = (data, e) => {
        e.target.reset();
        console.log(JSON.stringify(data));
    }
    return (
        <>
            <div className="contact">
                <Jumbotron mImage={image}>
                <div className="contact-content">
                    <h1>contact us</h1>
                    <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
                </div>
                <div className="form-content">
                    <form name="contact" onSubmit={handleSubmit(onSubmit)} data-netlify="true">
                    <input type="hidden" name="contact" value="contact" />
                        <div>
                            <input placeholder="Full Name" type="text" {...register("fullName", {required: true})} />
                            {errors.fullName && <span>This field is required</span>}
                        </div>
                        <div>
                            <input placeholder="Email" type="email" {...register("email", {required: true})} />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div>
                            <input placeholder="Phone" type="text" {...register("phoneNumber")} />
                        </div>
                        <div>
                            <input id="message" placeholder="Message" type="textarea" {...register("message")} />
                        </div>
                        <input id="submit" className="btn btn-custom" type="submit" placeholder="submit" />
                    </form>
                    </div>
                </Jumbotron>
                <Locations />
            </div>
        </>
    )
}

export default Contact;