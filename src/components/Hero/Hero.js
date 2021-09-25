import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection , DivContact} from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
    <SectionTitle main center>
    {/* Hey welcome ! <br/> */}
    Tomas ignacio Macchi, <br/>Fullstack Developer.
    </SectionTitle>
    <SectionText>
    Hey ! Welcome to my personal portfolio <br/>
    I encourage you to navigate across my site and see my projects ! Hope you like them all ! 
    </SectionText>

    <DivContact>
    <form action="mailto:muma.sanmartin2011@gmail.com">
    <Button>Email Me</Button>
    </form>
    <a href="https://wa.me/+5493794658844"> <Button>Message me</Button></a>
    </DivContact>
     

   </LeftSection>

 </Section>
);

export default Hero;