import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function DynamicFieldsForm() {
    const initialValues = {
        name: '',
        phone:'',
        tickets: []
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Number of tickets is required'),
        phone: Yup.string().min(10).max(10)
            .required('Phone is required'),
        tickets: Yup.array().of(
            Yup.object().shape({
                city: Yup.string()
                    .required('City is required'),
                pincode: Yup.string().min(6).max(6)
                    .required('Pincode is required'),
                kilos:Yup.number().min(0).required('Kilos is required'),
                costs:Yup.number().min(0).required('cost is required'),             
            })
        )
    });
    function addField(values) {
        // update dynamic form 
        values.tickets.push({ city: '', pincode: '',kilos:0,costs:0 });
    }
    function submit(values) {
        // update dynamic form 
       console.log(values);
    }


    function onSubmit(fields) {
        // display form field values on success
        console.log(fields);
       // alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
    }
    function deleteField(i,values,setValues) {
        values.tickets.splice(i, 1);
        
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, values, touched, setValues }) => (
                <Form>
                    <div className="card m-3">
                        <h5 className="card-header">React + Formik Dynamic Form Example</h5>
                        <div className="card-body border-bottom">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Name</label>
                                    <Field name="name"/>
                                    <label>Phone</label>
                                    <Field name="phone"/>
                                </div>
                            </div>
                        </div>
                        <FieldArray name="tickets">
                        {() => (values.tickets.map((ticket, i) => {
                            const ticketErrors =( (errors.tickets?.length) && errors.tickets[i] )|| {};
                            const ticketTouched = (touched.tickets?.length && touched.tickets[i] )|| {};
                            return (
                                <div key={i} className="list-group list-group-flush">
                                    <div className="list-group-item">
                                       
                                        <div className="form-row">
                                            <div className="form-group col-6">
                                                <label>City</label>
                                                <Field name={`tickets.${i}.city`} type="text" className={'form-control' + (ticketErrors.city && ticketTouched.city ? ' is-invalid' : '' )} />
                                                <ErrorMessage name={`tickets.${i}.city`} component="div" className="invalid-feedback" />
                                            </div>
                                            <div className="form-group col-6">
                                                <label>Pincode</label>
                                                <Field name={`tickets.${i}.pincode`} type="text" className={'form-control' + (ticketErrors.pincode && ticketTouched.pincode  ? ' is-invalid' : '' )} />
                                                <ErrorMessage name={`tickets.${i}.pincode`} component="div" className="invalid-feedback" />
                                            </div>
                                            <div className="form-group col-6">
                                                <label>Kilos</label>
                                                <Field name={`tickets.${i}.kilos`} type="text" className={'form-control' + (ticketErrors.kilos && ticketTouched.kilos ? ' is-invalid' : '' )} />
                                                <ErrorMessage name={`tickets.${i}.pincode`} component="div" className="invalid-feedback" />
                                            </div>
                                            <div className="form-group col-6">
                                                <label>Costs</label>
                                                <Field name={`tickets.${i}.costs`} type="text" className={'form-control' + (ticketErrors.costs && ticketTouched.costs? ' is-invalid' : '' )} />
                                                <ErrorMessage name={`tickets.${i}.costs`} component="div" className="invalid-feedback" />
                                            </div>
                                            <div className="form-group col-6">
                                            <button className="btn btn-secondary mr-1" type="reset" onClick={()=>deleteField(i,values,setValues)}>-</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }))}
                        </FieldArray>
                        <button className="btn btn-secondary mr-1" type="reset" onClick={()=>addField(values,setValues)}>Add Fields</button>
                        <div className="card-footer text-center border-top-0">
                            <button type="submit" className="btn btn-primary mr-1" onClick={submit(values)}>
                                Shipping Rates
                            </button>
                            
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default DynamicFieldsForm ;