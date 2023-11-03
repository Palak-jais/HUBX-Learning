import {
  Button,
 // Modal,
  //ModalBody,
  ModalFooter,
  //ModalHeader,
  Row,
  Col,
  FormFeedback,
  Input,
  Label,
} from "reactstrap";
import {
  //useFormik,
  Formik,
  Form,
  FieldArray,
  Field,
  ErrorMessage,
} from "formik";

import * as Yup from "yup";
import toastr from "toastr";
const MyForm = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    bill_email: "",
    bill_phone: "",
    bill_state: "",
    data: [],
  };

  const validateSchema = Yup.object({
    first_name: Yup.string().min(2).required("First name required"),
    last_name: Yup.string().min(2).required("last name required"),
    bill_email: Yup.string().email().required("Email is required"),
    bill_phone: Yup.string()
      .min(10)
      .max(10)
      .required("Phone number is required"),
    bill_state: Yup.string().min(3).required("State is required"),
    data: Yup.array().of(
      Yup.object().shape({
        city: Yup.string().min(3).required("City is required"),
        pincode: Yup.string().min(6).max(6).required("Pincode is required"),
        kilos: Yup.number().min(0).required("Kilos is required"),
        costs: Yup.number().min(0).required("cost is required"),
      })
    ),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Your form submission logic goes here
    console.log('Form submitted with values:', values);
    console.log(values.data)
    // You can make an API request, update state, etc.
    // Don't forget to call setSubmitting(false) when you're done.
    toastr.success("Sucess");
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchema}
      onSubmit={handleSubmit}
    >
      {({       errors,
                values,
                touched,
                setValues,
                handleBlur,
                handleSubmit,
                handleChange,
                resetForm,
                setErrors,
      }) => (
        <Form>
        <Row>
                        <Col xs={12} md={6}>
                          <div className="mb-3">
                            <Label className="form-label">First Name</Label>
                            <Input
                              name="first_name"
                              className="form-control"
                              placeholder="Enter First Name"
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.first_name || ""}
                              invalid={
                                touched.first_name && errors.first_name
                                  ? true
                                  : false
                              }
                            />
                            {touched.first_name && errors.first_name ? (
                              <FormFeedback type="invalid">
                                {errors.first_name}
                              </FormFeedback>
                            ) : null}
                          </div>
                        </Col>
                        <Col xs={12} md={6}>
                          <div className="mb-3">
                            <Label className="form-label">Last Name</Label>
                            <Input
                              name="last_name"
                              className="form-control"
                              placeholder="Enter last_name"
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.last_name || ""}
                              invalid={
                                touched.last_name && errors.last_name
                                  ? true
                                  : false
                              }
                            />
                            {touched.last_name && errors.last_name ? (
                              <FormFeedback type="invalid">
                                {errors.last_name}
                              </FormFeedback>
                            ) : null}
                          </div>
                        </Col>
                        <Col xs={12} md={6}>
                          <div className="mb-3">
                            <Label className="form-label">Email</Label>
                            <Input
                              name="bill_email"
                              className="form-control"
                              placeholder="Enter Email"
                              type="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.bill_email || ""}
                              invalid={
                                touched.bill_email && errors.bill_email
                                  ? true
                                  : false
                              }
                            />
                            {touched.bill_email && errors.bill_email ? (
                              <FormFeedback type="invalid">
                                {errors.bill_email}
                              </FormFeedback>
                            ) : null}
                          </div>
                        </Col>
                        <Col xs={12} md={6}>
                          <div className="mb-3">
                            <Label className="form-label">Phone</Label>
                            <Input
                              name="bill_phone"
                              className="form-control"
                              placeholder="Enter Phone Number"
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.bill_phone || ""}
                              invalid={
                                touched.bill_phone && errors.bill_phone
                                  ? true
                                  : false
                              }
                            />
                          </div>
                          {touched.bill_phone && errors.bill_phone ? (
                            <FormFeedback type="invalid">
                              {errors.bill_phone}
                            </FormFeedback>
                          ) : null}
                        </Col>
                        <Col xs={12} md={6}>
                          <div className="mb-3">
                            <Label className="form-label">State</Label>
                            <Input
                              name="bill_state"
                              className="form-control"
                              placeholder="Enter State"
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.bill_state || ""}
                              invalid={
                                touched.bill_state && errors.bill_state
                                  ? true
                                  : false
                              }
                            />
                            {touched.bill_state && errors.bill_state ? (
                              <FormFeedback type="invalid">
                                {errors.bill_state}
                              </FormFeedback>
                            ) : null}
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs={12} md={3}>
                          <div className="mb-3">
                            <Label className="form-label">City</Label>
                          </div>
                        </Col>
                        <Col xs={12} md={2}>
                          <div className="mb-3">
                            <Label className="form-label">Pincode</Label>
                          </div>
                        </Col>

                        <Col xs={12} md={3}>
                          <div className="mb-3">
                            <Label className="form-label">Kilos (unique)</Label>
                          </div>
                        </Col>

                        <Col xs={12} md={3}>
                          <div className="mb-3">
                            <Label className="form-label">
                              Cost $ (For all kilos)
                            </Label>
                          </div>
                        </Col>

                        <Col xs={12} md={1}>
                          <div className="mb-3">
                            <Label className="form-label">options</Label>
                          </div>
                        </Col>
                      </Row>
                      <Row>
          <FieldArray
            name="data"
            render={arrayHelpers => (
              //const dataErrors =( (errors.data?.length) && errors.data[i] )|| {};
              //const dataTouched = (touched.data?.length && touched.data[i] )|| {};
              <Row>
                {values.data.map((field, index) => (

                  <Row key={index}>
                  <Col xs={12} md={3}>
                                    <div className="mb-3">
                                      <Field
                                        name={`data.${index}.city`}
                                        type="text"
                                        className=
                                          "form-control" 
                                        placeholder="Enter City"
                                      />
                                      <ErrorMessage
                                        name={`data.${index}.city`}
                                        component="div"
                                        className="invalid-feedback"
                                      />
                                    </div>
                                  </Col>
                                  <Col xs={12} md={2}>
                                    <div className="mb-3">
                                      <Field
                                        name={`data.${index}.pincode`}
                                        type="text"
                                        className=
                                          "form-control"                                     
                                        placeholder="Enter Pincode"
                                      />
                                      <ErrorMessage
                                        name={`data.${index}.pincode`}
                                        component="div"
                                        className="invalid-feedback"
                                      />
                                    </div>
                                  </Col>
                                  <Col xs={12} md={3}>
                                    <div className="mb-3">
                                      <Field
                                        name={`data.${index}.kilos`}
                                        type="number"   
                                        className=
                                          "form-control"                                  
                                        placeholder="Enter Kilos"
                                      />
                                      <ErrorMessage
                                        name={`data.${index}.kilos`}
                                        component="div"
                                        className="invalid-feedback"
                                      />
                                    </div>
                                  </Col>
                                  <Col xs={12} md={3}>
                                    <div className="mb-3">
                                      <Field
                                        name={`data.${index}.costs`}
                                        type="number"
                                        className=
                                          "form-control"                                     
                                        placeholder="Enter Cost"
                                      />
                                      <ErrorMessage
                                        name={`data.${index}.costs`}
                                        component="div"
                                        className="invalid-feedback"
                                      />
                                    </div>
                                  </Col>
                    <Col xs={3} md={1}>
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      -
                    </button>
                    </Col>
                  </Row>
                ))}
                <Row>
                <Col  xs={12} md={3}>
                <button
                  type="button"
                  onClick={() => arrayHelpers.push({ city: "", pincode: "", kilos: 0, costs: 0 })}
                >
                  +
                </button>
                </Col>
                </Row>
              </Row>
            )}
          />

          </Row>
          <ModalFooter>
                    <div className="d-flex w-100 justify-content-between">
                      {/* <Button type="button" color="danger" onClick={toggle}>
                     Close
                   </Button> */}
                      <Button type="reset" color="danger" onClick={resetForm}>
                        Reset
                      </Button>
                      <Button type="submit" color="primary">
                        Submit
                      </Button>
                    </div>
                  </ModalFooter>
          

        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
