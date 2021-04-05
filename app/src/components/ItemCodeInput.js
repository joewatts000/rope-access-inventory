import { useRef } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 15px;
  border: 0;
  margin: 20px;
  text-align: center;
  border-radius: 20px;

  &:focus {
    outline: none;
  }
`;

const ItemCodeInput = () => {
  const inputRef = useRef(null);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.debug('fetch data from api for product: ', inputRef.current.value);
      }}
    >
      <Input placeholder="Enter item code" ref={inputRef} />
    </form>
  );
};

export default ItemCodeInput;
