/* eslint-disable no-param-reassign */
import fakeBadge from '../../public/icons/fakeBadge.png';
import truthBadge from '../../public/icons/truthBadge.png';
import unverifiableBadge from '../../public/icons/unverifiableBadge.png';
import warningBadge from '../../public/icons/warningBadge.png';

const BADGES = {
  Truth: truthBadge,
  Fake: fakeBadge,
  Warning: warningBadge,
  Unverifable: unverifiableBadge,
} as const;

const readFactchecks = async () => {
  const storageObj = await chrome.storage.local.get();

  return Object.entries(storageObj)
    .filter(([key]) => key.startsWith('fc#'))
    .map((entry) => entry[1]) as { url: string; status: keyof typeof BADGES }[];
};

readFactchecks().then((factchecks) => {
  [...document.getElementsByTagName('a')].forEach((anchor) => {
    const factcheck = factchecks.find((fc) => fc.url === anchor.href);
    if (factcheck) {
      const { width, height } = anchor.getBoundingClientRect();

      anchor.style.position = 'relative';
      const img = document.createElement('img');
      img.src = BADGES[factcheck.status];
      img.style.position = 'absolute';
      anchor.appendChild(img);

      if (width > 50 && height > 50) {
        img.width = 40;
        img.style.top = '5px';
        img.style.right = '5px';
      } else {
        img.style.height = '1rem';
        img.style.right = '0';
        anchor.style.paddingRight = '1.5rem';
      }
    }
  });
});
