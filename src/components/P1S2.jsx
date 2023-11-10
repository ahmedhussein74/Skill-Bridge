import adobe from "../images/adobe.svg";
import amazon from "../images/amazon.svg";
import netflix from "../images/netflix.svg";
import notion from "../images/notion.svg";
import spotify from "../images/spotify.svg";
import zapier from "../images/zapier.svg";
import zoom from "../images/zoom.svg";

const P1S2 = () => {
  return (
    <section className="w-[90%] lg:w-[80%] mx-auto my-[50px] lg:my-[100px] marquee gap-[50px] flex overflow-hidden bg-white border py-5 rounded-lg">
      <div className="marquee__group min-w-full flex shrink-0 justify-around gap-[50px]">
        <img src={adobe} />
        <img src={amazon} />
        <img src={netflix} />
        <img src={notion} />
        <img src={spotify} />
        <img src={zapier} />
        <img src={zoom} />
      </div>
      <div
        aria-hidden="true"
        className="marquee__group min-w-full flex shrink-0 justify-around gap-[50px]"
      >
        <img src={adobe} />
        <img src={amazon} />
        <img src={netflix} />
        <img src={notion} />
        <img src={spotify} />
        <img src={zapier} />
        <img src={zoom} />
      </div>
    </section>
  );
};

export default P1S2;
