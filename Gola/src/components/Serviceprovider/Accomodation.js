import React, { useState, useRef, useEffect, createRef } from 'react';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Select,
    Option,
    Textarea,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function RoomForm() {
    const [roomData, setRoomData] = useState([{ roomType: '', roomFacilities: '', price: '', images: [] }]);
    const fileInputRefs = useRef([]);

    // Initialize refs for file inputs
    useEffect(() => {
        setFileInputRefs((refs) => (
            Array(roomData.length)
                .fill()
                .map((_, index) => refs[index] || createRef())
        ));
    }, [roomData]);

    const setFileInputRefs = (callback) => {
        fileInputRefs.current = callback(fileInputRefs.current);
    };

    const addRoom = () => {
        setRoomData((prevRoomData) => [
            ...prevRoomData,
            { roomType: '', roomFacilities: '', price: '', images: [] },
        ]);
    };

    const handleRoomTypeChange = (index, value) => {
        const updatedData = [...roomData];
        updatedData[index].roomType = value;
        setRoomData(updatedData);
    };

    const handleRoomFacilitiesChange = (index, value) => {
        const updatedData = [...roomData];
        updatedData[index].roomFacilities = value;
        setRoomData(updatedData);
    };

    const handlePriceChange = (index, value) => {
        const updatedData = [...roomData];
        updatedData[index].price = value;
        setRoomData(updatedData);
    };

    const handleImageChange = (index, files) => {
        const updatedData = [...roomData];
        updatedData[index].images = files;
        setRoomData(updatedData);
    };

    const removeRoom = (index) => {
        if (roomData[index]) {
            const updatedData = [...roomData];
            updatedData.splice(index, 1);
            setRoomData(updatedData);
        }
    };

    return (
        <div >
            {roomData.map((room, index) => (
                <div key={index}>
                    <div className="my-4 grid grid-cols-2 gap-4 ">
                        <div>
                            <Input label="Room Type" value={room.roomType} onChange={(e) => handleRoomTypeChange(index, e.target.value)} />

                        </div>
                        <div className="row-span-3">
                        <Textarea label="Room Facilities" value={room.roomFacilities} onChange={(e) => handleRoomFacilitiesChange(index, e.target.value)} />
                        </div>
                        <div>
                            <Input label="Price" value={room.price} onChange={(e) => handlePriceChange(index, e.target.value)} />
                        </div>


                    <div>
                        <Typography color="gray" className="mt-2 mb-2 font-normal">
                            Add images of your service <span style={{ color: 'red' }}>*</span>
                        </Typography>
                        <div className="mb-3">
                        <Input
                            type="file"
                            id={`formFileMultiple-${index}`}
                            multiple
                            ref={fileInputRefs[index]}
                            onChange={(e) => handleImageChange(index, e.target.files)}
                        />
                        </div>
                    </div>
                    </div>
                    {index > 0 && (
                        <Button className="my-4" size="sm" variant="outlined" type="button" onClick={() => removeRoom(index)}>Remove</Button>
                    )}
                </div>
            ))}
            <Button size="sm" variant="outlined"  type="button" onClick={addRoom}>Add Room</Button>
        </div>
    );
}

export default RoomForm;
