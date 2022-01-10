import React, { useState, useEffect } from "react";
import { Jumbotron, Table, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Powerstats = () => {
    const cart = useSelector((state) => state);

    const [state, setState] = useState({
        intelligence: 0,
        strength: 0,
        speed: 0,
        power: 0,
        durability: 0,
        combat: 0,
    });

    useEffect(() => {
        let statsSummary = {
            intelligence: 0,
            strength: 0,
            speed: 0,
            power: 0,
            durability: 0,
            combat: 0,
        };

        for (let index = 0; index < cart.length; index++) {
            statsSummary.intelligence =
                statsSummary.intelligence + Number(cart[index].powerstats.intelligence);
            statsSummary.strength =
                statsSummary.strength + Number(cart[index].powerstats.strength);
            statsSummary.speed =
                statsSummary.speed + Number(cart[index].powerstats.speed);
            statsSummary.power =
                statsSummary.power + Number(cart[index].powerstats.power);
            statsSummary.durability =
                statsSummary.durability + Number(cart[index].powerstats.durability);
            statsSummary.combat =
                statsSummary.combat + Number(cart[index].powerstats.combat);
        }
        setState(statsSummary);
    }, [cart]);

    return (
        <div>
            <Col md={8} lg={9} className="mx-auto py-2">
                <Jumbotron>
                    <Table striped bordered hover variant="dark">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="d-flex justify-content-around">
                                        <span>Intelligence: {state.intelligence}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-around">
                                        <span>Strength: {state.strength}</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex justify-content-around">
                                        <span>Speed: {state.speed}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-around">
                                        <span>Power: {state.power}</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex justify-content-around">
                                        <span>Durability: {state.durability}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-around">
                                        <span>Combat: {state.combat}</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="4">
                                    <div className="d-flex justify-content-center">
                                        <p>
                                            <strong>Main Category: </strong>
                                            <strong>
                                                {Object.keys(state).reduce((a, b) =>
                                                    state[a] > state[b] ? a : b
                                                )}
                                            </strong>
                                        </p>
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
