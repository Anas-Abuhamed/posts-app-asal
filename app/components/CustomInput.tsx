import { useField } from "formik";
import { useTranslation } from "react-i18next";

const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const { i18n } = useTranslation();
    return (
        <>
            <label className="custom-label">{label}</label>
            <input
                className={meta.error && meta.touched ? "input-error" : "custom-input"}
                dir={i18n.language === "ar" ? "rtl" : "ltr"}
                {...field}
                {...props}
            />
            {meta.error && meta.touched && (
                <p className="error-message">{meta.error}</p>
            )}
        </>
    );
}

export default CustomInput;
