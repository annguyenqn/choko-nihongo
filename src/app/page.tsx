import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import KeysBenefit from "@/components/KeysBenefit";
import ChokoCore from "@/components/ChokoCore";
import AbroadProgram from "@/components/AbroadProgram";
export default function Home() {
  return (
    <>
      <header>
        <nav className="bg-[#fff0db] border-gray-200 px-4 lg:px-6 shadow-lg">
          <div className="flex justify-between items-center mx-auto max-w-screen-xl bg-[#fff0db] h-24">

            {/* Logo */}
            <a href="/" className="flex items-center">
              <img src="/choko-logo.jpg" className="mr-3 h-24" alt="choko logo" />
            </a>

            {/* Menu Navigation */}
            <div className="hidden lg:flex justify-between items-center w-full space-x-6 lg:space-x-10">
              <ul className="flex flex-wrap ml-10 font-medium lg:flex-row lg:space-x-10">
                {['Trang Chủ', 'Về Chúng Tôi', 'Du học Nhật Bản', 'Học Tiếng Nhật', 'Liên Hệ'].map((item, index) => (
                  <li key={index} className="group">
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-black font-bold rounded lg:bg-transparent lg:text-black lg:p-0 group-hover:text-[#614231] transition-all duration-300 p-2 group-hover:font-bold"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Nút Tư vấn ngay */}
              <div className="flex items-center">
                <a
                  href="#"
                  className="bg-[#815c47] hover:bg-[#7a5545] font-semibold focus:ring-4 text-white focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-3 transition-all duration-300 hover:scale-105 p-2 hover:rounded-lg"
                >
                  Tư Vấn ngay
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="w-full overflow-hidden m-0 p-0">
        <Carousel className="w-full h-[650px]  m-0 p-0">
          <CarouselContent className="w-full h-full m-0 p-0">
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index} className="w-full h-full m-0 p-0">
                <Card className="w-full h-full p-0 m-0">
                  <CardContent className="flex items-center justify-center w-full h-full p-0 m-0">
                    <div className="w-full h-full relative">
                      <img
                        src={`/carousel-image-${index + 1}.webp`}
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
      </div>
      <div className="lg:p-10">
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
