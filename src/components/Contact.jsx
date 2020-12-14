import React, { Fragment, useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  const [info, setInfo] = useState({
    name: "",
    cellphone: "",
    email: "",
  });

  const handleInputChange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  const sendInfo = (e) => {
    e.preventDefault();
    alert(info.name + " We will in touch!");
    e.target.reset();
  };

  return (
    <Fragment>
      <Row className="contact">
        <Container>
          <Row className="contact-info">
            <Col sm={12} lg={7} className="align-self-center text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, aliquid vitae, est id tempore dolore neque
                doloribus ut non ipsa blanditiis quam similique consequuntur
                totam? Quaerat eaque, autem, dolor vitae numquam alias obcaecati
                necessitatibus quisquam laborum, ad dolores quam nesciunt minima
                veritatis ipsum perferendis molestiae sunt unde quo quae! Quod
                exercitationem ducimus vitae voluptas. Doloribus id pariatur aut
                ex modi, maiores in, laudantium, a veritatis omnis delectus
                ratione hic itaque odio dolorem consequatur voluptatibus? Optio
                molestias, repudiandae soluta suscipit quae porro quod velit
                neque eum ipsum ut magnam officiis harum praesentium tempore?
                Maiores blanditiis hic, sed laudantium quas tempore.
              </p>
            </Col>
            <Col sm={12} lg={5} className="align-self-center">
              <Form className="form" onSubmit={sendInfo}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    className="input"
                    name="name"
                    onChange={handleInputChange}
                    autoComplete="off"
                  />
                  <Form.Label>Name</Form.Label>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="email"
                    className="input"
                    name="email"
                    onChange={handleInputChange}
                    autoComplete="off"
                  />
                  <Form.Label>Email</Form.Label>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="text"
                    className="input"
                    name="cellphone"
                    onChange={handleInputChange}
                    autoComplete="off"
                  />
                  <Form.Label>Cellphone</Form.Label>
                </Form.Group>
                <Button type="submit">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Row>
    </Fragment>
  );
};

export default Contact;
