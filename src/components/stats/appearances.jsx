import React from 'react'
import { Jumbotron, Table, Col } from "react-bootstrap";

export const Appearances = () => {
    return (
        <div>
            <Col md={8} lg={9} className="mx-auto py-2">
                <Jumbotron>
                    <Table striped bordered hover variant="dark">
                        <tbody className="">
                            <tr>
                                <td colSpan="4">
                                    <div className="d-flex justify-content-center">
                                        <span className="">
                                            Team Weight Average: 66.50 kg
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="4">
                                    <div className="d-flex justify-content-center">
                                        <span className="">
                                            Team Height Average: 171.50 cm
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Jumbotron>
            </Col>
        </div>
    )
}
