/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '@assets/images/logo/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="my-8 flex justify-center">
      <div className="flex w-10/12 justify-between">
        <div className="w-5/12">
          <h5 className="mb-2 text-xl font-bold">Temukan Kami</h5>
          <ul className="space-y-4">
            <li>
              <a href="">
                <i className="bi bi-linkedin" /> Bangkalan Developer
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-instagram" /> bangkalan.dev
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-telegram" /> t.me/bangkalandeveloper
              </a>
            </li>
          </ul>
        </div>
        <div className="my-2 w-5/12">
          <div>
            <img src={logo} width="40%" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur distinctio, id dolores corrupti, ea minus
              dolorem suscipit cum a et voluptatum libero veritatis vero!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
