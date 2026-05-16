import Image from "next/image";

export function VisionSection() {
  return (
    <section className="section bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container-page">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="h-eyebrow">Our Vision</span>
          <h2 className="h-section mt-2 max-w-3xl">
            Building smarter tomorrow together
          </h2>
          <p className="text-muted mt-3 max-w-2xl text-base sm:text-lg">
            วิสัยทัศน์ของ MSB Smart Solutions ในการเชื่อมต่อเทคโนโลยี
            อุตสาหกรรม และความยั่งยืน เพื่อสร้างอนาคตที่ดีกว่า
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-navy-900/10 via-brand-blue/10 to-brand-cyan/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-navy-100 bg-navy-900 shadow-soft">
            <div className="overflow-x-auto">
              <div className="relative min-w-[900px] lg:min-w-0">
                <Image
                  src="/images/vision/boy-vision.png"
                  alt="MSB Smart Solutions vision led by Nattapol Poeam with solution focus areas, company values, and smart technology for a better life"
                  width={1535}
                  height={1024}
                  sizes="(min-width: 1280px) 1180px, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
