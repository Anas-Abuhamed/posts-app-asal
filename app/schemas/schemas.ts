import * as yup from "yup";
const requiredMessage = "required";
const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const today = new Date();
const minDate = new Date(today.getFullYear() - 60, today.getMonth(), today.getDate());
const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
export const userSchema = yup.object({
    username: yup.string().required(requiredMessage).min(3).max(30),
    email: yup.string().required(requiredMessage).email("Enter a valid email"),
    age: yup.number().typeError("Age must be a number").required(requiredMessage).min(18, "You must be at least 18 years old").max(60, "Age must be less than 60"),
    birthDate: yup.date().required(requiredMessage).max(maxDate, "You must be at least 18 years old").min(minDate, "Age must be less than 60")
        .test("age-match", "Birth date is not suit with age", function (value) {
            if (!this.parent.age) return true;
            const birthDate = new Date(value);
            let calculatedAge = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            const dayDiff = today.getDate() - birthDate.getDate();
            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                calculatedAge--;
            }

            return calculatedAge === this.parent.age;
        }),
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
    image: yup.mixed().required(requiredMessage).test("fileType", "supported format [jpeg, png, gif]", (value) => {
        if (!value) return false;
        console.log("Uploaded file:", value);
        const supportedFormats = ["jpeg", "png", "gif"];
        return supportedFormats.includes(value.trim().split(".").pop());
    }),
    terms: yup.bool().oneOf([true], "You must accept the terms and conditions")
});
