import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

import "./help.scss";

const Help = () => {
  return (
    <div className="Ask_Page">
      <Navbar />
      <Sidebar />
      <div className="Ask_Doubt">
        <div className="container">
          <div className="row">
            <input
              type="text"
              placeholder="Select releted Project"
              className="select"
            />
            <textarea
              type="text"
              placeholder="Please type your doubt..."
              className="doubt"
            ></textarea>
            <button>Submit</button>
          </div>
        </div>
        <div className="QNA">
          <h2>Current Doubts And Responses</h2>
          <div className="Question">
            <span className="project">Project: Road Construction</span>
            <p className="question">Question: How to get the concrete mixture design variables?</p>
            <p className="answer">Ans: Take your own variables and mention it in the submission</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
