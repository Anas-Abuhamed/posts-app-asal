import * as yup from "yup";
const requiredMessage = "required";
const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const userSchema = yup.object({
    username: yup.string().required(requiredMessage).min(3).max(30),
    email: yup.string().required(requiredMessage).email("Enter a valid email"),
    password: yup.string()
        .required(requiredMessage)
        .matches(
            passwordRegex,
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
        )
        .min(8, "password should be at least 8 characters"),
    confirmPassword: yup.string()
        .required(requiredMessage)
        .oneOf([yup.ref("password")], "Passwords must match"),
});
