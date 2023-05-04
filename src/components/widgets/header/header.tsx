type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <div className="w-full text-center text-4xl font-bold text-white p-4">
      {title}
    </div>
  );
}

export default Header;
