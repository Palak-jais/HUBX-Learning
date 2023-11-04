import React from "react";
import { useFormik,Form } from "formik";
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';
import { FormFeedback,Row } from "reactstrap";
import styles from './ui.module.css';

//npm i npm install @mui/material @emotion/react @emotion/styled
export default function MaterialUI(){
    const initialValues={
        "name":'',
        "email":'',
        "phone":'',
        "city":'',
        "pin":'',
     }
     const validationSchema=Yup.object({
         name:Yup.string().min(3).required("Please provide name"),
         email:Yup.string().email().required("Please provide email"),
         phone:Yup.string().min(10).max(10).required("Please provide  phone"),
         city:Yup.string().min(3).required("Please provide city name"),
         pin:Yup.string().min(6).max(6).required("Please provide pincode"),
     })
     
     const onSubmit=(values)=>{
       console.log(values);
     }
     
     const formik=useFormik({
         initialValues:initialValues,
         validationSchema:validationSchema,
         onSubmit:onSubmit
     })
    return <div className={styles.forms}>
    <h1>Forms</h1>
    <Row className={styles.input}>
        <TextField
        type="text"
        name="name"
        autoComplete="off"
        placeholder="Input your name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}       
        />
        {formik.touched.name && formik.errors.name ? (
            <FormFeedback className={styles.invalid}>
            {formik.errors.name}
            </FormFeedback>
            
        ) : null}
    </Row>
    <Row>
        <TextField 
        type="email"
        name="email"
        autoComplete="off"
        placeholder="Input your email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
    
        />
        {formik.touched.email && formik.errors.email? (
            <FormFeedback className={styles.invalid}>
            {formik.errors.email}
            </FormFeedback>
            
        ) : null}
    </Row>
    <Row className={styles.input}>
        <TextField 
        type="text"
        name="phone"
        autoComplete="off"
        placeholder="Input your phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        
        />
        {formik.touched.phone && formik.errors.phone ? (
            <FormFeedback className={styles.invalid}>
            {formik.errors.phone}
            </FormFeedback>
            
        ) : null}
        </Row>
        <Row className={styles.input}>
         <TextField
        type="text"
        name="city"
        autoComplete="off"
        placeholder="Input your city"
        value={formik.values.city}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        
        />
         {formik.touched.city && formik.errors.city ? (
            <FormFeedback className={styles.invalid}>
            {formik.errors.city}
            </FormFeedback>
            
        ) : null}
</Row>
<Row className={styles.input}>
        <TextField
        type="text"
        name="pin"
        autoComplete="off"
        placeholder="Input your pincode"
        value={formik.values.pin}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}        
        /> 
        {formik.touched.pin && formik.errors.pin ? (
            <FormFeedback className={styles.invalid}>
            {formik.errors.pin}
            </FormFeedback>
            
        ) : null} 
        </Row>
        <Row className={styles.input}>
        <Button color="primary"
        variant="contained"
        type="submit"
        onClick={formik.handleSubmit}     
        >Register</Button>
        </Row> 
        
    </div>
    
}