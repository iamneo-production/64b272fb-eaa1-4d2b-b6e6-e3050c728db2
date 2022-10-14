import React, { useEffect, useState } from "react";

function Admission(props) {
  const [alladmissions, setAllAdmissions] = useState("");
  const [data, getData] = useState([]);
  const admissionList = [];



  useEffect(() => {
   
    getAdmissions();
  }, []);

  function coList(props) {
    return <li>{props.admissionname}</li>;
  }

  function getAdmissions() {
    fetch("http://localhost:8080/getAdmissions")
      .then((response) => response.json())
      .then((ans) => {
        console.log(ans);
        getData(ans);
      });
  }



  return (
    <div>
      <div className="row">
        <div className="col-sm-12">
          <div className="card shadow-lg p-3 mb-5 bg-primary rounded border border-info">
            <h1 style={{ textAlign: "center", color: "white" }}> Admission </h1>
          </div>
        </div>
      </div>

      <div className="row mx-auto">
        <div className="col-sm-3">
          <div className="row">
            <div className="col-sm-3">
              <div
                className="card shadow-lg p-3 mb-5 bg-info rounded"
                style={{ width: "200px" }}
              >
                <div className="text-center">
                  <a style={{ textDecoration: "none" }} href="">
                    All Admissions
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div
                className="card shadow-lg p-3 mb-5 bg-white rounded"
                style={{ width: "200px" }}
              >
                <div className="text-center">
                  <a style={{ textDecoration: "none" }} href="admissionadd">
                    Add
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <div
                className="card shadow-lg p-3 mb-5 bg-white rounded"
                style={{ width: "200px" }}
              >
                <div className="text-center">
                  <a style={{ textDecoration: "none" }} href="admissiondelete">
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <div
                className="card shadow-lg p-3 mb-5 bg-white rounded"
                style={{ width: "200px" }}
              >
                <div className="text-center">
                  <a style={{ textDecoration: "none" }} href="login1">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-9">
          <div className="card shadow-lg p-3 mb-5 bg-white rounded text-center">
            <table className="table table-hover">
              <tbody>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Course</th>
                </tr>
                {data.map((item, i) => (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.course}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admission;
