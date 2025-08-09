import React from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddEvent = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    
    return (
        <div>
            <h5 className='text-center p-4' >Add an event</h5> 
            <div className='bg-light p-4 rounded h-100  ' >
            <form 
              onSubmit={handleSubmit(onSubmit)} 
              className='m-auto mt-5 d-flex flex-column justify-content-center w-75 align-items-center gap-3 bg-white' >
                {/* register your input into the hook by invoking the "register" function */}
                <Form.Group className="mb-3 d-flex align-items-center gap-2" >
                    <Form.Label>Event:</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="event name" 
                      {...register("title", { required: true })}  />
                      {/* errors will return when field validation fails  */}
                </Form.Group>
                      {errors.title && <span className='text-danger' >Event name is required</span>}

                <Form.Group className="mb-3 d-flex align-items-center gap-2" >
                    <Form.Label>Description:</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="volunteer in an event" 
                      {...register("description")}  />
                </Form.Group>
                <Form.Group className="mb-3 d-flex align-items-center gap-2" >
                    <Form.Label>Date:</Form.Label>
                    <Form.Control 
                      type="date" 
                      placeholder="volunteer in an event" 
                      {...register("date",  { required: true })}  />
                </Form.Group>
                {errors.date && <span className='text-danger' >Date is required</span>}
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
            </div>
        </div>
    );
};

export default AddEvent;