import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import KeysBenefit from "@/components/KeysBenefit";
import ChokoCore from "@/components/ChokoCore";
import AbroadProgram from "@/components/AbroadProgram";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export default function Home() {
  const words = [
    {
      text: "CHOKO",
      className: "",
    },
    {
      text: "chào",
    },
    {
      text: "mừng",
    },
    {
      text: "phụ",
    },
    {
      text: "huynh",
    },
    {
      text: "và",
    },
    {
      text: "học",
    },
    {
      text: "sinh",
    },
  ];
  return (
    <>
      <div className="relative h-screen w-full">
        {/* Hình ảnh làm nền */}
        <img
          src="/bg-image.jpg"
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Lớp phủ đen mờ */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Nội dung hiển thị trên lớp phủ */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <TypewriterEffectSmooth words={words} />
        </div>
      </div>

      {/* <div className="w-full h-screen bg-fuchsia-200 overflow-hidden m-0 p-0">
        <Carousel className="w-full h-full  m-0 p-0">
          <CarouselContent className="w-full h-full m-0 p-0">
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index} className="w-full h-full m-0 p-0">
                <Card className="w-full h-full p-0 m-0">
                  <CardContent className="flex items-center justify-center w-full h-full p-0 m-0">
                    <div className="w-full h-full relative">
                      <img
                        src={`/mua-dong-${index + 1}.jpg`}
                        alt={`Carousel Item ${index + 1}`}
                        className="object-cover w-full h-full"
                        style={{ objectPosition: 'center' }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div> */}
      <div className="lg:p-10 sm:mt-10">
        <ChokoCore />
      </div>
      <div>
        <KeysBenefit />
      </div>
      <div>
        <AbroadProgram />
      </div>
    </>
  );
}
