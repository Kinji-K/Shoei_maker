import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';
import { withRouter } from 'react-router';

const Form = (props) => {
  const history = useHistory();

  const ClickAction = (e) =>{
    const path = `/book/${props.isbn}`;
    history.push({
      pathname: path
    });
  }

  return (
    <form>
      <input type="text" name="isbn" placeholder="ISBN 978-4-xxxx-xxxx-x" onChange={e => props.setIsbn(e.target.value)}/>
      <Button type="submit" onClick={ClickAction}>書影作成</Button>
    </form>
  );
};

export default withRouter(Form);