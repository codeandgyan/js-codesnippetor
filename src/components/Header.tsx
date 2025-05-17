function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md overflow-y-hidden bg-bg1 text-fg3 px-4 py-3 flex items-center border-bd2 border-b space-x-4 text-sm font-semibold">
      <div className="cursor-pointer hover:text-fg4 flex items-center justify-center gap-3">
        <img src="/jsplaybook-logo.png" className="object-contain max-h-8" />
        <span className="font-ubuntu text-fg5 text-lg font-normal">
          JSplaybook
        </span>
        <hr className="border-l border-bd5 h-6" />
      </div>

      <div className="cursor-pointer hover:text-fg4">File</div>
      <div className="cursor-pointer hover:text-fg4">Edit</div>
      <div className="cursor-pointer hover:text-fg4">View</div>
      <div className="cursor-pointer hover:text-fg4">Help</div>
    </header>
  );
}

export default Header;
