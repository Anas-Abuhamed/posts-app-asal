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
                password: '',
                confirmPassword: '',
            }}
            validationSchema={userSchema}
            onSubmit={onSubmit}
        >
            {(props) =>
                <Form className="register-form">
                    <CustomInput label={"username"} type="text" name="username" placeholder="Username" />
                    <CustomInput label={"email"} type="text" name="email" placeholder="Email" />
                    <CustomInput label={"password"} type="password" name="password" placeholder="Password" />
                    <CustomInput label={"confirmPassword"} type="password" name="confirmPassword" placeholder="Confirm Password" />
                    <button type="submit" disabled={props.isSubmitting}>Register</button>
                </Form>
            }
        </Formik>
    )
}
export default Register;
