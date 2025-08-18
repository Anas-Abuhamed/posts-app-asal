import * as yup from "yup";

export const getUserSchema = (t) => {
    const passwordRegex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    const today = new Date();
    const minDate = new Date(today.getFullYear() - 60, today.getMonth(), today.getDate());
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

    return yup.object({
        username: yup.string().required(t("validation.required")).min(3, t("validation.minLength")).max(30, t("validation.maxLength")),
        email: yup.string().required(t("validation.required")).email(t("validation.email")),
        age: yup.number()
            .typeError(t("validation.number"))
            .required(t("validation.required"))
            .min(18, t("validation.minAge"))
            .max(60, t("validation.maxAge")),
        phoneNumber: yup.string()
            .required(t("validation.required"))
            .matches(/^\d{10}$/, t("validation.phone")),
        birthDate: yup.date()
            .required(t("validation.required"))
            .max(maxDate, t("validation.minAge"))
            .min(minDate, t("validation.maxAge"))
            .test("age-match", t("validation.birthDateMismatch"), birthDateSuitable),
        password: yup.string()
            .required(t("validation.required"))
            .matches(passwordRegex, t("validation.passwordFormat"))
            .min(8, t("validation.passwordLength")),
        confirmPassword: yup.string()
            .required(t("validation.required"))
            .oneOf([yup.ref("password")], t("validation.passwordsMustMatch")),
        gender: yup.string()
            .required(t("validation.required"))
            .oneOf(["male", "female"], t("validation.gender")),
        image: yup.mixed()
            .required(t("validation.required"))
            .test("fileType", t("validation.fileType"), imageFileType),
        terms: yup.bool()
            .oneOf([true], t("validation.terms"))
    });
};

// Helper functions
function birthDateSuitable(value) {
    if (!this.parent.age) return true;
    const birthDate = new Date(value);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) calculatedAge--;
    return calculatedAge === this.parent.age;
}

function imageFileType(value) {
    if (!value) return false;
    const supportedFormats = ["jpeg", "png", "gif"];
    return supportedFormats.includes(value.trim().split(".").pop());
}
