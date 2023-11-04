import React from "react";
import styles from './ui.module.css';
import { useFormik } from "formik";
import { signUpSchema } from "./schema/signUpSchema";
import { Row } from "reactstrap";


export default function Form(){
    const initialValues={
        name:'',
        email:'',
        password:'',
        confirmpassword:'',
        code:'',
    }
    
    const formik=useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit:(values)=>{
            console.log(values);
        }
    })
  console.log(formik);

    //formik return some methoda and functioms.
    //handleChange(),handleBlur etc ...
    //errors
    const generate=(e)=> {
        e.preventDefault();
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let randomCode = '';
      
        for (let i = 0; i <10; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          randomCode += charset[randomIndex];
        }
      
        console.log(randomCode);
        formik.setFieldValue('code', randomCode.toString());
        console.log(formik.values.code)
      }

    return <div className={styles.forms}>
        <h1>Forms</h1>
        <Row>
        <input 
        type="text"
        name="name"
        className={styles.input}
        autoComplete="off"
        placeholder="Input your name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
       
        />
        </Row>
        <Row>
        <input 
        className={styles.input}
        type="email"
        name="email"
        autoComplete="off"
        placeholder="Input your email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        </Row>
        <Row>
        <input 
         className={styles.input}
        type="password"
        name="password"
        autoComplete="off"
        placeholder="Input your name"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        </Row>
        <Row>
         <input 
        type="password"
        name="confirmpassword"
        className={styles.input}
        autoComplete="off"
        placeholder="Input your confirm password"
        value={formik.values.confirmpassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        </Row>
        <Row>
        <input 
        type="text"
        name="code"
        className={styles.input}
        autoComplete="off"
        placeholder="your code"
        value={formik.values.code}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        readOnly //for only read-only fields
        />
        </Row>
        <Row>
        <button 
        onClick={generate}
        className={styles.btn}
        >Generate</button>
       
        <button 
        type="submit"
        onClick={formik.handleSubmit}
        className={styles.btn}
        >Register</button>
        </Row>
    </div>
}