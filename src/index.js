import LocomotiveScroll from 'locomotive-scroll';


const mainSection = document.querySelector('#main');
const statsSection = document.querySelector('#stats');
const gallerySection = document.querySelector('#gallery');

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});