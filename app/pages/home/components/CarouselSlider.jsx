import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';
import { lowerCaseFirstLetterOfEveryWord } from "@/app/lib/utils";
// ! Add Link hrefs
// TODO: Add Link hrefs
export default function CategoriiesAndCarouselSlider({categories}) {
  return <>
  {/* Categories */}
  <div className="flex justify-around pr-14 pl-24 pt-10" >
  <div className="flex flex-col font-semibold ">
    {categories.map((item,index)=>(
      <div className="flex gap-3" key = {uuidv4()}>
      <Link className="hover:underline"  href={`/pages/home/categories/${lowerCaseFirstLetterOfEveryWord(item)}`} key={uuidv4()}>{item}</Link>
      {index == 0 || index == 1 ? <Link href={`/pages/home/categories/${lowerCaseFirstLetterOfEveryWord(item)}`} key = {uuidv4()} ><img src = "/right_arrow.png" key = {uuidv4()} /></Link> :<div key = {uuidv4()} ></div>}
      </div>
    ))}
  </div>
  {/* Carousel Slider */}
  <Image src={"/slider.png"} width={600} height={0} alt="slider"></Image>
  </div>
  </>;
}
