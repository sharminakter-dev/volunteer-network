import React, { useContext } from 'react';
import Header from '../Header/Header';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { EventContext, UserContext } from '../../App';

const Volunteer = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [userInfo] = useContext(UserContext);
  const [, setEventData] = useContext(EventContext)


  const onSubmit = (data) => {
    if(userInfo.isLoggedIn){
      setEventData(data);
      navigate('/my-events')
    }else{
      navigate('/auth')
    }
  }

  // console.log(watch("title")); 
    return (
        <div >
            <Header/>
            <h1 className='text-center' >Volunteer in an event</h1>
            <form 
              onSubmit={handleSubmit(onSubmit)} 
              className='m-auto mt-5  w-50 ' >
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
                      as="textarea" 
                      rows={5}
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
                
                <Button variant="primary" type="submit" className='d-block m-auto' >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default Volunteer;