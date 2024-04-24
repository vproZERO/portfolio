import { MainLayout } from "./layout/main-layout";
import { Button } from "./components/button";
import GiperMartImg from "./assets/gipermart.png";
import SneakersImg from "./assets/sneakers.png";
import FlappyImg from "./assets/flappy.png";
import TwoImg from "./assets/2048.png";
import LiberImg from "./assets/liber.png";
import { Card } from "./components/card";
import clsx from "clsx";

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
  },
];

const GamesData = [
  {
    id: 1,
    text: "html",
  },
  {
    id: 2,
    text: "css",
  },
  {
    id: 3,
    text: "javascript",
  },
];

const OrganicData = [
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
  },
];

const MyTeamData = [
  {
    id: 1,
    text: "vue",
  },
  {
    id: 2,
    text: "aos-animate",
  },
  {
    id: 3,
    text: "sweetalert2",
  },
  {
    id: 4,
    text: "vue-router",
  },
];

const AvtovoditelData = [
  {
    id: 1,
    text: "aos-animate",
  },
  {
    id: 6,
    text: "vue",
  },
  {
    id: 2,
    text: "axios",
  },
  {
    id: 3,
    text: "@fawmi/vue-google-maps",
  },
  {
    id: 4,
    text: "google-maps-api-loader",
  },
  {
    id: 5,
    text: "sweetalert2",
  },
  {
    id: 7,
    text: "tailwindcss",
  },
];

const YangilanishData = [
  {
    id: 1,
    text: "vue",
  },
  {
    id: 2,
    text: "sweetalert2",
  },
  {
    id: 3,
    text: "aos-animate",
  },
  {
    id: 4,
    text: "tailwindcss",
  },
];

