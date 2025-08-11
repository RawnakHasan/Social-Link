type ButtonProps = {
  link: string;
  socialMedia: string;
};

const SocialLink = ({ link, socialMedia }: ButtonProps) => {
  const handleClick = (url: string) => {
    if (url.includes("@gmail.com")) {
      // Treat as email
      navigator.clipboard.writeText(url);
    } else {
      // Treat as normal URL
      window.open(url, "_blank");
    }
  };
  return (
    <button
      onClick={() => handleClick(link)}
      className="flex items-center justify-center gap-2 bg-grey-700 hover:bg-primary text-white w-full h-12 rounded-lg transition-colors duration-200 hover:cursor-pointer active:bg-primary"
    >
      <span className="font-bold">{socialMedia}</span>
    </button>
  );
};
export default SocialLink;
