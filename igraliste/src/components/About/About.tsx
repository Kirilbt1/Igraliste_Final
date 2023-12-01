import React, { useEffect, useState } from 'react'
import HeadingStart from '../ReusableComponents/HeadingStart'
import StoryWork from './StoryWork';
import Carousel from '../Carousel/Carousel';
import Breadcrums from '../ReusableComponents/Breadcrums';
import "./About.css";


const About = () => {

    const[selected,setSelected]=useState("story");
    
    const handleSelect=(link:string)=>{
        if(link==="work"){
        setSelected("work");
        }
        else{
            setSelected("story")
        }
    }

    const pageSelected=()=>{
        if(selected==="work"){
            <StoryWork
            image='../images/zsdane1.png'
            head='Кои сме ние?'
            paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
            />
            // Why This doesnt work :(
        }else if(selected==="story"){
            return(
                <StoryWork
                image="https://picsum.photos/id/13/367/267"
                head="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, architecto."
                paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio incidunt ex cumque, explicabo ratione atque nihil magnam quasi laboriosam voluptatem saepe tempora qui optio eum vitae voluptatibus dolor, dignissimos libero reprehenderit repudiandae. "
                />
            )
         
        }
    }
  

   
    const breadcrumbs = [
      { path: "/", name: "Почетна" },
      { path: "/about-us", name: "За Нас" },
    ];
  return (
    <>  <Carousel/>
    <HeadingStart text='За Нас'/>

<Breadcrums  breadcrumbs={breadcrumbs}/>
    <div className='about-us'>
      

      <div className="story-and-work">
        <span 
          className={`story ${selected === "story" ? "active" : ""}`}
          onClick={() => handleSelect("story")}
        >
          Нашата приказна
        </span>
        <span className="space">|</span>
        <span
          className={`work ${selected === "work" ? "active" : ""}`}
          onClick={() => handleSelect("work")}
        >
          Нашата работа
        </span>
      </div>
    {pageSelected()}
    </div>
    </>
 
  )
  }

export default About;
