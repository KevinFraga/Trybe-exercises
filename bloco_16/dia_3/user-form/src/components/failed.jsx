import React from 'react';
import { Link } from 'react-router-dom';

const Failed = () => (
  <div>
    <p>Login não efetuado.</p>
    <Link to="/">
      Tela Inicial
    </Link>
  </div>
);

export default Failed;
