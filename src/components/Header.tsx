function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md overflow-y-hidden bg-bg1 text-fg0 px-4 py-3 flex items-center border-bd2 border-b space-x-4 text-sm font-medium">
      <div className="cursor-pointer hover:text-fg2 flex items-center justify-center gap-3">
        <img src="/jsplaybook-logo.png" className="object-contain max-h-10" />
        <span className="font-ubuntu text-fg5 text-lg font-normal">
          <b className="text-2xl">JS</b>playbook
        </span>
        <hr className="border-l border-bd5 h-6" />
      </div>

      <div className="cursor-pointer hover:text-fg2">File</div>
      <div className="cursor-pointer hover:text-fg2">Edit</div>
      <div className="cursor-pointer hover:text-fg2">View</div>
      <div className="cursor-pointer hover:text-fg2">Help</div>
    </header>
  );
}

export default Header;
