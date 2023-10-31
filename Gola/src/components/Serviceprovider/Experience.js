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

function ExperienceForm() {
    const [exData, setExData] = useState([{ exType: '', exFacilities: '', price: '', images: [] }]);
    const fileInputRefs = useRef([]);

    // Initialize refs for file inputs
    useEffect(() => {
        setFileInputRefs((refs) => (
            Array(exData.length)
                .fill()
                .map((_, index) => refs[index] || createRef())
        ));
    }, [exData]);

    const setFileInputRefs = (callback) => {
        fileInputRefs.current = callback(fileInputRefs.current);
    };

    const addEx = () => {
        setExData((prevExData) => [
            ...prevExData,
            { exType: '', exFacilities: '', price: '', images: [] },
        ]);
    };

    const handleExTypeChange = (index, value) => {
        const updatedData = [...exData];
        updatedData[index].exType = value;
        setExData(updatedData);
    };

    const handleExFacilitiesChange = (index, value) => {
        const updatedData = [...exData];
        updatedData[index].exFacilities = value;
        setExData(updatedData);
    };

    const handlePriceChange = (index, value) => {
        const updatedData = [...exData];
        updatedData[index].price = value;
        setExData(updatedData);
    };

    const handleImageChange = (index, files) => {
        const updatedData = [...exData];
        updatedData[index].images = files;
        setExData(updatedData);
    };

    const removeEx = (index) => {
        if (exData[index]) {
            const updatedData = [...exData];
            updatedData.splice(index, 1);
            setExData(updatedData);
        }
    };

    return (
        <div >
            {exData.map((ex, index) => (
                <div key={index}>
                    <div className="my-4 grid grid-cols-2 gap-4 ">
                        <div>
                            <Input label="Experience Type" value={ex.exType} onChange={(e) => handleExTypeChange(index, e.target.value)} />

                        </div>
                        <div className="row-span-3">
                        <Textarea label="Experience Facilities" value={ex.exFacilities} onChange={(e) => handleExFacilitiesChange(index, e.target.value)} />
                        </div>
                        <div>
                            <Input label="Price" value={ex.price} onChange={(e) => handlePriceChange(index, e.target.value)} />
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
                        <Button className="my-4" size="sm" variant="outlined" type="button" onClick={() => removeEx(index)}>Remove</Button>
                    )}
                </div>
            ))}
            <Button size="sm" variant="outlined"  type="button" onClick={addEx}>Add More</Button>
        </div>
    );
}

export default ExperienceForm;
