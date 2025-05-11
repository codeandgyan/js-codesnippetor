function TitleMenu() {
  return (
    <div className="bg-bg0 text-fg1 px-5 py-3 flex items-center border-bd5 border-b space-x-4 text-sm font-semibold">
      <div className="cursor-pointer hover:text-fg2 flex items-center justify-center gap-3">
        <img src="/YellowDarkLogo.png" className="object-contain max-h-8" />
        <span className="font-ubuntu text-fg5 text-lg">
          Snippetor
        </span>
        <hr className="border-l border-bd5 h-6" />
      </div>

      <div className="cursor-pointer hover:text-fg2">File</div>
      <div className="cursor-pointer hover:text-fg2">Edit</div>
      <div className="cursor-pointer hover:text-fg2">View</div>
      <div className="cursor-pointer hover:text-fg2">Help</div>
    </div>
  );
}

export default TitleMenu;
