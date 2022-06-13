import { AbstractControl } from "react-reactive-form";
import './ReactiveForm.css'

const TextInput = ({
    handler,
    touched,
    hasError,
    meta: {label, placeholder, maxLength, minLength, message}
    }: AbstractControl) => (
        <>
            <div>
                <label className='left_align'>{label}</label><br/>
                <input className={'input_field'} placeholder={placeholder} maxLength={maxLength} minLength={minLength} {...handler('tel')}/>
                <div className='erorr'>
                        {touched && hasError('required') && message}
                </div>
            </div>
        </>
    );

export default TextInput;
