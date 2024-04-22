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

const GamesData = [
  {
    id:1,
    text: "html"
  },
  {
    id:2,
    text: "css"
  },
  {
    id:3,
    text: "javascript"
  }
]

const OrganicData = [
  {
    id:1,
    text: "react"
  },
  {
    id:2,
    text:"react-dom"
  },
  {
    id:3,
    text:"react-router-dom"
  },
  {
    id:4,
    text:"tailwindcss"
  }
]

const MyTeamData = [
  {
    id:1,
    text:"vue"
  },
  {
    id:2,
    text:"aos-animate"
  },
  {
    id:3,
    text:"sweetalert2"
  },
  {
    id:4,
    text:"vue-router"
  }
]

const AvtovoditelData = [
  {
    id:1,
    text:"aos-animate"
  },
  {
    id:6,
    text:"vue"
  },
  {
    id:2,
    text:"axios"
  },
  {
    id:3,
    text:"@fawmi/vue-google-maps"
  },
  {
    id:4,
    text:"google-maps-api-loader"
  },
  {
    id:5,
    text:"sweetalert2"
  },
  {
    id:7,
    text:"tailwindcss"
  }
]

const YangilanishData = [
  {
    id:1,
    text:"vue"
  },
  {
    id:2,
    text:"sweetalert2"
  },
  {
    id:3,
    text: "aos-animate"
  },
  {
    id:4,
    text: "tailwindcss"
  }
]

function App() {
  return (
    <div>
      <MainLayout>
        <section id="projects" className="px-4 md:px-10 md:py-10 py-5 ">
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
        <section id="games" className="px-4 md:px-10 md:py-10 py-5">
        <h2
            className="text-white font-bold text-center mb-10 text-xl md:text-3xl aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Games
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
          <Card
              frameworks={GamesData}
              description={
                "Html Javascript yordami Flappy Bird oyini yasaganman , laptop va telefonda oynasa boladi"
              }
              title={"Flappy Bird"}
              github={"https://github.com/vproZERO/Flappy-Bird"}
              netlify={"https://flappybirduz.netlify.app/"}
              aosData={"fade-right"}
              aosDuration={"1500"}
            />
            <Card
              frameworks={GamesData}
              description={
                "Html Javascript yordami 2048 oyini yasaganman , bu oyinni faqat laptopda oynasa boladi "
              }
              title={"2048"}
              github={"https://github.com/vproZERO/2048"}
              netlify={"https://2048gameuz.netlify.app/"}
              aosData={"fade-left"}
              aosDuration={"1500"}
            />
          </div>
        </section>
        <section id="landing" className="px-4 md:px-10 md:py-10 py-5">
        <h2
            className="text-white font-bold text-center mb-10 text-xl md:text-3xl aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Landing Pages
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
          <Card
              frameworks={OrganicData}
              description={
                "React yordamida qilingan Landing page "
              }
              title={"Organic"}
              github={"https://github.com/vproZERO/organic"}
              netlify={"https://eco-organick.netlify.app/"}
              aosData={"fade-right"}
              aosDuration={"1500"}
            />
            <Card
              frameworks={MyTeamData}
              description={
                "Html Javascript yordami 2048 oyini yasaganman , bu oyinni faqat laptopda oynasa boladi "
              }
              title={"2048"}
              github={"https://github.com/vproZERO/myteam"}
              netlify={"https://mening-komandam.netlify.app/"}
              aosData={"fade-left"}
              aosDuration={"1500"}
            />

<Card
              frameworks={AvtovoditelData}
              description={
                "Vue yordamida qilingan Landing page "
              }
              title={"Avtovoditel"}
              github={"https://github.com/vproZERO/avtovoditel"}
              netlify={"https://avto-voditel.netlify.app/"}
              aosData={"fade-right"}
              aosDuration={"1500"}
            />
            <Card
              frameworks={YangilanishData}
              description={
                "Vue yordamida qilingan Landing page "
              }
              title={"2048"}
              github={"https://github.com/vproZERO/yangilanish"}
              netlify={"https://shaxnoza-siddiqova.netlify.app/"}
              aosData={"fade-left"}
              aosDuration={"1500"}
            />
          </div>
        </section>
      </MainLayout>
    </div>
  );
}

export default App;
