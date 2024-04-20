import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import AxiosService from "../Utils/AxiosService";
import ApiRoutes from "../Utils/ApiRoutes";
import { useNavigate } from "react-router-dom";

function Signin() {
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);

      let res = await AxiosService.post(
        `${ApiRoutes.SIGN_IN.path}`,
        formProps,
        {
          authenticate: ApiRoutes.SIGN_IN.authentication,
        }
      );
      console.log(res);
      if (res.status === 200) {
        toast.success(res.data.message);
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("role", res.data.role);
        if (res.data.role === "admin") navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || error.message);
    }
  };

  return (
    <>
      <div
        className="container p-5"
        style={{
          width: "500px",
          border: "1px solid black",
          marginTop: "100px",
        }}
      >
        <h2 className="Signin-head p-3">Signin to Continue</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <Form.Group className="mb-3"></Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Signin;
