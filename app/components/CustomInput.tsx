import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label>{label}</label>
            <input className={meta.error && meta.touched ? "input-error" : ""} {...field} {...props} />
            {meta.error && meta.touched && <p className="error-message">{meta.error}</p>}
        </>
    )
}

export default CustomInput
