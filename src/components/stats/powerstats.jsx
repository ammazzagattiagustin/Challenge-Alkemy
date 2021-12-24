import React from 'react'
import { Jumbotron, Table, Col } from "react-bootstrap";
import useStatsContext from "../context/statsContext";

export const Powerstats = () => {
    const { totalStats } = useStatsContext();

    return (
        <div>
            <Col md={8} lg={9} className="mx-auto py-2">
                <Jumbotron>
                    <Table striped bordered hover variant="dark">
                        <tbody className="">
                            <tr className="">
                                <td className="">
                                    <div className="d-flex justify-content-around">
                                        <span className="">
                                            Intelligence {totalStats.intelligence}
                                        </span>
                                    </div>
                                </td>
                                <td className="">
                                    <div className="d-flex justify-content-around">
                                        <span className="">
                                            Strength {totalStats.strength}
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex justify-content-around">
                                        <span className="">
                                            Speed {totalStats.speed}
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-around">
                                        <span className="">
                                            Power {totalStats.power}
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex justify-content-around">
                                        <span className="">
                                            Durability {totalStats.durability}
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-around">
                                        <span className="">
                                            Combat {totalStats.combat}
                                        </span>

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="4">
                                    <div className="d-flex justify-content-center">
                                        <p>
                                            <strong>Main Category:</strong>
                                        </p>
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
