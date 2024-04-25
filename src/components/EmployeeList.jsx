import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import AxiosService from "../Utils/AxiosService";
import ApiRoutes from "../Utils/ApiRoutes";
import { useLogout } from "../hook/Logout";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
function EmployeeList() {
  const [search, setSearch] = useState("");

  let navigate = useNavigate();
  let logout = useLogout();
  let [users, setUsers] = useState([]);

  const handleInputChange = (e) => {
    const data = e.target.value;
    setSearch(data);
  };

  const handleDelete = async (id) => {
    try {
      let res = await AxiosService.delete(`${ApiRoutes.GET_USER.path}/${id}`);
      toast.warning("DATA DELETED  SUCCESSFUL");
      getData();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const getData = async () => {
    try {
      let res = await AxiosService.get(`${ApiRoutes.GET_USER.path}`, {
        authenticate: ApiRoutes.GET_USER.authentication,
      });
      if (res.status === 200) {
        setUsers(res.data.users);
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message);
      if (error.response.status === 402) {
        logout();
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavBar />
      <div
        className="mt-5"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <h4>Total Count: {users.length - 1}</h4>
        <Button
          variant="outline-success"
          onClick={() => {
            navigate("/user/create_employee");
          }}
        >
          Create Employee
        </Button>
      </div>
      <div>
        <Row className="p-2" style={{ display: "flex", justifyContent: "end" }}>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Enter Search keywords"
              className=" mr-sm-2"
              value={search}
              onChange={handleInputChange}
            />
          </Col>
        </Row>
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>unique _id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Designation</th>
              <th>Gender</th>
              <th>Course</th>
              <th>Create Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.slice(1, users.length).map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    {" "}
                    <img src={e.image} width={"75px"} />{" "}
                  </td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.mobile}</td>
                  <td>{e.desingnation}</td>
                  <td>{e.gender}</td>
                  <td>{e.Course}</td>
                  <td>{e.createdAt}</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <Button
                        variant="info"
                        onClick={() => navigate(`/user/edit_employee/${e._id}`)}
                      >
                        Edit
                      </Button>
                      &nbsp;
                      <Button
                        variant="danger"
                        onClick={() => {
                          const box = window.confirm(
                            "Conform to Delete the Record"
                          );
                          if (box === true) handleDelete(e._id);
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Footer />
    </>
  );
}

export default EmployeeList;
