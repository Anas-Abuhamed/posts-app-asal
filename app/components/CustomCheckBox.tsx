import { useField } from "formik";
import { useTranslation } from "react-i18next";

const CustomCheckBox = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const { i18n } = useTranslation();
    return (
        <label>
            {
                i18n.language === "ar" ?
                    <>
                        {label}
                        <input type="checkbox" {...field} {...props} />
                    </> :
                    <>
                        <input type="checkbox" {...field} {...props} />
                        {label}
                    </>}
            {meta.error && meta.touched && (<p className="error-message">{meta.error}</p>)}
        </label>
    );
}
export default CustomCheckBox;
