import Button from 'react-bootstrap/Button';

const Form = (props) => {
  return (
    <form>
      <input type="text" name="ISBN" placeholder="ISBN 978-4-xxxx-xxxx-x" onChange={e => props.setIsbn(e.target.value)}/>
      <Button type="submit" onClick={props.getData}>書影作成</Button>
    </form>
  );
};

export default Form;