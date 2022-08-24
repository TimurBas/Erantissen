import Category from "../navigation/Category";
import { BsPinMap, BsTelephone, BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="pb-10 bg-slate-200">
      <div className="grid grid-cols-3 mr-25 ml-25">
        <div className="flex items-center justify-center mt-5">
          <div className="flex flex-col items-start h-[200px]">
            <h1 className="text-lg font-semibold text-center mb-2">
              Navigation
            </h1>
            <Category categoryName="Hjem" path="" />
            <Category categoryName="Åbningstider" path="aabningstider" />
            <Category categoryName="Kontakt" path="kontakt" />
            <Category
              categoryName="Handelsbetingelser"
              path="handelsbetingelser"
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-5">
          <div className="flex flex-col items-start h-[200px]">
            <h1 className="text-lg font-semibold text-center mb-2">
              Information
            </h1>
            <div className="flex flex-col gap-3">
              <div className="flex">
                <a
                  href="https://www.google.com/maps/place/Erantissen/@56.0917135,9.7573468,15z/data=!4m2!3m1!1s0x0:0x216843f11defc4aa?sa=X&ved=2ahUKEwjwpJDuxNj3AhWB6qQKHZD0DlAQ_BJ6BAhPEAU"
                  target="_blank"
                >
                  <div className="flex gap-2 items-center">
                    <BsPinMap className="w-5 h-5" />
                    <p>Klostervej 8B, 8680 Ry</p>
                  </div>
                </a>
              </div>
              <div className="flex">
                <a href="tel:+4586892883">
                  <div className="flex gap-2 items-center">
                    <BsTelephone className="w-5 h-5" />
                    <p>+45 86 89 28 83</p>
                  </div>
                </a>
              </div>
              <div className="flex">
                <a href="mailto:info@erantissen.dk">
                  <div className="flex gap-2 items-center">
                    <AiOutlineMail className="w-5 h-5" />
                    <p>info@erantissen.dk</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5">
          <div className="flex flex-col items-start h-[200px]">
            <h1 className="text-lg font-semibold text-center mb-2">
              Sociale Medier
            </h1>
            <div className="flex flex-col gap-3">
              <div className="flex">
                <a href="https://www.facebook.com/erantissen" target="_blank">
                  <div className="flex gap-2 items-center">
                    <BsFacebook className="w-5 h-5" />
                    <p>Facebook</p>
                  </div>
                </a>
              </div>
              <div className="flex">
                <a href="#" target="_blank">
                  <div className="flex gap-2 items-center">
                    <BsInstagram className="w-5 h-5" />
                    <p>Instagram</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <p>{new Date().getFullYear()} © Erantissen</p>
      </div>
    </footer>
  );
};
export default Footer;
