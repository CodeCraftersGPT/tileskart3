// define NewCars component with hard coded cars list and display the cars


import React from 'react';

function NewCars() {
    
        // define cars array with id name and price
        const cars = [
            { id: 1, name: 'New Car 1', price: 100000 },
            { id: 2, name: 'New Car 2', price: 200000 },
            { id: 3, name: 'New Car 3', price: 300000 }
        ];
    
        return (
            <div>
                <h2>New Cars</h2>
                {/* display the cars with map */}
                {cars.map(car => (
                    <div key={car.id}>
                        <p>{car.name} -- {car.price}</p>
                    </div>
                ))}
            </div>
        );
    }

export default NewCars;

