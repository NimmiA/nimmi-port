import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

function Footer() {
  return (
    <FooterContainer className="portfolio-footer">
      <p>&copy; {new Date().getFullYear()} NimmiAlampatta. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;
