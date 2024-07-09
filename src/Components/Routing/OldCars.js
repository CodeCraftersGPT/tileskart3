// define OldCars component with hard coded cars list and display the cars


import React from 'react';

function OldCars() {

    // define cars array with id name and price
    const cars = [
        { id: 1, name: 'Old Car 1', price: 10000 },
        { id: 2, name: 'Old Car 2', price: 20000 },
        { id: 3, name: 'Old Car 3', price: 30000 }
    ];

    return (
        <div>
            <h2>Old Cars</h2>
            {/* display the cars with map */}
            {cars.map(car => (
                <div key={car.id}>
                    <p>{car.name} -- {car.price}</p>
                </div>
            ))}
        </div>
    );
}

export default OldCars;
