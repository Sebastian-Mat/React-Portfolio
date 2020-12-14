import React, { Fragment, useState, useEffect } from "react";
import { Row, Table } from "react-bootstrap";
import "./Portfolio.css";
import data from "../dist/data/data.json";

const Portfolio = () => {
  const [work, setWork] = useState([]);

  /*
  const getData = async () => {
    const data = await fetch("url");
    const dataLoaded = await data.json();
    setWork(dataLoaded);
  }
  */

  useEffect(() => {
    //getData()
    setWork(data);
  }, []);

  return (
    <Fragment>
      <Row className="portfolio">
        <Table borderless className="table">
          <tbody>
            {work.map((item) => (
              <tr key={item.id}>
                <td className="name">~ {item.name}</td>
                <td className="date">{item.date}</td>
                <td className="pages">
                  <a href={item.link}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="4"></circle>
                      <line x1="21.17" y1="8" x2="12" y2="8"></line>
                      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
                    </svg>
                  </a>
                </td>
                <td className="pages">
                  <a href={item.github}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Fragment>
  );
};

export default Portfolio;
