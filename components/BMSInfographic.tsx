import Image from "next/image";

export function BMSInfographic() {
  return (
    <section className="section bg-gradient-to-b from-white via-blue-50/40 to-white">
      <div className="container-page">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="h-eyebrow">Nexus BMS Platform</span>
          <h2 className="h-section mt-2 max-w-3xl">
            Smart Building Management — Monitor · Manage · Optimize
          </h2>
          <p className="text-muted mt-3 max-w-2xl text-base sm:text-lg">
            ระบบบริหารจัดการอาคารอัจฉริยะ ที่เชื่อมต่อทุกระบบ ทุกอุปกรณ์
            และทุกผู้ใช้งานในที่เดียว
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-blue/10 via-brand-cyan/10 to-white blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-navy-100 bg-white shadow-soft">
            <Image
              src="/images/platform/nexus-bms-platform.png"
              alt="Nexus BMS Platform infographic showing smart building systems, monitoring capabilities, communication protocols, stakeholders, field devices, and key benefits"
              width={1672}
              height={941}
              sizes="(min-width: 1280px) 1180px, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
