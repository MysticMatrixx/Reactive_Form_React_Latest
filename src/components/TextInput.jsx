import { AbstractControl } from "react-reactive-form";
import './ReactiveForm.css'

const TextInput = ({
    handler,
    meta: {label, placeholder}
    }: AbstractControl) => (
        <>
            <div>
                <label className='left_align'>{label}</label><br/>
                <input className={'input_field'} placeholder={placeholder} {...handler()}/>
            </div>
        </>
    );

export default TextInput;