const TechData = [
  {
    id: 1,
    text: "data:image/svg+xml,%3csvg%20width='120.000000'%20height='120.000000'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdesc%3e%20Created%20with%20Pixso.%20%3c/desc%3e%3cdefs%3e%3cclipPath%20id='clip9_10'%3e%3crect%20id='vscode-icons:file-type-html'%20width='120.000000'%20height='120.000000'%20fill='white'%20fill-opacity='0'/%3e%3c/clipPath%3e%3c/defs%3e%3crect%20id='vscode-icons:file-type-html'%20width='120.000000'%20height='120.000000'%20fill='%23FFFFFF'%20fill-opacity='0'/%3e%3cg%20clip-path='url(%23clip9_10)'%3e%3cpath%20id='Vector'%20d='M22.1325%20102.004L13.7062%207.5L106.294%207.5L97.8562%20101.989L59.9437%20112.5L22.1325%20102.004Z'%20fill='%23E44F26'%20fill-opacity='1.000000'%20fill-rule='nonzero'/%3e%3cpath%20id='Vector'%20d='M60%20104.468L90.6375%2095.9738L97.845%2015.2288L60%2015.2288L60%20104.468Z'%20fill='%23F1662A'%20fill-opacity='1.000000'%20fill-rule='nonzero'/%3e%3cpath%20id='Vector'%20d='M60%2050.2763L44.6625%2050.2763L43.605%2038.4075L60%2038.4075L60%2026.8163L30.9375%2026.8163L31.215%2029.9288L34.0613%2061.8675L60%2061.8675L60%2050.2763ZM60%2080.3775L59.9475%2080.3925L47.04%2076.9088L46.215%2067.665L34.5787%2067.665L36.2025%2085.86L59.9475%2092.4525L60%2092.4375L60%2080.3775Z'%20fill='%23EBEBEB'%20fill-opacity='1.000000'%20fill-rule='nonzero'/%3e%3cpath%20id='Vector'%20d='M59.9587%2050.2763L59.9587%2061.8675L74.2313%2061.8675L72.8887%2076.9013L59.9587%2080.3888L59.9587%2092.4488L83.7225%2085.86L83.895%2083.9025L86.6175%2053.3888L86.9025%2050.2763L59.9587%2050.2763ZM59.9587%2026.8163L59.9587%2038.4075L87.9562%2038.4075L88.1887%2035.805L88.7175%2029.9288L88.995%2026.8163L59.9587%2026.8163Z'%20fill='%23FFFFFF'%20fill-opacity='1.000000'%20fill-rule='nonzero'/%3e%3c/g%3e%3c/svg%3e",
  },
  {
    id: 2,
    text: "data:image/svg+xml,%3csvg%20width='120.000000'%20height='119.000000'%20viewBox='0%200%20120%20119'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdesc%3e%20Created%20with%20Pixso.%20%3c/desc%3e%3cdefs%3e%3cclipPath%20id='clip9_15'%3e%3crect%20id='vscode-icons:file-type-css'%20width='120.000000'%20height='119.000000'%20fill='white'%20fill-opacity='0'/%3e%3c/clipPath%3e%3c/defs%3e%3crect%20id='vscode-icons:file-type-css'%20width='120.000000'%20height='119.000000'%20fill='%23FFFFFF'%20fill-opacity='0'/%3e%3cg%20clip-path='url(%23clip9_15)'%3e%3cpath%20id='Vector'%20d='M22.1324%20101.154L13.71%207.4375L106.29%207.4375L97.8562%20101.139L59.9437%20111.562L22.1324%20101.154Z'%20fill='%231572B6'%20fill-opacity='1.000000'%20fill-rule='nonzero'/%3e%3cpath%20id='Vector'%20d='M60%20103.597L90.6375%2095.174L97.845%2015.1018L60%2015.1018L60%20103.597Z'%20fill='%2333A9DC'%20fill-opacity='1.000000'%20fill-rule='nonzero'/%3e%3cpath%20id='Vector'%20d='M60%2049.054L75.3375%2049.054L76.395%2037.2842L60%2037.2842L60%2025.7896L89.0625%2025.7896L88.785%2028.8724L85.9388%2060.5487L60%2060.5487L60%2049.054Z'%20fill='%23FFFFFF'%20fill-opacity='1.000000'%20fill-rule='nonzero'/%3e%3cpath%20id='Vector'%20d='M60.0713%2078.9045L60.0188%2078.9193L47.1113%2075.4609L46.2863%2066.2942L34.65%2066.2942L36.2738%2084.3413L60.015%2090.8788L60.0713%2090.864L60.0713%2078.9045Z'%20fill='%23EBEBEB'%20fill-opacity='1.000000'%20fill-rule='nonzero'/%3e%3cpath%20id='Vector'%20d='M74.3513%2060.0615L72.9563%2075.4534L60.03%2078.9119L60.03%2090.8714L83.79%2084.3412L83.9663%2082.4001L85.98%2060.0615L74.3513%2060.0615Z'%20fill='%23FFFFFF'%20fill-opacity='1.000000'%20fill-rule='nonzero'/%3e%3cpath%20id='Vector'%20d='M60.0413%2025.7896L60.0413%2037.2842L32.0438%2037.2842L31.8113%2034.6997L31.2825%2028.8724L31.005%2025.7896L60.0413%2025.7896ZM60%2049.054L60%2060.5487L47.2538%2060.5487L47.0212%2057.9642L46.4963%2052.1369L46.2188%2049.054L60%2049.054Z'%20fill='%23EBEBEB'%20fill-opacity='1.000000'%20fill-rule='nonzero'/%3e%3c/g%3e%3c/svg%3e",
  },
  {
    id: 3,
    text: "data:image/svg+xml,%3csvg%20width='120.000000'%20height='120.000000'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdesc%3e%20Created%20with%20Pixso.%20%3c/desc%3e%3cdefs%3e%3cclipPath%20id='clip9_22'%3e%3crect%20id='vscode-icons:file-type-js-official'%20width='120.000000'%20height='120.000000'%20fill='white'%20fill-opacity='0'/%3e%3c/clipPath%3e%3c/defs%3e%3crect%20id='vscode-icons:file-type-js-official'%20width='120.000000'%20height='120.000000'%20fill='%23FFFFFF'%20fill-opacity='0'/%3e%3cg%20clip-path='url(%23clip9_22)'%3e%3cpath%20id='Vector'%20d='M7.5%207.5L112.5%207.5L112.5%20112.5L7.5%20112.5L7.5%207.5Z'%20fill='%23F5DE19'%20fill-opacity='1.000000'%20fill-rule='nonzero'/%3e%3cpath%20id='Vector'%20d='M78.0338%2089.5312C78.9284%2091.3485%2080.3184%2092.8759%2082.0434%2093.9375C83.7684%2094.9991%2085.7584%2095.5515%2087.7838%2095.5312C91.8713%2095.5312%2094.485%2093.4875%2094.485%2090.6562C94.485%2087.2812%2091.8%2086.0738%2087.3%2084.105L84.8325%2083.0475C77.7075%2080.0138%2072.9825%2076.215%2072.9825%2068.1825C72.9825%2060.7838%2078.6075%2055.1475%2087.4313%2055.1475C90.2877%2054.9412%2093.1416%2055.5805%2095.637%2056.9856C98.1324%2058.3907%20100.159%2060.4995%20101.464%2063.0488L93.75%2067.98C93.2476%2066.716%2092.3728%2065.6345%2091.2416%2064.8791C90.1104%2064.1236%2088.7764%2063.7299%2087.4163%2063.75C86.8229%2063.6906%2086.2236%2063.7555%2085.6567%2063.9405C85.0897%2064.1254%2084.5675%2064.4265%2084.1234%2064.8244C83.6792%2065.2224%2083.3228%2065.7085%2083.0769%2066.2518C82.831%2066.7951%2082.7009%2067.3837%2082.695%2067.98C82.695%2070.9388%2084.5288%2072.1388%2088.7625%2073.98L91.23%2075.0375C99.615%2078.6338%20104.355%2082.2975%20104.355%2090.5363C104.355%2099.42%2097.3763%20104.288%2088.005%20104.288C84.3537%20104.52%2080.713%20103.691%2077.5223%20101.901C74.3317%20100.11%2071.7274%2097.4342%2070.0238%2094.1963L78.0338%2089.5312ZM43.1775%2090.3863C44.7263%2093.135%2046.1363%2095.46%2049.5263%2095.46C52.7663%2095.46%2054.8138%2094.1925%2054.8138%2089.2613L54.8138%2055.71L64.68%2055.71L64.68%2089.3925C64.68%2099.6075%2058.68%20104.258%2049.9463%20104.258C46.8591%20104.426%2043.7931%20103.657%2041.1513%20102.051C38.5096%20100.444%2036.4157%2098.0761%2035.145%2095.2575L43.1775%2090.3863Z'%20fill='%23000000'%20fill-opacity='1.000000'%20fill-rule='nonzero'/%3e%3c/g%3e%3c/svg%3e",
  },
  {
    id: 9,
    text: "https://protfolio1-taupe.vercel.app/assets/typescript-DwfpNOHv.png",
  },
  {
    id: 4,
    text: "https://protfolio1-taupe.vercel.app/assets/react-qQnrlKaa.svg",
  },
  {
    id: 10,
    text: "https://www.bairesdev.com/wp-content/uploads/2020/07/redux.svg",
  },
  {
    id: 5,
    text: "data:image/svg+xml,%3csvg%20width='131.000000'%20height='131.000000'%20viewBox='0%200%20131%20131'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdesc%3e%20Created%20with%20Pixso.%20%3c/desc%3e%3cdefs%3e%3cclipPath%20id='clip9_29'%3e%3crect%20id='vscode-icons:file-type-tailwind'%20width='131.000000'%20height='131.000000'%20fill='white'%20fill-opacity='0'/%3e%3c/clipPath%3e%3c/defs%3e%3crect%20id='vscode-icons:file-type-tailwind'%20width='131.000000'%20height='131.000000'%20fill='%23FFFFFF'%20fill-opacity='0'/%3e%3cg%20clip-path='url(%23clip9_29)'%3e%3cpath%20id='Vector'%20d='M36.8438%2056.0844C40.6646%2040.8011%2050.2167%2033.1594%2065.5%2033.1594C88.425%2033.1594%2091.2906%2050.3532%20102.753%2053.2188C110.395%2055.1292%20117.081%2052.2636%20122.812%2044.6219C118.992%2059.9052%20109.44%2067.5469%2094.1562%2067.5469C71.2313%2067.5469%2068.3656%2050.3532%2056.9031%2047.4875C49.2615%2045.5771%2042.575%2048.4427%2036.8438%2056.0844ZM8.1875%2090.4719C12.0084%2075.1886%2021.5604%2067.5469%2036.8438%2067.5469C59.7687%2067.5469%2062.6344%2084.7407%2074.0969%2087.6063C81.7385%2089.5167%2088.425%2086.6511%2094.1562%2079.0094C90.3354%2094.2927%2080.7833%20101.934%2065.5%20101.934C42.575%20101.934%2039.7094%2084.7407%2028.2469%2081.875C20.6052%2079.9646%2013.9188%2082.8303%208.1875%2090.4719Z'%20fill='%2344A8B3'%20fill-opacity='1.000000'%20fill-rule='nonzero'/%3e%3c/g%3e%3c/svg%3e",
  },

  {
    id: 6,
    text: "data:image/svg+xml,%3csvg%20width='112.000000'%20height='112.000000'%20viewBox='0%200%20112%20112'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdesc%3e%20Created%20with%20Pixso.%20%3c/desc%3e%3cdefs%3e%3cclipPath%20id='clip9_25'%3e%3crect%20id='vscode-icons:file-type-vscode'%20width='112.000000'%20height='112.000000'%20fill='white'%20fill-opacity='0'/%3e%3c/clipPath%3e%3c/defs%3e%3crect%20id='vscode-icons:file-type-vscode'%20width='112.000000'%20height='112.000000'%20fill='%23FFFFFF'%20fill-opacity='0'/%3e%3cg%20clip-path='url(%23clip9_25)'%3e%3cpath%20id='Vector'%20d='M101.535%2017.605L81.354%207.88898C80.2143%207.33948%2078.9319%207.15814%2077.6845%207.37012C76.4372%207.58209%2075.2867%208.17685%2074.3925%209.07199L8.32998%2069.3C7.52845%2070.0273%207.04865%2071.0432%206.99615%2072.1243C6.94363%2073.2053%207.32271%2074.2629%208.04998%2075.0645C8.13748%2075.159%208.22498%2075.25%208.31948%2075.334L13.713%2080.234C14.4177%2080.8754%2015.3249%2081.2498%2016.277%2081.2919C17.229%2081.3341%2018.1657%2081.0416%2018.9245%2080.465L98.497%2020.125C99.098%2019.6689%2099.8144%2019.3896%20100.566%2019.3186C101.317%2019.2477%20102.073%2019.3877%20102.749%2019.7231C103.424%2020.0585%20103.993%2020.5758%20104.391%2021.2169C104.789%2021.8581%20105%2022.5975%20105%2023.352L105%2023.1175C105%2021.9656%20104.675%2020.8372%20104.062%2019.862C103.449%2018.8868%20102.573%2018.1045%20101.535%2017.605Z'%20fill='%230065A9'%20fill-opacity='1.000000'%20fill-rule='nonzero'/%3e%3cpath%20id='Vector'%20d='M101.535%2094.395L81.354%20104.115C80.214%20104.662%2078.9319%20104.843%2077.6849%20104.631C76.4379%20104.419%2075.2875%20103.825%2074.3925%20102.932L8.32998%2042.7C7.52845%2041.9727%207.04865%2040.9568%206.99615%2039.8758C6.94363%2038.7947%207.32271%2037.7371%208.04998%2036.9355C8.13748%2036.841%208.22498%2036.75%208.31948%2036.666L13.713%2031.766C14.4185%2031.1219%2015.3277%2030.7459%2016.2821%2030.7037C17.2365%2030.6615%2018.1754%2030.9557%2018.935%2031.535L98.497%2091.875C99.098%2092.3311%2099.8144%2092.6104%20100.566%2092.6814C101.317%2092.7523%20102.073%2092.6123%20102.749%2092.2769C103.424%2091.9415%20103.993%2091.4242%20104.391%2090.7831C104.789%2090.1419%20105%2089.4025%20105%2088.648L105%2088.9C104.996%2090.0488%20104.669%2091.1733%20104.057%2092.1451C103.444%2093.1168%20102.57%2093.8965%20101.535%2094.395Z'%20fill='%23007ACC'%20fill-opacity='1.000000'%20fill-rule='nonzero'/%3e%3cpath%20id='Vector'%20d='M81.354%20104.115C80.214%20104.662%2078.932%20104.843%2077.685%20104.631C76.438%20104.419%2075.2876%20103.825%2074.3925%20102.932C74.8952%20103.428%2075.533%20103.764%2076.2261%20103.899C76.9193%20104.035%2077.6369%20103.962%2078.289%20103.691C78.9412%20103.42%2079.4988%20102.963%2079.8921%20102.376C80.2854%20101.79%2080.4969%20101.1%2080.5%20100.394L80.5%2011.606C80.5006%2010.8965%2080.2906%2010.2029%2079.8966%209.61279C79.5026%209.02277%2078.9424%208.56293%2078.2868%208.29156C77.6313%208.0202%2076.91%207.94952%2076.2142%208.08847C75.5184%208.22739%2074.8796%208.5697%2074.3785%209.07202C75.2729%208.17722%2076.4232%207.58243%2077.6703%207.36984C78.9174%207.15729%2080.1998%207.33749%2081.34%207.88553L101.518%2017.5875C102.559%2018.0845%20103.438%2018.8658%20104.054%2019.8412C104.671%2020.8166%20104.998%2021.9463%20105%2023.1L105%2088.9C105%2090.0529%20104.675%2091.1823%20104.061%2092.1582C103.448%2093.1341%20102.571%2093.9168%20101.532%2094.416L81.354%20104.115Z'%20fill='%231F9CF0'%20fill-opacity='1.000000'%20fill-rule='nonzero'/%3e%3c/g%3e%3c/svg%3e",
  },
  {
    id: 7,
    text: "data:image/svg+xml,%3csvg%20width='88.000000'%20height='88.000000'%20viewBox='0%200%2088%2088'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdesc%3e%20Created%20with%20Pixso.%20%3c/desc%3e%3cdefs%3e%3cclipPath%20id='clip9_42'%3e%3crect%20id='akar-icons:github-fill'%20width='88.000000'%20height='88.000000'%20fill='white'%20fill-opacity='0'/%3e%3c/clipPath%3e%3c/defs%3e%3crect%20id='akar-icons:github-fill'%20width='88.000000'%20height='88.000000'%20fill='%23FFFFFF'%20fill-opacity='0'/%3e%3cg%20clip-path='url(%23clip9_42)'%3e%3cpath%20id='Vector'%20d='M44%200C19.69%200%200%2019.69%200%2044C0%2063.47%2012.595%2079.915%2030.085%2085.745C32.285%2086.13%2033.11%2084.81%2033.11%2083.655C33.11%2082.61%2033.055%2079.145%2033.055%2075.46C22%2077.495%2019.14%2072.765%2018.26%2070.29C17.765%2069.025%2015.62%2065.12%2013.75%2064.075C12.21%2063.25%2010.01%2061.215%2013.695%2061.16C17.16%2061.105%2019.635%2064.35%2020.46%2065.67C24.42%2072.325%2030.745%2070.455%2033.275%2069.3C33.66%2066.44%2034.815%2064.515%2036.08%2063.415C26.29%2062.315%2016.06%2058.52%2016.06%2041.69C16.06%2036.905%2017.765%2032.945%2020.57%2029.865C20.13%2028.765%2018.59%2024.255%2021.01%2018.205C21.01%2018.205%2024.695%2017.05%2033.11%2022.715C36.63%2021.725%2040.37%2021.23%2044.11%2021.23C47.85%2021.23%2051.59%2021.725%2055.11%2022.715C63.525%2016.995%2067.21%2018.205%2067.21%2018.205C69.63%2024.255%2068.09%2028.765%2067.65%2029.865C70.455%2032.945%2072.16%2036.85%2072.16%2041.69C72.16%2058.575%2061.875%2062.315%2052.085%2063.415C53.68%2064.79%2055.055%2067.43%2055.055%2071.555C55.055%2077.44%2055%2082.17%2055%2083.655C55%2084.81%2055.825%2086.185%2058.025%2085.745C66.7596%2082.796%2074.3497%2077.1822%2079.7268%2069.6937C85.1039%2062.2052%2087.9974%2053.2191%2088%2044C88%2019.69%2068.31%200%2044%200Z'%20fill='%23000000'%20fill-opacity='1.000000'%20fill-rule='evenodd'/%3e%3c/g%3e%3c/svg%3e",
  },
  {
    id: 8,
    text: "data:image/svg+xml,%3csvg%20width='105.000000'%20height='105.000000'%20viewBox='0%200%20105%20105'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdesc%3e%20Created%20with%20Pixso.%20%3c/desc%3e%3cdefs%3e%3cclipPath%20id='clip9_40'%3e%3crect%20id='logos:git-icon'%20width='105.000000'%20height='105.000000'%20fill='white'%20fill-opacity='0'/%3e%3c/clipPath%3e%3c/defs%3e%3crect%20id='logos:git-icon'%20width='105.000000'%20height='105.000000'%20fill='%23FFFFFF'%20fill-opacity='0'/%3e%3cg%20clip-path='url(%23clip9_40)'%3e%3cpath%20id='Vector'%20d='M103.02%2047.8219L57.1758%201.98038C54.5372%20-0.65979%2050.2552%20-0.65979%2047.6134%201.98038L38.0937%2011.5001L50.1699%2023.5763C52.9762%2022.6281%2056.1943%2023.2642%2058.4313%2025.5012C60.6789%2027.7525%2061.3106%2030.9981%2060.3393%2033.8134L71.9775%2045.452C74.7932%2044.482%2078.0421%2045.1095%2080.291%2047.3621C83.434%2050.5039%2083.434%2055.596%2080.291%2058.7399C77.1471%2061.8841%2072.055%2061.8841%2068.9095%2058.7399C66.5454%2056.3733%2065.9613%2052.9013%2067.1582%2049.9888L56.3046%2039.1352L56.3034%2067.6973C57.0902%2068.0863%2057.8088%2068.6002%2058.4313%2069.2189C61.5743%2072.3607%2061.5743%2077.4532%2058.4313%2080.5995C55.2874%2083.7422%2050.1929%2083.7422%2047.0535%2080.5995C43.9105%2077.4532%2043.9105%2072.3611%2047.0535%2069.2194C47.8067%2068.4658%2048.7019%2067.869%2049.6871%2067.4635L49.6871%2038.6352C48.7004%2038.2324%2047.8048%2037.6353%2047.0535%2036.8793C44.6722%2034.5013%2044.0996%2031.0071%2045.3198%2028.0831L33.4154%2016.1775L1.98105%2047.6099C-0.660339%2050.2525%20-0.660339%2054.5349%201.98105%2057.1755L47.8259%20103.018C50.4652%20105.658%2054.7464%20105.658%2057.3891%20103.018L103.019%2057.3884C105.66%2054.747%20105.66%2050.4621%20103.019%2047.8219L103.02%2047.8219Z'%20fill='%23DE4C36'%20fill-opacity='1.000000'%20fill-rule='nonzero'/%3e%3c/g%3e%3c/svg%3e",
  },
];

