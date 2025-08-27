import React from "react";

/** Responsive <img> that auto-uses "(mob)" assets on small screens.
 * Place images in public/assets/images/ and pass paths like "assets/images/icon.svg".
 * If you don't have a (mob) file, set mobPath=path to reuse desktop.
 */
const toMob = (p) => p.replace(/(\.\w+)$/, "(mob)$1");
const abs = (p) => (p?.startsWith("/") ? p : `/${p || ""}`);

export default function RImg({
  path,
  mobPath,
  alt = "",
  className = "",
  imgProps = {},
  mobileMedia = "(max-width: 1023px)",
}) {
  const desktop = abs(path);
  const mobile = abs(mobPath || toMob(path));
  return (
    <picture className={className}>
      <source media={mobileMedia} srcSet={mobile} />
      <img src={desktop} alt={alt} {...imgProps} />
    </picture>
  );
}
