import React from "react"
import logements from "./logements"
import Card from "./Card"

function AppartList() {
    return (
        <div className="grid">
            {logements.map((appart, index) => (
                <Card key={index} data={appart} />
            ))}
        </div>
    )
}

export default AppartList