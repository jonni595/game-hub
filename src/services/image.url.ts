import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  const source = url.lastIndexOf(target) + target.length;
  return url.slice(0, source) + "crop/600/400/" + url.slice(source);
};

export default getCroppedImageUrl;
