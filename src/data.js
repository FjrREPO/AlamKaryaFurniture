import {
    IoLogoFacebook,
    IoLogoWhatsapp,
    IoLogoInstagram,
    IoIosArrowRoundForward,
} from 'react-icons/io';

import Kursi from './assets/img/kursi.jpg';
import Meja from './assets/img/products/meja.jpg';
import Meja2 from './assets/img/products/mejakecil.jpg';
import AlatMasak from './assets/img/products/alatmasak.jpg';
import TestimonialImg from './assets/img/testibg.jpg';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/testi1.png';

export const navigation = [
{
    name: 'home',
    href: 'home',
}
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
    link : 'https://www.facebook.com/profile.php?id=100092489348318&mibextid=LQQJ4d',
    },
]
};