import React, { useState } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
 import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as yup from "yup";


const Signup = () => {
    const notify = () => toast("Data Save Successfully");
    //console.log(notify);

    const formik = useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: yup.object({
          name: yup.string().min(2,"At Least 2 Character is need").required(),
          email: yup.string().email().required(),
          password:yup.string().min(6,"Password at least 6 charccters").required()
      }),
      onSubmit: (values,{resetForm}) => {
        notify();
          console.log(values);
          resetForm({ values: "" });
      },
    });

    //console.error(formik.errors);

    // const [name, setName] = useState("");

    // const handleSubmit = (e) => {
    //     console.log(name);
    //     e.preventDefault();
    // }
    // const handleNameChange = (e) => {
    //     setName(e.target.value);
    // }

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <h2>Sign Up</h2>
            <form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  id="name"
                  name="name"
                />
                { formik.errors.name && formik.touched.name && <span>{formik.errors.name}</span>}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                />
                {formik.touched.email &&  formik.errors.email &&
                    <span>{formik.errors.email}</span>}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={formik.password}
                  onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password && (
                  <span>{formik.errors.password}</span>
                )}
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </form>
          </Col>

          <Col></Col>
        </Row>
        <ToastContainer />
      </Container>
    </>
  );
}

export default Signup
