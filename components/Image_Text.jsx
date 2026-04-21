import Image from "next/image";

export default function Image_Text({imageName,children}) {
  return (
    <>
    <Image
      src= {imageName}
      alt=""
      width={200}
      height={200}
    />

      {children}
    </>
  );
}