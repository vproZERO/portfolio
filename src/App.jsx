import { MainLayout } from "./layout/main-layout";
import { Button } from "./components/button";
import GiperMartImg from "./assets/gipermart.png";
import SneakersImg from "./assets/sneakers.png";
import FlappyImg from "./assets/flappy.png";
import TwoImg from "./assets/2048.png";
import LiberImg from "./assets/liber.png";
import { Card } from "./components/card";

const GiperData = [
  {
    id: 1,
    text: "reduxjs/toolkit",
  },
  {
    id: 2,
    text: "tanstack/react-query",
  },
  {
    id: 3,
    text: "headlessui/react",
  },
  {
    id: 4,
    text: "aos",
  },
  {
    id: 5,
    text: "axios",
  },
  {
    id: 6,
    text: "clsx",
  },
  {
    id: 7,
    text: "react-hook-form",
  },
  {
    id: 8,
    text: "react-loading-skeleton ",
  },
  {
    id: 9,
    text: "react-redux",
  },
  {
    id: 10,
    text: "react-router-dom ",
  },
  {
    id: 11,
    text: "react-slick",
  },
  {
    id: 12,
    text: "react-toastify",
  },
  {
    id: 13,
    text: "slick-carousel",
  },
  {
    id: 14,
    text: "tailwind css",
  },
];

const SneakersData = [
  {
    id: 1,
    text: "formkit/auto-animate",
  },
  {
    id: 6,
    text: "vue",
  },
  {
    id: 2,
    text: "aos",
  },
  {
    id: 3,
    text: "axios",
  },
  {
    id: 4,
    text: "sweetalert2",
  },
  {
    id: 5,
    text: "vue-router",
  },
];

const AdminData = [
  {
    id: 1,
    text: "hookform/resolvers",
  },
  {
    id: 2,
    text: "reduxjs/toolkit",
  },
  {
    id: 3,
    text: "tanstack/react-query",
  },
  {
    id: 4,
    text: "axios",
  },
  {
    id: 5,
    text: "clsx",
  },
  {
    id: 6,
    text: "js-cookie",
  },
  {
    id: 7,
    text: "react",
  },
  {
    id: 8,
    text: "react-dom",
  },
  {
    id: 9,
    text: "react-hook-form",
  },
  {
    id: 10,
    text: "react-router-dom",
  },
  {
    id: 11,
    text: "react-toastify",
  },
  {
    id: 12,
    text: "redux",
  },
  {
    id: 13,
    text: "zod",
  },
  {
    id: 14,
    text: "tailwindcss",
  },
];

const LiberData = [
  {
    id: 1,
    text: "react",
  },
  {
    id: 2,
    text: "react-dom",
  },
  {
    id: 3,
    text: "react-router-dom",
  },
  {
    id: 4,
    text: "tailwindcss",
  }
]

