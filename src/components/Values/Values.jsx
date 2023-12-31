import React from 'react'
import {
    Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from "react-icons/md";
import "./Values.css";
import data from "../../utils/accordion";

const Values = () => {
  return (
    <section id="value-section" className='v-wrapper'>
    <div className='paddings innerWidth flexCenter v-container'>
        {/*left side */}
        <div className='v-left'>
             <div className='image-container'>
                <img src="./contact.png" alt="" />
             </div>
    </div>
        {/*right side */}
    
               <div className='flexColStart v-right'>
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give to You</span>
                <span className='secondaryText'>
                    We are always ready to provide you the best service.
                    <br />
                    We believe a good service is the best way to build a good relationship.
                </span>


                <Accordion className='accordion' allowMultipleExpanded={false} preExpanded={[0]}>
                   {
                       data.map((item, i)=>{
                        return(
                            <AccordionItem className='accordionItem' key={i} uuid={i}>
                                <AccordionItemHeading >
                                    <AccordionItemButton className='flexCenter accordionButton'>
                                        <div className='flexCenter icon'>{item.icon }</div>
                                        <span className='primaryText'>
                                        {item.heading}</span>
                                         <div className='flexCenter icon'>
                                         <MdOutlineArrowDropDown size={20}/>
                                         </div>

                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className='secondaryText'>{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                       })

                   } 
                </Accordion>
               </div>
        
        </div>
    </section>
  )
}

export default Values
