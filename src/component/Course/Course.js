import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './course.css'
import Data from '../CourseData/Data';
import Cart from '../Cart/Cart';
const Course = () => {
    const courseData = fakeData;
    const [course,setCourse] = useState(courseData);
    const [cart,setCart] = useState([])
    
    const handleAddCourse = (courses) =>{
      const newCart = [...cart,courses]
      setCart(newCart);
    }

    return (
        <div className='main-course'>
          <div className='course-cart'>
            <Cart  cart={cart}></Cart>
          </div>
           <div className='course'>
                {
                  course.map(cu => <Data courseValue={cu} handleAdd={handleAddCourse}></Data>)
                }
                            
           </div>
        </div>
    );
};

export default Course;