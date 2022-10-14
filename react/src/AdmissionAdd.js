import React, { useEffect, useState } from "react";

function AdmissionAdd() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState();
  const [courses, setCourses] = useState([]);
  const [errMessage, setMessage] = useState("");

  async function postData() {
    let item = {
      name,
      course,
    };
    console.log(name + " " + course);
    const f = await fetch("http://localhost:8080/addAdmission/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    }).then((response) => {
      response.json();
      if (response.status === 200) {
        setName("");
        setCourse(null);
        setMessage("Added Successfully...");
      } else {
        setMessage("Pls try again");
      }
    });
  }

  function getCourses() {
    fetch("http://localhost:8080/getCourses")
      .then((response) => response.json())
      .then((ans) => {
        //console.log(ans);
        setCourses(ans);
        if(ans && ans.length> 0){
          setCourse(ans[0].coursename);
        }
      });
  }

  useEffect(() => {
    getCourses();
  }, []);
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
                className="card shadow-lg p-3 mb-5 bg-white rounded"
                style={{ width: "200px" }}
              >
                <div className="text-center">
                  <a style={{ textDecoration: "none" }} href="admission">
                    All Admissions
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div
                className="card shadow-lg p-3 mb-5 bg-info rounded"
                style={{ width: "200px" }}
              >
                <div className="text-center">
                  <a style={{ textDecoration: "none" }} href="AdmissionAdd">
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
                  <a style={{ textDecoration: "none" }} href="AdmissionDelete">
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
          <div className="card shadow-lg p-3 mb-5 bg-white rounded">
            <h3>Add Admissions</h3>

            <br />
            <br />

            {errMessage && (
              <>
                <small style={{ color: "green" }}>{errMessage}</small>
                <br />
              </>
            )}

            <div style={{ marginTop: 10 }}>
              Name
              <br />
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div style={{ marginTop: 10 }}>
              Course
              <br />
              <select
                className="form-control"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                {courses.map((item) => (
                  <option value={item.coursename} key={item.id}>
                    {item.coursename}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ marginTop: 30 }}>
              <center>
                <input
                  type="button"
                  className="btn btn-info"
                  value="Add"
                  onClick={postData}
                />
              </center>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdmissionAdd;
