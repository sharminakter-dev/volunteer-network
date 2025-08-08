import React from 'react';
import Header from '../Header/Header';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Volunteer = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) 
    return (
        <div >
            <Header/>
            <h1 className='text-center' >Volunteer in an event</h1>
            <form 
              onSubmit={handleSubmit(onSubmit)} 
              className='m-auto mt-5 d-flex flex-column justify-content-center w-75 align-items-center gap-3' >
                {/* register your input into the hook by invoking the "register" function */}
                <Form.Group className="mb-3 d-flex align-items-center gap-2" >
                    <Form.Label>Event:</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="volunteer in an event" 
                      {...register("title", { required: true })}  />
                </Form.Group>

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
                      {...register("date")}  />
                </Form.Group>
                {/* <input defaultValue="test" {...register("example")} /> */}

                {/* include validation with required or other standard HTML validation rules */}
                <input defaultValue="test"{...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default Volunteer;