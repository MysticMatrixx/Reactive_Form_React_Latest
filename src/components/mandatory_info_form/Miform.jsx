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
        alternative_no: ['', Validators.pattern('^[5-9][0-9]{9}$')], // SIR JI BTAENGE
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


const category = [
    {id: '1', name: 'Chocolate'},
    {id: '2', name: 'Strawberry'},
    {id: '3', name: 'Vanilla'}
];

export default function Miform() {

    const designation = [];
    // const category = [];
    const caste = [];
    const qualification = [];
    const profession = [];
    const mandal = [];
    const native_state = [];
    const district = [];
    const religion = [];

    // const [designation, setDesignation] = useState([]);

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

    // useEffect(() => {
    //     // designationListFetch(BASE_URL + designation_url, payload);
    //
    // }, [])

    // console.log(designation);
    //
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
                                name='panna_no'
                                render={TextInput}
                                meta={{
                                    label: 'Panna No.',
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

                            <FieldControl
                                name='name'
                                render={TextInput}
                                meta={{
                                    label: 'Name',
                                    placeholder: 'Enter your name',
                                }}
                            />

                            <FieldControl name='gender' render={RadioButton}/>

                            <FieldControl
                                name='Category'
                                render={SelectOptions}
                                meta={{
                                    label: 'Category',
                                    placeholder: 'Select',
                                    options: category,
                                }}
                            />

                            <FieldControl
                                name='Caste'
                                render={SelectOptions}
                                meta={{
                                    label: 'Caste',
                                    placeholder: 'Select',
                                    options: caste,
                                }}
                            />

                            <FieldControl
                                name='qualification'
                                render={SelectOptions}
                                meta={{
                                    label: 'Qualification',
                                    placeholder: 'Select',
                                    options: qualification,
                                }}
                            />

                            <FieldControl
                                name='profession'
                                render={SelectOptions}
                                meta={{
                                    label: 'Profession',
                                    placeholder: 'Select',
                                    options: profession,
                                }}
                            />

                            <FieldControl name='dob' render={({handler}) => (
                                <>
                                    <div className>
                                        <label className>DOB</label><br/>
                                        <div>
                                            <input className='input_field' type={"date"} {...handler()}/>
                                        </div>
                                    </div>
                                </>
                            )}/>

                            <FieldControl
                                name='pincode'
                                render={TextInput}
                                meta={{
                                    label: 'Pin Code',
                                }}
                            />

                            <FieldControl
                                name='address'
                                render={TextInput}
                                meta={{
                                    label: 'Address',
                                }}
                            />

                            <FieldControl
                                name='mandal'
                                render={SelectOptions}
                                meta={{
                                    label: 'Mandal',
                                    placeholder: mandal,
                                }}
                            />

                            <FieldControl
                                name='native_state'
                                render={SelectOptions}
                                meta={{
                                    label: 'Native State',
                                    placeholder: 'Select',
                                    options: native_state,
                                }}
                            />

                            <FieldControl
                                name='relation_name'
                                render={TextInput}
                                meta={{
                                    label: "Father's Name",
                                }}
                            />

                            <FieldControl
                                name='district'
                                render={SelectOptions}
                                meta={{
                                    label: 'District',
                                    placeholder: 'Select',
                                    options: district,
                                }}
                            />

                            <FieldControl
                                name= 'religion'
                                render={SelectOptions}
                                meta={{
                                    label: 'Religion',
                                    placeholder: 'Select',
                                    options: religion,
                                }}
                            />

                            <FieldControl
                                name='whatsapp_no'
                                render={NumberInput}
                                meta={{
                                    label: 'Whatsapp No.',
                                }}
                            />

                            <FieldControl
                                name='alternative_no'
                                render={NumberInput}
                                meta={{
                                    label: 'Alternative No.',
                                }}
                            />

                            <FieldControl
                                name='email'
                                render={TextInput}
                                meta={{
                                    label: 'Email',
                                }}
                            />

                            <FieldControl
                                name='aadhaar_number'
                                render={NumberInput}
                                meta={{
                                    label: 'Aadhaar No.',
                                    minLength: 12,
                                    maxLength: 12,
                                    message: 'Enter a valid aadhaar number',
                                }}
                            />

                            <FieldControl
                                name='voter_id'
                                render={NumberInput}
                                meta={{
                                    label: 'Voter No.',
                                    message: 'Enter a valid voter number',
                                }}
                            />

                            <FieldControl
                                name='ration_card_number'
                                render={NumberInput}
                                meta={{
                                    label: 'Ration Card No.',
                                    message: 'Enter a valid ration card number'
                                }}
                            />

                            <FieldControl
                                name=''
                            />
                            <FieldControl
                                name=''
                            />
                            <FieldControl
                                name=''
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