function App() {
  return (
    <div>
      <MainLayout>
        <section id="tech" className="px-4 md:px-10 md:py-10 py-5 ">
          <div className="grid grid-cols-2 md:grid-cols-5 md:gap-5 gap-3 gap-y-5">
            {TechData.map((item) => (
              <div
                key={item.id}
                className={clsx(
                  "md:w-[120px] w-[60px] mx-auto aos-init aos-animate"
                )}
                data-aos={item.id % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration={"1500"}
              >
                <img className="object-contain" src={item.text} alt="img" />
              </div>
            ))}
          </div>
        </section>
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
              description={"React yordamida qilingan Landing page "}
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
              title={"My Team"}
              github={"https://github.com/vproZERO/myteam"}
              netlify={"https://mening-komandam.netlify.app/"}
              aosData={"fade-left"}
              aosDuration={"1500"}
            />

            <Card
              frameworks={AvtovoditelData}
              description={"Vue yordamida qilingan Landing page "}
              title={"Avtovoditel"}
              github={"https://github.com/vproZERO/avtovoditel"}
              netlify={"https://avto-voditel.netlify.app/"}
              aosData={"fade-right"}
              aosDuration={"1500"}
            />
            <Card
              frameworks={YangilanishData}
              description={"Vue yordamida qilingan Landing page "}
              title={"Yangilanish"}
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
