import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AxiosService from "../Utils/AxiosService";
import ApiRoutes from "../Utils/ApiRoutes";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";

function EditEmployee() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [desingnation, setDesingnation] = useState("");
  let [gender, setGender] = useState("");
  let [Course, setcourse] = useState("");

  let { id } = useParams();
  let navigate = useNavigate();

  const handleEdit = async () => {
    try {
      let data = {
        name,
        email,
        mobile,
        desingnation,
        gender,
        Course,
      };
      let res = await AxiosService.put(
        `${ApiRoutes.GET_USER.path}/edit/${id}`,
        data
      );
      // console.log(res);
      if (res.status === 200) {
        toast.success("EDIT SUCESSFULL");
        navigate("/employee_list");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const getData = async () => {
    try {
      let res = await AxiosService.get(`${ApiRoutes.GET_USER.path}/${id}`);
      // console.log(res.data.users);
      if (res.status === 200) {
        setName(res.data.users.name);
        setEmail(res.data.users.email);
        setMobile(res.data.users.mobile);
        setDesingnation(res.data.users.desingnation);
        setGender(res.data.users.gender);
        setcourse(res.data.users.Course);
      }
    } catch (error) {
      toast.error(response.error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavBar />
      <hr />
      <h2 style={{ display: "flex", justifyContent: "center" }}>Edit user</h2>
      <hr />
      <div style={{ padding: "50px", width: "550px" }}>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter mobile number"
              name="mobile"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Designation</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="desingnation"
              value={desingnation}
              onChange={(e) => {
                setDesingnation(e.target.value);
              }}
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
              onChange={(e) => {
                setGender(e.target.value);
              }}
              required
            />
            <Form.Check
              inline
              label="Female"
              name="gender"
              type="radio"
              value={"Female"}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <Form.Check
              inline
              label="Other"
              name="gender"
              type="radio"
              value={"Other"}
              onChange={(e) => {
                setGender(e.target.value);
              }}
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
              onChange={(e) => {
                setcourse(e.target.value);
              }}
            />
            <Form.Check
              inline
              label="BCA"
              name="Course"
              type="checkbox"
              value={"BCA"}
              onChange={(e) => {
                setcourse(e.target.value);
              }}
            />
            <Form.Check
              inline
              label="BSC"
              name="Course"
              type="checkbox"
              value={"BSC"}
              onChange={(e) => {
                setcourse(e.target.value);
              }}
            />
          </Form.Group>

          {/* <Form.Group controlId="formFile" className="mb-4">
        <Form.Label>Image Upload</Form.Label>
        <Form.Control type="file" name="image" />
      </Form.Group> */}

          <Button
            variant="primary"
            onClick={() => {
              handleEdit();
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
      <Footer/>
    </>
  );
}

export default EditEmployee;
