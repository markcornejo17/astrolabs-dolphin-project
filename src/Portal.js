import React from 'react'

function Portal() {
    return (
        <div>
        <div className="container my-5">
        <h2 className="text-center my-5"> Employee Management Portal</h2>
        <h5> Blue Dolphin Engagement (BDE) allows you to store, manage, and track all employee data. It holds a variety of employee personnel fields such as name, age, job title, salary, length of service, etc for an HR to refer from.</h5>
        <br />
        <h5>BDE is perfect for rapidly growing businesses. It offers employee database management capabilities that include a self-service portal, a directory of employee profiles, organizational charts, that span across multiple locations. Here, you can do the following: </h5>
        <br />
        <div className="d-flex justify-content-center">
            <ul>
                <li className="list1"><img src="./view.jpeg" className="check" />View employee listing</li>
                <li className="list1"><img src="./create-logo.jpeg" className="check" />Create employee</li>
                <li className="list1"><img src="./avatar-logo.jpeg" className="check" />Update employee avatar</li>
            </ul>
        </div>
        <div className="spaces"></div>
        <div className="d-flex justify-content-center">
            <ul>
                <li className="list2"><img src="./details.png" className="check" />Update employee details</li>
                <li className="list2"><img src="./delete.png" className="check" />Delete employee details</li>
            </ul>
        </div>
    </div>
        </div>
    )
}

export default Portal;
