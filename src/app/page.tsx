// import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
// import { Card, CardContent } from "@/components/ui/card";
import KeysBenefit from "@/components/KeysBenefit";
import ChokoCore from "@/components/ChokoCore";
import AbroadProgram from "@/components/AbroadProgram";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Course from "@/components/Course";
import Head from "next/head";
import Review from "@/components/Review";
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
      <Head>
        <title>Trang chủ - Choko</title> {/* Thêm title cho trang */}
        <meta name="description" content="Học Tiếng Nhật Online - Du Học Nhật Bản, Học Tiếng Nhật Quy Nhơn." /> {/* Thêm mô tả */}
        <meta name="robots" content="index, follow" /> {/* Thêm meta robots */}
        <link rel="icon" href="/favicon.ico" /> {/* Favicon */}
        <meta property="og:title" content="Choko - Khóa học tiếng Nhật và văn hóa Nhật Bản Quy Nhơn" /> {/* Open Graph Title */}
        <meta property="og:description" content="Tìm hiểu các khóa học tiếng Nhật online, du học Nhật Bản, và học tiếng Nhật tại Quy Nhơn với phương pháp giảng dạy hiệu quả, giúp bạn nhanh chóng đạt được mục tiêu học tập." /> {/* Open Graph Description */}
        <meta property="og:image" content="/chokoLogo2.png" /> {/* Open Graph Image */}
        <meta property="og:url" content="https://www.yourwebsite.com" /> {/* Open Graph URL */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Khóa Học Tiếng Nhật Quy Nhơn Online",
              "description": "Khóa học tiếng Nhật dành cho người mới bắt đầu, học từ cơ bản đến nâng cao.",
              "provider": {
                "@type": "Organization",
                "name": "Trung Tâm Học Tiếng Nhật"
              },
              "courseMode": "Online",
              "educationalCredentialAwarded": "Chứng chỉ",
              "url": "https://yourdomain.com/khoa-hoc-tieng-nhat-online"
            }
          `}
        </script>
      </Head>
      <div className="relative h-screen w-full">
        <img
          src="/bg-image.jpg"
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
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
      <Course />
      <div className="overflow-hidden">
        <AbroadProgram />
      </div>

      <div className="">
        <Review />
      </div>
    </>
  );
}