function App() {
  return (
    <div>
      <MainLayout>
        <section className="px-4 md:px-10 md:py-10 py-5 ">
          <h2
            className="text-white font-bold text-center mb-10 text-xl md:text-3xl aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            My projects
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <Card
              frameworks={GiperData}
              description={
                "Bu internet magazinni uzum marketga qarab yasaganman , search qismi backend orqali boladi , slider , catalog , product , hama narsasi backenda keladi. Backendni ozim qolda yozib chiqqanman , json-server yordamida . skeletonlari bor, buttonlar reusable , modal reusable , izbranniy tovarlarga qoshadi , korzinkaga qoshadi , korzinkada counti oshsa unga qarab price ham ozgaradi"
              }
              title={"GiperMarket"}
              github={"https://github.com/abduvahobov-abdulahad/gipermarket"}
              netlify={"https://gipermaarket.netlify.app/"}
              aosData={"fade-right"}
              aosDuration={"1500"}
            />
            <Card
              frameworks={SneakersData}
              description={
                "Bu internet magazinni RedMedia (Platina.uz) groupda stajirovkada yurganimda yasaganman , stajirovkada menga vuieni organing deyishkan edi chunki ular vueda ishlashar ekan shunda vueni ozim  selfstudy qilib organib shu saytni yasaganman . backend sifatida MOKKY.dev dan foydalanganman , korzinkaga tovar qoshadi , totalprice ni hisoblaydi , search backend orqali boladi , tovarlarni sortlidi , narxi arzon , narxi qimmatligig ga qarab tovarlarni sortlidi"
              }
              title={"Sneakers"}
              github={"https://github.com/vproZERO/vue-sneakers"}
              netlify={"https://vue-sneakers.netlify.app/"}
              aosData={"fade-left"}
              aosDuration={"1500"}
            />
            <Card
              frameworks={AdminData}
              description={
                "admin page , get , delete , edit , post , hamasi ishlidi , backendini qolda json-server da yozib chiqanman , verlceda turadi backend , edit qilganda eski qiymatlari ham turadi inputda invalidateValue bolib , buttonlar reusable , json-server-auth dan foydalanmoqchidm admin login uchun lekn VERCEL da json-server-auth ishlamidi ekan , zod ishlatkanman , "
              }
              title={"Admin Page"}
              github={"https://github.com/vproZERO/adminka"}
              netlify={"https://empty-admin.netlify.app/"}
              aosData={"fade-right"}
              aosDuration={"1500"}
            />
            <Card
              frameworks={LiberData}
              description={
                "Buni portfolio ga qoshishimdan maqsad DARK MODE Malumotlarni bitadan yozmasdan , bita arrayda yozib turib ularni map lab chiqarganman , keyn asosan routelar bilan ishlash , dynamic routerdan profile yaniy (KIRISH) da koproq foydalanganman , keyn productni ustiga boskanda single-product page ham otadi ."
              }
              title={"Liber"}
              github={"https://github.com/vproZERO/liber"}
              netlify={"https://liber-books.netlify.app/"}
              aosData={"fade-left"}
              aosDuration={"1500"}
            />
          </div>
        </section>
        {/* 
        
       
        <section
          id="games"
          className="flex items-center justify-center gap-20  py-40 border-b-2 "
        >
          <div
            className="aos-init aos-animate"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="text-primary font-bold text-2xl mb-2 text-center">
              Flappy Bird
            </h2>
            <h3 className="text-text fonr-medium text-lg max-w-[300px] mb-5 text-center">
              html , cssc , javascript yordamida{" "}
              <span className="text-link">Flappy Bird</span> oyinini yasab
              korganman , zerikkanda oynab tursa boladi
            </h3>
            <div className="flex items-center justify-between mb-10">
              <Button
                className={"rounded-md transition hover:translate-x-1"}
                variant={"primary"}
              >
                <a
                  target="_blank"
                  href="https://github.com/vproZERO/Flappy-Bird"
                >
                  View GitHub
                </a>
              </Button>
              <Button
                className={"rounded-md transition hover:translate-x-1"}
                variant={"primary"}
              >
                <a target="_blank" href="https://flappybirduz.netlify.app/">
                  View Netlify
                </a>
              </Button>
            </div>
            <div className="w-[300px]">
              <img src={FlappyImg} alt="" />
            </div>
          </div>
          <div
            className="aos-init aos-animate"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h2 className="text-primary font-bold text-2xl mb-2 text-center">
              Flappy Bird
            </h2>
            <h3 className="text-text fonr-medium text-lg max-w-[300px] mb-5 text-center">
              html , cssc , javascript yordamida{" "}
              <span className="text-link">2048</span> oyinini yasab korganman ,
              zerikkanda oynab tursa boladi
            </h3>
            <div className="flex items-center justify-between mb-10">
              <Button
                className={"rounded-md transition hover:translate-x-1"}
                variant={"primary"}
              >
                <a target="_blank" href="https://github.com/vproZERO/2048">
                  View GitHub
                </a>
              </Button>
              <Button
                className={"rounded-md transition hover:translate-x-1"}
                variant={"primary"}
              >
                <a target="_blank" href="https://2048gameuz.netlify.app/">
                  View Netlify
                </a>
              </Button>
            </div>
            <div className="w-[300px]">
              <img src={TwoImg} alt="" />
            </div>
          </div>
        </section>
        */}
      </MainLayout>
    </div>
  );
}

export default App;
