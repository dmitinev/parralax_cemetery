const isMobile = {
  Android: () => {
    return navigator.userAgent.match(/Android/i)
  },
  BlackBerry: () => {
    return navigator.userAgent.match(/BlackBerry/i)
  },
  IOS: () => {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
  },
  OperaMini: () => {
    return navigator.userAgent.match(/Opera Mini/i)
  },
  WindowsMobile: () => {
    return navigator.userAgent.match(/IEMobile/i)
  },
  any: () => {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.IOS() ||
      isMobile.OperaMini() ||
      isMobile.WindowsMobile()
    );
  }
};

export default isMobile;