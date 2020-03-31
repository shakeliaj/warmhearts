const isMobile = window.screen.width < 768;
const isTablet = window.screen.width >= 768 && window.screen.width < 1024
const isDesktop = window.screen.width >= 1024;

export { isMobile, isTablet, isDesktop }