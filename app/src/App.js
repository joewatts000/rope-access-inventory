import styled from 'styled-components';
import { useCallback, useState } from 'react';
import QrScanner from './components/QrScanner';
import ItemCodeInput from './components/ItemCodeInput';

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const Button = styled.button`
  color: white;
  margin: 0 20px;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: bold;
  border: 1px solid hsla(0,0%,100%,.18);
  background: radial-gradient(circle,hsla(0,0%,100%,.27) 0,hsla(0,0%,100%,.05) 100%);
  margin: 0 6px 0 9px;

  &:focus {
    outline: none;
  }
`;

function App() {
  const [showQrReader, toggleQrReader] = useState(false);
  const [showItemCodeInput, toggleItemCodeInput] = useState(true);

  const toggleInputs = useCallback(type => {
    toggleItemCodeInput(!showItemCodeInput);
    toggleQrReader(!showQrReader);
  }, [showItemCodeInput, showQrReader]);
  return (
    <>
      <Buttons>
        <Button onClick={toggleInputs}>Scan an item</Button>
        <Button onClick={toggleInputs}>Enter item code</Button>
      </Buttons>
      {showQrReader && <QrScanner />}
      {showItemCodeInput && <ItemCodeInput />}
    </>
  );
}

export default App;
