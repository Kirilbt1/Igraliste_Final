import React, { useEffect, useState } from 'react'
import HeadingStart from '../ReusableComponents/HeadingStart'
import StoryWork from './StoryWork';
import Carousel from '../Carousel/Carousel';



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
        if(selected==="story"){
            <StoryWork
            image='../images/zsdane1.png'
            head='Кои сме ние?'
            paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
            />
        }else {
            return(
                <StoryWork
                image="https://picsum.photos/id/13/367/267"
                head="Што работиме"
                paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio incidunt ex cumque, explicabo ratione atque nihil magnam quasi laboriosam voluptatem saepe tempora qui optio eum vitae voluptatibus dolor, dignissimos libero reprehenderit repudiandae. Quo excepturi suscipit ducimus neque veritatis nihil illum. Perspiciatis vitae ex possimus similique at ullam, ducimus, tempore iusto recusandae minus explicabo magnam odio reiciendis in. Minima laboriosam amet, id atque non provident excepturi velit cupiditate at fugiat repellat commodi repudiandae corporis dolor deleniti cum ipsam laudantium error placeat omnis voluptate rem. Doloremque, voluptas facilis! Cum libero, accusamus dolore maxime vel voluptates dolorum, facere excepturi, obcaecati magnam harum corrupti?"
                />
            )
        }
    }

  return (
    <div>
        <Carousel/>
      <HeadingStart text='За Нас'/>
      <div className="story-and-work">
        <span
          className={`story ${selected === "story" ? "active" : ""}`}
          onClick={() => handleSelect("story")}
        >
          Нашата приказна
        </span>
        <span className="between">|</span>
        <span
          className={`work ${selected === "work" ? "active" : ""}`}
          onClick={() => handleSelect("work")}
        >
          Нашата работа
        </span>
      </div>
    {pageSelected()}
    </div>
  )
}

export default About
