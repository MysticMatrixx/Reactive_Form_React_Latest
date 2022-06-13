import { AbstractControl } from "react-reactive-form";
import './ReactiveForm.css'
// import { useState } from "react";
import Select from "react-select";


const SelectOptions = ({
    handler,
    hasError,
    touched,
    meta: { label, options, placeholder, message }
} : AbstractControl ) => (
    <>
        <div className>
            <label className='left_align'>{label}</label>
            {/*<select className='optionsColor'*/}
            {/*        {...handler()}>*/}
            {/*    {options.map(({ value, label }, index) => <option value={value} >{label}</option>)}*/}
            {/*</select>*/}
            <Select
                getOptionLabel={options => options.name}
                getOptionValue={options => options.id}
                placeholder={placeholder}
                className='optionsColor field'
                options={options}
                {...handler()}
            />
            <div className='erorr'>
                        { touched && hasError('required') && message}
            </div>
        </div>
    </>
);

export default SelectOptions;
