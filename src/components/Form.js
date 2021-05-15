import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';

const Form = (props) => {
const hist = useHistory();
const handleLink = path => hist.push(path);

  return (
    <form>
      <input type="text" name="isbn" placeholder="ISBN 978-4-xxxx-xxxx-x" onChange={e => props.setIsbn(e.target.value)}/>
      <Button type="submit" onClick={ () => {
        handleLink(props.isbn);
        }
        }>書影作成</Button>
    </form>
  );
};

export default Form;