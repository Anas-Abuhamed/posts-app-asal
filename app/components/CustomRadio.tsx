import { useField } from "formik";

const CustomRadio = ({ label, ...props }) => {
    const [field, meta] = useField({ ...props, type: "radio" });

    return (
        <div>
            <input
                type="radio"
                id={props.value}
                {...field}
                {...props}
            />
            <label htmlFor={props.value} className="text-gray-700">
                {label}
            </label>
            {meta.touched && meta.error && <p className="error-message">{meta.error}</p>}
        </div>
    );
};

export default CustomRadio;
