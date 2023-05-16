import {
    IoLogoFacebook,
    IoLogoWhatsapp,
    IoLogoInstagram,
    IoMdAddCircle,
    IoIosArrowRoundForward,
} from 'react-icons/io';

import Kursi from './assets/img/kursi.jpg';
import Meja from './assets/img/products/meja.jpg';
import Meja2 from './assets/img/products/mejakecil.jpg';
import AlatMasak from './assets/img/products/alatmasak.jpg';
import Product1Img from './assets/img/products/meja.jpg';
import Product2Img from './assets/img/products/kursi.jpg';
import Product3Img from './assets/img/products/alatmasak.jpg';
import Product4Img from './assets/img/products/cermin.jpg';
import Product5Img from './assets/img/products/lantai.jpg';
import Product6Img from './assets/img/products/mejakecil.jpg';
import TestimonialImg from './assets/img/testibg.jpg';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/testi1.png';

export const navigation = [
{
    name: 'home',
    href: 'home',
},
{
    name: 'about',
    href: 'about',
},
{
    name: 'products',
    href: 'products',
},
{
    name: 'contact',
    href: 'contact',
},
];

export const hero = {
title: 'Order Mebel Custom',
subtitle:
    'Pesan berbagai model mebel dan furniture sesuai dengan keinginan anda hanya di Alam Karya Furniture',
buttonText: 'Order Sekarang',
};

export const stats = [
{
    value: '20',
    text: 'Tahun Berdiri',
},
{
    value: '99%',
    text: 'Ketepatan Waktu',
},
{
    value: '1000+',
    text: 'Mebel Terjual',
},
{
    value: '100+',
    text: 'Variasi Mebel',
},
];

export const features = {
title: 'Tentang Alam Karya Furniture',
subtitle:
    'Alam Karya Furniture adalah system produksi pemesanan segala jenis mebel custom untuk kebutuhan organisasi maupun personal yang mudah diakses dari mana saja dan kapan saja.',
buttonText: 'Show Now',
feature2: {
    title: 'Pesan Mebel Custom',
    subtitle:
    'Order Sekarang',
},
};

export const newInStore = {
title: 'Best Seller',
link: 'Geser',
icon: <IoIosArrowRoundForward />,
products: [
    {
    name: 'kursi',
    image: <Kursi />,
    },
    {
    name: 'meja',
    image: <Meja />,
    },
    {
    name: 'alat masak',
    image: <AlatMasak />,
    },
    {
    name: 'meja kecil',
    image: <Meja2 />,
    },
],
};

export const products = {
    title: 'Produk Kami',
    subtitle:
        'Produk yang kami buat berasal dari bahan yang berkualitas, anda dapat memesan produk custom sesuai keinginan anda',
    pages: [
        {
        productList: [
            {
            image: <Product1Img />,
            icon: <IoMdAddCircle />,
            name: 'Meja',
            desc: 'Deskripsi',
            },
            {
            image: <Product2Img />,
            icon: <IoMdAddCircle />,
            name: 'Kursi',
            desc: 'Deskripsi',
            },
            {
            image: <Product3Img />,
            icon: <IoMdAddCircle />,
            name: 'Alat Masak',
            desc: 'Deskripsi',
            },
            {
            image: <Product4Img />,
            icon: <IoMdAddCircle />,
            name: 'Cermin',
            desc: 'Deskripsi',
            },
        ],
        },
        {
        productList: [
            {
            image: <Product5Img />,
            icon: <IoMdAddCircle />,
            name: 'Lantai',
            desc: 'Deskripsi',
            },
            {
            image: <Product6Img />,
            icon: <IoMdAddCircle />,
            name: 'Meja Kecil',
            desc: 'Deskripsi',
            },
        ],
        },
    ],
};

export const testimonial = {
    title: 'Client Testimonial',
    image: <TestimonialImg />,
    persons: [
        {
        avatar: <Avatar1Img />,
        name: 'Fajar',
        occupation: 'Programmer',
        message:
            '“Bagus bagus produknya.”',
        },
        {
        avatar: <Avatar2Img />,
        name: 'Ikhsan',
        occupation: 'Designer',
        message:
            '“Puas sama hasilnya, insyaallah order mebel disini lagi.”',
        },
        {
        avatar: <Avatar3Img />,
        name: 'Kaisa Luqman',
        occupation: 'Pengusaha',
        message:
            '“Rekomen banget sih, hasilnya rapi, bagus, sesuai orderan pokoknya.”',
        },
    ],
};

export const newsletter = {
title: 'Get more discount Off your order',
subtitle: 'Join our mailing list',
placeholder: 'Your email address',
buttonText: 'Shop Now',
};

export const footer = {
social: [
    {
    icon: <IoLogoInstagram />,
    link : 'https://instagram.com/alamkarya_furniture?igshid=NTc4MTIwNjQ2YQ==',
    },
    {
    icon: <IoLogoWhatsapp />,
    link : 'https://wa.me/6281228878554',
    },
    {
    icon: <IoLogoFacebook />,
    link : 'https://www.facebook.com/photo.php?fbid=105826375843674&set=a.105826392510339&type=3&mibextid=qC1gEa',
    },
]
};