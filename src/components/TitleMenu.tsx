function TitleMenu() {
  return (
    <div className="bg-bg2 text-fg1 px-5 py-2 flex border-bd3 border-b space-x-4 text-sm font-semibold">
      <div className="cursor-pointer hover:text-fg2">File</div>
      <div className="cursor-pointer hover:text-fg2">Edit</div>
      <div className="cursor-pointer hover:text-fg2">View</div>
      <div className="cursor-pointer hover:text-fg2">Help</div>
    </div>
  );
}

export default TitleMenu;
