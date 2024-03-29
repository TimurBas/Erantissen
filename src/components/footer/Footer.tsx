import Category from "../navigation/Category";
import { BsPinMap, BsTelephone, BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="pb-10 mt-auto bg-footer dark:bg-footer-dark">
      <div className="grid grid-cols-3 mr-25 ml-25">
        <div className="flex items-center justify-center mt-5">
          <div className="flex flex-col items-start h-[200px] ">
            <h1 className="mb-2 text-lg font-semibold text-center text-primary dark:text-black ">
              Navigation
            </h1>
            <Category categoryName="Hjem" path="" isFooter={true} />
            <Category
              categoryName="Åbningstider"
              path="aabningstider"
              isFooter={true}
            />
            <Category categoryName="Kontakt" path="kontakt" isFooter={true} />
            <Category
              categoryName="Handelsbetingelser"
              path="handelsbetingelser"
              isFooter={true}
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-5 text-primary dark:text-black ">
          <div className="flex flex-col items-start h-[200px]">
            <h1 className="mb-2 text-lg font-semibold text-center">
              Information
            </h1>
            <div className="flex flex-col gap-3">
              <div className="flex hover:text-stone-300 dark:hover:text-stone-600">
                <a
                  href="https://www.google.com/maps/place/Erantissen/@56.0917135,9.7573468,15z/data=!4m2!3m1!1s0x0:0x216843f11defc4aa?sa=X&ved=2ahUKEwjwpJDuxNj3AhWB6qQKHZD0DlAQ_BJ6BAhPEAU"
                  target="_blank"
                >
                  <div className="flex items-center gap-2">
                    <BsPinMap className="w-5 h-5" />
                    <p>Klostervej 8B, 8680 Ry</p>
                  </div>
                </a>
              </div>
              <div className="flex hover:text-stone-300 dark:hover:text-stone-600">
                <a href="tel:+4586892883">
                  <div className="flex items-center gap-2">
                    <BsTelephone className="w-5 h-5" />
                    <p>+45 86 89 28 83</p>
                  </div>
                </a>
              </div>
              <div className="flex hover:text-stone-300 dark:hover:text-stone-600">
                <a href="mailto:info@erantissen.dk">
                  <div className="flex items-center gap-2">
                    <AiOutlineMail className="w-5 h-5" />
                    <p>info@erantissen.dk</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5 text-primary dark:text-black ">
          <div className="flex flex-col items-start h-[200px]">
            <h1 className="mb-2 text-lg font-semibold text-center">
              Sociale Medier
            </h1>
            <div className="flex flex-col gap-3">
              <div className="flex hover:text-stone-300 dark:hover:text-stone-600">
                <a href="https://www.facebook.com/erantissen" target="_blank">
                  <div className="flex items-center gap-2 hover:text-facebook transition-all">
                    <BsFacebook className="w-5 h-5" />
                    <p>Facebook</p>
                  </div>
                </a>
              </div>
              <div className="flex hover:text-stone-300 dark:hover:text-stone-600">
                <a href="https://www.instagram.com/erantissen" target="_blank">
                  <div className="flex items-center gap-2 hover:animate-instagram transition-all">
                    <BsInstagram className="w-5 h-5 " />
                    <p>Instagram</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full text-primary dark:text-black">
        <p>{new Date().getFullYear()} © Erantissen</p>
      </div>
    </footer>
  );
};
export default Footer;
