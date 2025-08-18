// import { Form, Formik } from "formik";
// import { userSchema } from "~/schemas/schemas";
// import CustomInput from "./CustomInput";
// import CustomCheckBox from "./CustomCheckBox";
// import CustomRadio from "./CustomRadio";

// const Register = () => {
//     return (
//         <Formik
//             initialValues={{
//                 username: "",
//                 email: "",
//                 age: 18,
//                 phoneNumber: "",
//                 birthDate: "",
//                 password: "",
//                 confirmPassword: "",
//                 image: "",
//                 gender: "",
//                 terms: false,
//             }}
//             validationSchema={userSchema}
//             onSubmit={async (values, actions) => {
//                 console.log("Form submitted with values:", values);
//                 await new Promise((resolve) => setTimeout(resolve, 1000));
//                 actions.resetForm();
//             }}
//         >
//             {(props) => (

//                 <Form className="register-form">
//                     <h2 className="form-header">Register</h2>

//                     <CustomInput
//                         label="Username"
//                         type="text"
//                         name="username"
//                         placeholder="Username"
//                     />
//                     <CustomInput
//                         label="Email"
//                         type="text"
//                         name="email"
//                         placeholder="Email"
//                     />
//                     <CustomInput
//                         label="Age"
//                         type="number"
//                         name="age"
//                         placeholder="Age"
//                         onKeyDown={(e) => {
//                             if (
//                                 ["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight"].includes(
//                                     e.key
//                                 )
//                             )
//                                 return;
//                             if (!/[0-9]/.test(e.key)) {
//                                 e.preventDefault();
//                             }
//                         }}
//                     />
//                     <CustomInput
//                         label="Phone Number"
//                         type="tel"
//                         name="phoneNumber"
//                         placeholder="Phone Number"
//                     />
//                     <CustomInput
//                         label="Birth Date"
//                         type="date"
//                         name="birthDate"
//                         placeholder="Birth Date"
//                     />
//                     <CustomInput
//                         label="Password"
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                     />
//                     <CustomInput
//                         label="Confirm Password"
//                         type="password"
//                         name="confirmPassword"
//                         placeholder="Confirm Password"
//                     />
//                     <div className="radio">

//                         <CustomRadio
//                             label="Male"
//                             name="gender"
//                             value="male"
//                         />
//                         <CustomRadio
//                             label="Female"
//                             name="gender"
//                             value="female"
//                         />
//                     </div>
//                     <CustomInput
//                         label="Add Image"
//                         type="file"
//                         name="image"
//                         placeholder="Add Image"
//                     />
//                     <CustomCheckBox
//                         label="I agree to the terms and conditions"
//                         name="terms"
//                     />
//                     <button
//                         className="register-button"
//                         type="submit"
//                         disabled={props.isSubmitting}
//                     >
//                         Register
//                     </button>
//                 </Form>
//             )}
//         </Formik>
//     );
// };

// export default Register;



import { Form, Formik, useFormikContext } from "formik";
import { useTranslation } from "react-i18next";
import { getUserSchema } from "~/schemas/schemas";
import CustomInput from "./CustomInput";
import CustomCheckBox from "./CustomCheckBox";
import CustomRadio from "./CustomRadio";
import { useEffect } from "react";
const RevalidateOnLanguageChange = () => {
    const { i18n } = useTranslation();
    const { validateForm, setErrors } = useFormikContext();
    useEffect(() => {
        validateForm().then(newErrors => setErrors(newErrors));
    }, [i18n.language]);

    return null; // no UI
};
const Register = () => {
    const { t, i18n } = useTranslation();


    return (
        <Formik
            initialValues={{
                username: "",
                email: "",
                age: 18,
                phoneNumber: "",
                birthDate: "",
                password: "",
                confirmPassword: "",
                image: "",
                gender: "",
                terms: false,
            }}
            validationSchema={getUserSchema(t)}
            onSubmit={async (values, actions) => {
                console.log("Form submitted with values:", values);
                await new Promise((resolve) => setTimeout(resolve, 1000));
                actions.resetForm();
            }}
        >
            {(props) => (
                <>

                    <Form className={`register-form ${i18n.language === "ar" ? "rtl" : "ltr"}`}>
                        <RevalidateOnLanguageChange />
                        <button
                            type="button"
                            onClick={() => { i18n.changeLanguage(i18n.language === "en" ? "ar" : "en"); getUserSchema(t) }}
                        >
                            {i18n.language === "en" ? "عربي" : "English"}
                        </button>
                        <h2 className="form-header">{t("register.title")}</h2>
                        <CustomInput
                            label={t("register.username")}
                            type="text"
                            name="username"
                            placeholder={t("register.username")}
                        />
                        <CustomInput
                            label={t("register.email")}
                            type="text"
                            name="email"
                            placeholder={t("register.email")}
                        />

                        <CustomInput
                            label={t("register.phoneNumber")}
                            type="tel"
                            name="phoneNumber"
                            placeholder={t("register.phoneNumber")}
                        />
                        <CustomInput
                            label={t("register.age")}
                            type="number"
                            name="age"
                            placeholder={t("register.age")}
                            onKeyDown={(e) => {
                                if (["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight"].includes(e.key))
                                    return;
                                if (!/[0-9]/.test(e.key)) {
                                    e.preventDefault();
                                }
                            }}
                        />
                        <CustomInput
                            label={t("register.birthDate")}
                            type="date"
                            name="birthDate"
                            placeholder={t("register.birthDate")}
                        />
                        <CustomInput
                            label={t("register.password")}
                            type="password"
                            name="password"
                            placeholder={t("register.password")}
                        />
                        <CustomInput
                            label={t("register.confirmPassword")}
                            type="password"
                            name="confirmPassword"
                            placeholder={t("register.confirmPassword")}
                        />

                        <div className="radio">
                            <CustomRadio label={t("register.male")} name="gender" value="male" />
                            <CustomRadio label={t("register.female")} name="gender" value="female" />
                        </div>

                        <CustomInput
                            label={t("register.image")}
                            type="file"
                            name="image"
                            placeholder={t("register.image")}
                        />
                        <CustomCheckBox
                            label={t("register.terms")}
                            name="terms"
                        />
                        <button
                            className="register-button"
                            type="submit"
                            disabled={props.isSubmitting}
                        >
                            {t("register.submit")}
                        </button>
                    </Form>
                </>
            )}
        </Formik>
    );
};

export default Register;
