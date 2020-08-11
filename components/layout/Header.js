import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';
import Link from 'next/link';
import Boton from '../ui/Boton';
import { css } from '@emotion/core';

const Header = () => {
  const usuario = true;
  return (
    <header>
      <div className="container-header">
        <div>
          <Link href="/">
            <p className="logo">P</p>
          </Link>

          <Buscar />
          <Navegacion />
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <p
            css={css`
              margin-right: 2rem;
            `}
          >
            Hola: Sergio
          </p>

          <Boton bgColor="true">Cerrar sesion</Boton>

          <Link href="/">
            <Boton bgColor="true">Login</Boton>
          </Link>

          <Link href="/">
            <Boton>Crear cuenta</Boton>
          </Link>
        </div>
      </div>

      <style jsx>{`
        header {
          border-bottom: 2px solid var(--gris3);
          padding: 1rem 0;
        }
        .container-header {
          max-width: 1200px;
          margin: 0 auto;
          width: 95%;
        }

        @media (min-width: 768px) {
          .container-header {
            display: flex;
            justify-content: space-between;
          }
        }
        .logo {
          color: var(--naranja);
          font-size: 4rem;
          line-height: 0;
          font-weight: 700;
          font-family: 'Roboto Slab', serif;
          margin-right: 2rem;
        }
      `}</style>
    </header>
  );
};

export default Header;
