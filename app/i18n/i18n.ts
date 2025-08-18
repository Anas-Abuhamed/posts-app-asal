import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
i18next.use(initReactI18next).use(languageDetector).init({
    fallbackLng: "en",
    lng: "en",
    resources: {
        en: {
            translation: {
                register: {
                    title: "Register",
                    username: "Username",
                    email: "Email",
                    age: "Age",
                    phoneNumber: "Phone Number",
                    birthDate: "Birth Date",
                    password: "Password",
                    confirmPassword: "Confirm Password",
                    male: "Male",
                    female: "Female",
                    image: "Add Image",
                    terms: "I agree to the terms and conditions",
                    submit: "Register"
                },
                validation: {
                    required: "This field is required",
                    minLength: "Must be at least 3 characters",
                    maxLength: "Must be at most max 30 characters",
                    email: "Enter a valid email",
                    number: "Must be a number",
                    minAge: "You must be at least 18 years old",
                    maxAge: "Age must be less than 60",
                    phone: "Phone number must be 10 digits",
                    birthDateMismatch: "Birth date does not match age",
                    passwordFormat: "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character",
                    passwordLength: "Password should be at least 8 characters",
                    passwordsMustMatch: "Passwords must match",
                    gender: "Select a gender",
                    fileType: "Supported formats are jpeg, png, gif",
                    terms: "You must accept the terms and conditions"
                }
            }
        },
        ar: {
            translation: {
                register: {
                    title: "تسجيل",
                    username: "اسم المستخدم",
                    email: "البريد الإلكتروني",
                    age: "العمر",
                    phoneNumber: "رقم الهاتف",
                    birthDate: "تاريخ الميلاد",
                    password: "كلمة المرور",
                    confirmPassword: "تأكيد كلمة المرور",
                    male: "ذكر",
                    female: "أنثى",
                    image: "إضافة صورة",
                    terms: "أوافق على الشروط والأحكام",
                    submit: "تسجيل"
                },
                validation: {
                    required: "هذا الحقل مطلوب",
                    minLength: "يجب أن يكون الطول 3 أحرف على الأقل",
                    maxLength: "يجب أن يكون الطول 30 حرفًا على الأكثر",
                    email: "أدخل بريدًا إلكترونيًا صحيحًا",
                    number: "يجب أن يكون رقمًا",
                    minAge: "يجب أن يكون عمرك 18 عامًا على الأقل",
                    maxAge: "يجب أن يكون عمرك أقل من 60 عامًا",
                    phone: "يجب أن يحتوي رقم الهاتف على 10 أرقام",
                    birthDateMismatch: "تاريخ الميلاد لا يتطابق مع العمر",
                    passwordFormat: "يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل، وحرف كبير وحرف صغير ورقم ورمز خاص",
                    passwordLength: "يجب أن تكون كلمة المرور 8 أحرف على الأقل",
                    passwordsMustMatch: "يجب أن تتطابق كلمتا المرور",
                    gender: "اختر الجنس",
                    fileType: "الأنواع المدعومة: jpeg, png, gif",
                    terms: "يجب أن توافق على الشروط والأحكام"
                }
            }
        }
    }
});
