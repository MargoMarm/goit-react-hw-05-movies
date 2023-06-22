import  {StyledLink} from './BackLink.styled';
import { CgArrowLeftR } from 'react-icons/cg';

const BackLink = ({ to }) => {
  return (
    <StyledLink to={to}>
      <CgArrowLeftR /> <span>Go Back</span>
    </StyledLink>
  );
};

export default BackLink;

