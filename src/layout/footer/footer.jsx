import { GitHub } from "../../assets/github";
import { Instagramm } from "../../assets/instagramm";
import { Telefon } from "../../assets/tel";
import { Link } from "../../components/link";
import { Netlify } from "../../assets/netlify";

export const Footer = () => {
  return (
    <div className="bg-primary py-2 md:px-5 px-1">
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-[300px] md:max-w-[500px] mx-auto gap-x-5 gap-y-4">
        <Link img={<GitHub />} href={"https://github.com/"}>
          <h3 className="">GitHub</h3>
        </Link>
        <Link
          img={<Netlify />}
          href={"https://app.netlify.com/teams/vprozero/overview"}
        >
          <h3 className="">Netlify</h3>
        </Link>
        
        <Link className={'border-none '} img={<Telefon />} href={"tel:+998911430377"}>
          <h3 className="">Telefon</h3>
        </Link>

      </div>
    </div>
  );
};
