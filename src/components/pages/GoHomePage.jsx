import { useEffect } from 'react';
import ButtonLink from "../layouts/ButtonLink";

function GoHomePage() {
  useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #000000 0%, #1a0033 50%, #ff0080ef 100%)';
    document.body.style.color = '#e2e2e2';
    document.body.style.position = 'relative';
    document.body.style.overflowX = 'hidden';

    return () => {
      document.body.style.background = '';
      document.body.style.color = '';
      document.body.style.position = '';
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <ButtonLink text="🩷 Clique aqui" to="/home" />
  );
}

export default GoHomePage;
