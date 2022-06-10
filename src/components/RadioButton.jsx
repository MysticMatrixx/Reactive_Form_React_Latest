import * as React from "react";
import './ReactiveForm.css'
import { AbstractControl } from "react-reactive-form";

const RadioButton = ({handler}: AbstractControl) => (
    <>
        <div className='inline'>
            <div>
                <label className='jagah' >Gender : </label>
            </div>
                <div className='inline'>
                <div>
                    <input {...handler('radio', 'male')}/>
                    <label>Male</label>
                </div>
                <div>
                    <input {...handler('radio', 'female')}/>
                    <label>Female</label>
                </div>
                <div>
                    <input {...handler('radio', 'other')}/>
                    <label>Other</label>
                </div>
            </div>
        </div>
    </>
);

export default RadioButton;