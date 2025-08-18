import { Form, Formik } from "formik";
import { userSchema } from "~/schemas/schemas";
import CustomInput from "./CustomInput";
import { useSubmit } from "react-router";

const Register = () => {
    const submit = useSubmit();
    const onSubmit = async (values, actions) => {
        console.log("Form submitted with values:", values);
        await new Promise((resolve) => setTimeout(resolve, 1000))
        actions.resetForm();
    }
    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                age: 18,
                birthDate: '',
                password: '',
                confirmPassword: '',
                image: '',
                terms: false
            }}
            validationSchema={userSchema}
            onSubmit={onSubmit}
        >
            {(props) =>
                <Form className="register-form">
                    <CustomInput label={"username"} type="text" name="username" placeholder="Username" />
                    <CustomInput label={"email"} type="text" name="email" placeholder="Email" />
                    <CustomInput label={"age"} type="number" name="age" placeholder="Age" onKeyDown={(e) => { 
                        if (["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight"].includes(e.key))return;
                        if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                        }
                    }} />
                    <CustomInput label={"birthDate"} type="date" name="birthDate" placeholder="Birth Date" />
                    <CustomInput label={"password"} type="password" name="password" placeholder="Password" />
                    <CustomInput label={"confirmPassword"} type="password" name="confirmPassword" placeholder="Confirm Password" />
                    <CustomInput label={"add Image"} type="file" name="image" placeholder="Add Image" />
                    <CustomInput label={"I agree to the terms and conditions"} type="checkbox" name="terms" />
                    <button className="register-button" type="submit" disabled={props.isSubmitting}>Register</button>
                </Form>
            }
        </Formik>
    )
}
export default Register;
