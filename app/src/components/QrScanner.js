import styled from 'styled-components';
import QrReader from 'react-qr-scanner';
import { useState } from 'react';

const Container = styled.div``;

const QrScanner = () => {
  const [qrResult, setQrResult] = useState();
  const [qrError, setQrError] = useState();

  return (
  <Container>
    <QrReader
      delay={100}
      style={{
        height: 240,
        width: 360
      }}
      onError={setQrError}
      onScan={setQrResult}
      // legacyMode={true}
    />
    <div>{qrResult}</div>
    <div>{qrError}</div>
  </Container>
);
    };

export default QrScanner;
