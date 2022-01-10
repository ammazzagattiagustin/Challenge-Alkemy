import React, { useState, useEffect } from "react";
import { Jumbotron, Table, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Appearances = () => {
    const cart = useSelector((state) => state);
    const [averageStats, setAverageStats] = useState({
        weight: 0,
        height: 0,
    });

    useEffect(() => {
        let statsSummary = {
            weight: 0,
            height: 0,
        };

        for (let index = 0; index < cart.length; index++) {
            statsSummary.weight =
                statsSummary.weight + Number(cart[index].appearance.weight[1].replace(" kg", ""));
            statsSummary.height =
                statsSummary.height + Number(cart[index].appearance.height[1].replace(" cm", ""));
        }
        setAverageStats({
            weight: Math.round(statsSummary.weight / cart.length),
            height: Math.round(statsSummary.height / cart.length),
        });
    }, [cart]);

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
                                            {`Team Weight Average: ${averageStats.weight} kg`}
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="4">
                                    <div className="d-flex justify-content-center">
                                        <span className="">
                                            {`Team Height Average: ${averageStats.height} cm`}
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Jumbotron>
            </Col>
        </div>
    );
};
