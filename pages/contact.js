import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";

export default Form;

function Form() {
const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required").min(3, "First Name must have minimum 4 characters"),
    lastName: Yup.string().required("Last name is required").min(4, "Last Name must have minimum 4 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    subject: Yup.string().required("subject is required"),
    message: Yup.string().required("Message is required").min(10, "Message must contain at least 10 characters"),
});
const formOptions = { resolver: yupResolver(validationSchema) };
const { register, handleSubmit, formState } = useForm(formOptions);
const { errors } = formState;

function onSubmit(data) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    return false;
}
return (
<Layout>
    <Head />
    <h1>Contact</h1>
    <div></div>
    <form onSubmit={handleSubmit(onSubmit)}>
<div className='form-content'>    
    <label>First Name</label>
    <input  name="firstName" type="text" {...register("firstName")} className={` ${
    errors.firstName ? "is-invalid" : ""}`}/>
    <div className="invalid"> {errors.firstName?.message} </div>
</div>
<div className='form-content'>
    <label>Last Name</label>
    <input name="lastName" type="text" {...register("lastName")} className={` ${ errors.lastName ? "is-invalid" : ""
    }`}/>
    <div className="invalid">{errors.lastName?.message}</div>
</div>
<div className='form-content'>    
    <label>Email</label>
    <input name="email" type="text" {...register("email")} className={` ${errors.email ? "is-invalid" : ""}`}/>
    <div className="invalid">{errors.email?.message}</div>
</div>
<div className='form-content'>    
    <label>Subject</label>
    <select name="subject" {...register("subject")} className={`subject ${errors.subject ? "is-invalid" : ""}`}>
    <option value=""></option>
    <option className='subject-option' value="Subject 1">Subject 1</option>
    <option className='subject-option' value="Subject 2">Subject 2</option>
    <option className='subject-option' value="Others">others</option>
    </select>
    <div className="invalid"> {errors.subject?.message}</div>
</div>
<div className='form-content'>    
    <label>Message</label>
    <input name="message" type="text" {...register("message")} className={`message ${
    errors.message ? "is-invalid" : ""}`}/>
    <div className="invalid"> {errors.message?.message} </div>
</div>
    <button type="submit" className="submit">
    Register
    </button>
</form>
<div>
    <img src="favicon.ico" className="form-img"></img>
</div>
</Layout>);}
