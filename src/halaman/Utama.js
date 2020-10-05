import React from 'react';
import { Button, Container, Row, Col, ProgressBar, Tab, Tabs, Table, Pagination, Popover, Overlay, Collapse, Spinner } from 'react-bootstrap';


function Utama() {
    const [open, setOpen] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const [target, setTarget] = React.useState(null);
    const ref = React.useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <div className="mt-3">
            <Container>
                <Row>
                    <Col md={4}><h3>Rumor Transfer Pemain</h3></Col>
                    <Col md={{ span: 4, offset: 4 }} style={{ textAlign: 'right' }}><Spinner animation="border" variant="success" /><Spinner animation="grow" variant="success" /></Col>
                </Row>

                <Row>
                    <Col>
                        <Tabs defaultActiveKey="semua" id="uncontrolled-tab-example">
                            <Tab eventKey="semua" title="Semua Transfer">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Nama Pemain</th>
                                            <th>Tim</th>
                                            <th>Transfer</th>
                                            <th>Proses Transfer</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>MAROUANE FELLAINI</td>
                                            <td>MANCHESTER UNITED</td>
                                            <td>SHANDONG LUNENG</td>
                                            <td><ProgressBar animated variant="success" now={85} label={85} /></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>LOUIS NANI</td>
                                            <td>SPORTING CP</td>
                                            <td>ORLANDO CITY</td>
                                            <td><ProgressBar animated variant="success" now={55} label={55} /></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>MAREK HAMSIK</td>
                                            <td>NAPOLI</td>
                                            <td>DALIAN YIFANGY</td>
                                            <td><ProgressBar animated variant="success" now={95} label={95} /></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>SARDAR AZMOUN</td>
                                            <td>RUBIN KAZAN</td>
                                            <td>ZENIT ST PETERSBURG</td>
                                            <td><ProgressBar animated variant="success" now={100} label={100} /></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>MICHY BATSHUAYI</td>
                                            <td>CHELSEA</td>
                                            <td>CRYSTAL PALACE</td>
                                            <td><ProgressBar animated variant="success" now={50} label={50} /></td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>LUCAS PIAZON</td>
                                            <td>CHELSEA</td>
                                            <td>CHIEVO</td>
                                            <td><ProgressBar animated variant="success" now={100} label={100} /></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Tab>
                            <Tab eventKey="inggris" title="Liga Primer Inggris"></Tab>
                            <Tab eventKey="serieA" title="Serie A"></Tab>
                            <Tab eventKey="primera" title="Divisi Primera"></Tab>
                            <Tab eventKey="bundes" title="Bundesliga"></Tab>
                            <Tab eventKey="indo" title="Liga 1 Indonesia"></Tab>
                        </Tabs>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Pagination>
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Ellipsis />

                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item active>{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>
                            <Pagination.Item disabled>{14}</Pagination.Item>

                            <Pagination.Ellipsis />
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                    </Col>
                </Row>

                <Row>
                    <Col ref={ref}>

                        <Button onClick={handleClick} variant="primary">Informasi</Button>&nbsp;
                            <Overlay show={show} target={target} placement="right" container={ref.current} containerPadding={20}>
                            <Popover id="popover-contained">
                                <Popover.Title as="h3">Informasi Website</Popover.Title>
                                <Popover.Content>
                                    Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita olahraga.
                            </Popover.Content>
                            </Popover>
                        </Overlay>


                        <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open} >
                            Versi Website
                            </Button>
                        <Collapse in={open}>
                            <div id="example-collapse-text">
                                Akses Sport v.10
                            </div>
                        </Collapse>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Utama;