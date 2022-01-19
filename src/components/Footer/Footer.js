import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import {SectionTitle } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <SectionTitle>Contact Info</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+5493794658844">+54 9 3794 658844</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:muma.sanmartin2011@gmail.com">
            muma.sanmartin2011@gmail.com
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle >Resume</LinkTitle>
          {/* the file goes under the public directory */}
          <LinkItem href="https://drive.google.com/file/d/1jSv2EFSr4TE-61_b9OJAbTkyxoFdT1zf/view?usp=sharing">
            Download Resume
          </LinkItem>
        </LinkColumn>

      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>“First, solve the problem. Then, write the code.” – John Johnson</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/webDesignMumeishon" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/tomas-ignacio-macchi/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/mumeishon/" target="_blank">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
