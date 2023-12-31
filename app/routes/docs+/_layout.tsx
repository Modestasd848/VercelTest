import { Outlet } from 'react-router-dom';

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-violet-50 p-2 flex items-center justify-between">
        <img
          className="w-1/12"
          src="data:image/jpeg;base64,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"
          alt="remix-logo"
        />
        <h1 className="text-5xl font-sans">Welcome to docs page</h1>
        <nav className="pr-5">
          <a
            className="mr-4 p-3 bg-red-200 rounded-lg hover:bg-red-400"
            href="https://remix.run/blog"
          >
            Blog
          </a>
          <a
            className="mr-4 p-3 bg-red-200 rounded-lg hover:bg-red-400"
            href="https://remix.run/docs/en/main"
          >
            Docs
          </a>
          <a
            className="mr-4 p-3 bg-red-200 rounded-lg hover:bg-red-400"
            href="https://github.com/remix-run"
          >
            Github
          </a>
          <a
            className="mr-4 p-3 bg-red-200 rounded-lg hover:bg-red-400"
            href="https://remix.run/conf"
          >
            Remix Conf
          </a>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
