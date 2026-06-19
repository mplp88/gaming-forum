import Link from 'next/link';

export default function Navbar() {
  const isAuthenticated = false;

  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          GameReviews
        </Link>

        <div className="flex gap-2">
          {isAuthenticated ? (
            <>
              <Link href="/profile">Mi Perfil</Link>
              <button>Salir</button>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Registrarse</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
