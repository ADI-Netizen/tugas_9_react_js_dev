import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';

function Bread() {
    return (
        <Container>
            <Row className="flex-row-reverse">
                <Col md={4} >
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
                        <Breadcrumb.Item active>Bola</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
        </Container>
    )
}

export default Bread;