import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AxiosService from "../Utils/AxiosService";
import ApiRoutes from "../Utils/ApiRoutes";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function CreateEmployee() {
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      console.log(formProps);

      let res = await AxiosService.post(
        `${ApiRoutes.CREATE_EMPLOYEE.path}`,
        formProps,
        {
          authenticate: ApiRoutes.CREATE_EMPLOYEE.authentication,
        }
      );
      // console.log(res);
      if (res.status === 200) {
        toast.success(res.data.message);
        navigate("/employee_list");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <NavBar />
      <hr />
      <h2 style={{ display: "flex", justifyContent: "center" }}>Create user</h2>
      <hr />
      <div style={{ padding: "50px", width: "550px" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter mobile number"
              name="mobile"
              pattern="[7-9]{1}[0-9]{9}"
              required
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Designation</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="desingnation"
              required
            >
              <option>Choose the option</option>
              <option value="HR">HR</option>
              <option value="Manager">Manager</option>
              <option value="Sale">Sale</option>
            </Form.Select>
          </Form.Group>

          <Form.Label>Gender</Form.Label>
          <Form.Group className="mb-2">
            <Form.Check
              inline
              label="Male"
              name="gender"
              type="radio"
              value={"Male"}
              required
            />
            <Form.Check
              inline
              label="Female"
              name="gender"
              type="radio"
              value={"Female"}
            />
            <Form.Check
              inline
              label="Other"
              name="gender"
              type="radio"
              value={"Other"}
            />
          </Form.Group>

          <Form.Label>Course</Form.Label>
          <Form.Group className="mb-2" checked>
            <Form.Check
              inline
              label="MCA"
              name="Course"
              type="checkbox"
              value={"MCA"}
            />
            <Form.Check
              inline
              label="BCA"
              name="Course"
              type="checkbox"
              value={"BCA"}
            />
            <Form.Check
              inline
              label="BSC"
              name="Course"
              type="checkbox"
              value={"BSC"}
            />
          </Form.Group>

          {/* <Form.Group controlId="formFile" className="mb-4">
            <Form.Label>Image Upload</Form.Label>
            <Form.Control type="file" name="image" />
          </Form.Group> */}

        
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <Footer />
    </>
  );
}

export default CreateEmployee;
