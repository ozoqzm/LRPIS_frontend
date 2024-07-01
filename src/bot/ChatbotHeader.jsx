import styled from "styled-components";

const HeaderContainer = styled.div`
  background: rgb(92, 130, 255);
  background: 
    var(--Green, #089995);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem;

  .ri-close-line,
  .ri-arrow-left-s-line {
    font-size: 1.5rem;
    color: #ffffff;
  }
`;

const ArrowLeftIcon = () => <i className="ri-arrow-left-s-line" />;
const CloseIcon = () => <i className="ri-close-line" />;

function Header() {
  return (
    <HeaderContainer>
      <ArrowLeftIcon />
      <CloseIcon />
    </HeaderContainer>
  );
}

export default Header;
