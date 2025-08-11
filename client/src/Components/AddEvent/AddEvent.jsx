import React from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddEvent = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate()

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("date", data.date);
        formData.append("description", data.description);
        formData.append("img", data.img[0]);

        fetch('http://localhost:3000/events',{
            method:'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(data=>navigate('/'))
    }
    
    
  // console.log(watch("title")); 

    return (
        <div>
            <h5 className='text-center p-4' >Add an event</h5> 
            <div className='bg-light p-4 rounded h-100   ' >
                <form 
                onSubmit={handleSubmit(onSubmit)} 
                className='bg-white rounded p-4 ' >
                
                    <Row>
                        <Col md={6} >
                            <Form.Group className="mb-3" >
                                <Form.Label>Event Title</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="event title" 
                                {...register("title", { required: true })}  />
                                {/* errors will return when field validation fails  */}
                            </Form.Group>
                            {errors.title && <span className='text-danger' >Event name is required</span>}
                        </Col>

                        <Col md={6} >
                            <Form.Group className="mb-3" >
                                <Form.Label>Date</Form.Label>
                                <Form.Control 
                                type="date" 
                                placeholder="volunteer in an event" 
                                {...register("date",  { required: true })}  />
                            </Form.Group>
                            {errors.date && <span className='text-danger' >Date is required</span>}
                        </Col>

                        <Col md={6} >
                            <Form.Group  className="mb-3"  >
                                <Form.Label>Description</Form.Label>
                                <Form.Control 
                                as="textarea" 
                                rows={5}
                                placeholder="Enter a description" 
                                {...register("description")}  />
                            </Form.Group>
                        </Col>

                        <Col md={6} >
                            <Form.Group className="mb-3 d-flex flex-column gap-2" >
                                <Form.Label>Banner</Form.Label>
                                <label className='border border-primary rounded p-2 text-primary bg-primary-subtle w-50' >
                                    <FontAwesomeIcon icon={faCloudArrowUp} className='me-2' />
                                    upload image
                                    <Form.Control 
                                    type="file" 
                                    placeholder="image" 
                                    style={{display:'none'}}
                                    {...register("img", { required: true })}   />
                                </label>
                            </Form.Group>
                            {errors.image && <span className='text-danger' >image is required</span>}
                        </Col>
                    </Row>
                   <div className="text-end mt-4">
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;
