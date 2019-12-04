/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* HomeProduct Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Examples extends React.Component {
  render() {
    return (
      <div className="section section-examples" data-background-color="black">
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <div className="space-50" />
        <Container className="text-center">
          <Row>
            <Col sm="6">
              <Link to="landing-page">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/landing-page.png")}
                />
              </Link>
              <Button
                className="btn-simple btn-round"
                color="primary"
                to="landing-page"
                tag={Link}
              >
                View Landing Page
              </Button>
            </Col>
            <Col sm="6">
              <Link to="profile-page">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/profile-page.png")}
                />
              </Link>
              <Button
                className="btn-simple btn-round"
                color="primary"
                to="profile-page"
                tag={Link}
              >
                View Profile Page
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Examples;
