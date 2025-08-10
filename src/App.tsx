import { data } from "./data/data";
import SocialLink from "@/components/SocialLink";

const App = () => {
  return (
    <div className="bg-grey-900 h-screen flex items-center justify-center text-white">
      {data.map((person, index) => (
        <div
          key={index}
          className="container bg-grey-800 w-96 h-[40rem] rounded-xl"
          style={{ padding: "2rem" }}
        >
          <div className="info flex flex-col items-center justify-center gap-4">
            <img
              src={person.avatar}
              className="rounded-full size-20"
              alt={person.name}
            />
            <div className="heading">
              <h1 className="text-center font-bold text-2xl">{person.name}</h1>
              <h2 className="text-center font-bold text-sm text-primary">
                {person.location}
              </h2>
            </div>
            <p className="text-gray-300">{person.description}</p>
          </div>
          <div
            className="links flex flex-col justify-between h-[23rem]"
            style={{ marginTop: "1rem" }}
          >
            {person.socialLinks
              .slice()
              .sort((a, b) => a.key - b.key)
              .map((socialLink) => (
                <SocialLink
                  key={socialLink.key}
                  link={socialLink.link}
                  socialMedia={socialLink.socialMedia}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default App;
