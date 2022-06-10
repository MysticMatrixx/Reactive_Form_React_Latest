import * as React from "react";
import {useEffect, useState} from "react";
import {
    FormBuilder,
    FieldControl,
    FieldGroup,
    // FieldArray,
    Validators,
    AbstractControl,
} from "react-reactive-form";

import TextInput from '../TextInput';
import NumberInput from "../NumberInput";
import RadioButton from "../RadioButton";
import SelectOptions from "../SelectOptions";

// import DesignationList from "./designationList";
//
// const BASE_URL = 'https://saral-staging.ccdms.in';
// const designation_url = '';
// const AUTH_TOKEN = '';
//
// const payload = {
//     "type": "Designation",
//     "data_level": 7,
//     "country_state_id": 7,
//     "unit_id": 25,
//     "sub_unit_id": 58,
// }
//

class SimpleForm extends React.Component {

    static miForm = FormBuilder.group({

        // PRIMARY FIELD INFORMATION :
        designation: ['', Validators.required],
        panna: ['', Validators.required, Validators.pattern('^([3-9]|[12345][0-9]|6[0])$')],
        phone_no: ['', Validators.required, Validators.pattern('^[5-9][0-9]{9}$')],
        name: '',
        gender: '',
        category: '',
        caste: '',
        qualification: '',
        profession: '',
        dob: '',
        pin_code: ['', Validators.pattern('^[1-9][0-9]{5}$')],
        full_address: '',
        mandal: '', // SARTHAK SIR DEKH KE BATAENGE
        native_state: '',

        // SECONDARY FIELD INFORMATION :
        relation_name: '', //FATHER'S NAME
        district: '',
        religion: '',
        whatsapp_no: ['', Validators.pattern('^[5-9][0-9]{9}$')],
        alternate_no: ['', Validators.pattern('^[5-9][0-9]{9}$')], // SIR JI BTAENGE
        email: ['', Validators.email],
        aadhaar_number: ['', Validators.pattern('^(0 |[1-9 ][0-9 ]*)$')],
        voter_id: '',
        ration_card_number: ['', Validators.pattern('^[a-zA-Z0-9]+$')],
        car: '',
        smartphone: '',
        bike: '',
        option: '',
    });

    static handleSubmit(e: React.MouseEvent<HTMLButtonsElement>) {
        e.preventDefault();
        console.log(JSON.stringify(this.miForm.value, null, 2));
    }

    // static handleReset() {
    //     this.myForm.reset();
    // }
}


const options = [
    {id: '1', name: 'Chocolate'},
    {id: '2', name: 'Strawberry'},
    {id: '3', name: 'Vanilla'}
];

export default function Miform() {
    const [designation, setDesignation] = useState([]);

    // async function designationListFetch(url = '', data = {}) {
    //     let response = await fetch(url, {
    //         // ...
    //         method: 'POST',
    //         headers: {
    //             'Accept': '*/*',
    //             'Content-Type': 'application/json',
    //             'Authorization': AUTH_TOKEN,
    //             // 'Connection': 'keep-alive',
    //         },
    //         body: JSON.stringify(data),
    //     })
    //         .catch(err => console.log(err));
    //
    //     const result = await response.json();
    //     console.log(response.ok ? "DESIGNATION FETCH SUCCESS" : "DESIGNATION FETCH FAILURE");
    //     setDesignation(result.data);
    // }

    useEffect(() => {
        // designationListFetch(BASE_URL + designation_url, payload);

    }, [])

    console.log(designation);

    return (
        <div className="App">
            <header className="App-header">
                <FieldGroup
                    control={SimpleForm.miForm}
                    render={({invalid}: AbstractControl) => (
                        <form onSubmit={() => SimpleForm.handleSubmit}>

                            <FieldControl
                                name='designation'
                                render={SelectOptions}
                                meta={{
                                    label: 'Designation',
                                    placeholder: 'Select',
                                    options: designation,
                                    message: 'Designation is required'
                                }}
                            />

                            <FieldControl
                                name='name'
                                render={TextInput}
                                meta={{
                                    label: 'Name',
                                    placeholder: 'Enter your name',
                                }}
                            />

                            <FieldControl
                                name='phone_no'
                                render={NumberInput}
                                meta={{
                                    label: 'Phone No.',
                                    placeholder: 'Phone',
                                    maxLength: '10',
                                    minLength: '10',
                                    message: 'Phone number required',
                                    // pattern: '[6-9]{1}[0-9]{9}', // //NOT WORKING :')
                                }}
                            />

                            <FieldControl name='dob' render={({handler}) => (
                                <>
                                    <div className='inline'>
                                        <label className='space'>DOB : </label>
                                        <div>
                                            <input type={"date"} {...handler()}/>
                                        </div>
                                    </div>
                                </>
                            )}/>

                            <FieldControl name='gender' render={RadioButton}/>

                            <FieldControl
                                name='option'
                                render={SelectOptions}
                                meta={{
                                    label: 'Select',
                                    placeholder: 'Select',
                                    options: options,
                                }}
                            />

                            <div>
                                <button
                                    disabled={invalid}
                                    onClick={e => SimpleForm.handleSubmit(e)}
                                >
                                    Submit
                                </button>

                            </div>
                        </form>
                    )}
                />
            </header>
        </div>
    );
}