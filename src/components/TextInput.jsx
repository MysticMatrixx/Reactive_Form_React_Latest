import { AbstractControl } from "react-reactive-form";
import './ReactiveForm.css'

const TextInput = ({
    handler,
    meta: {label, placeholder}
    }: AbstractControl) => (
        <>
            <div>
                <label className='space'>{label} : </label>
                <input placeholder={placeholder} {...handler()}/>
            </div>
        </>
    );

export default TextInput;
