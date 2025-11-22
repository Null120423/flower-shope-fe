import Title from "../ui/Title";

export default function Partners() {
  const partners = [
    {
      logo: "https://seaproperty.vn/wp-content/uploads/2025/03/Gladia-by-the-Waters-2.jpg",
      name: "Gladia by the Waters",
      description:
        "Dự án biệt thự sang trọng bên hồ nước của Khang Điền, nổi bật với không gian sống xanh và tiện ích cao cấp.",
    },
    {
      logo: "https://masterigrand-view.com/wp-content/uploads/2024/11/logo-masteri-grand-view-1400x745.png",
      name: "Masteri Grand View - The Global City",
      description:
        "Dự án cao cấp thuộc khu đô thị The Global City, mang đến tầm nhìn toàn cảnh và chuẩn sống quốc tế từ Masterise Homes.",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQelpycXXOu-R25VCM6ETxoBw5FVm1PQHUeHw&s",
      name: "LUMIÈRE Midtown",
      description:
        "Tọa lạc tại The Global City, LUMIÈRE Midtown là dự án căn hộ cao cấp với thiết kế ánh sáng hiện đại và video banner ấn tượng.",
    },
    {
      logo: "https://masterisehomes.com/the-global-city/sites/default/files/2025-02/SOLA%20Logo%20-%20R2%20-%20251802-03%20%282%29.png",
      name: "Sola - Đảo Ánh Dương",
      description:
        "Khu biệt thự nghỉ dưỡng trong lòng The Global City, nơi giao hòa giữa thiên nhiên, ánh sáng và không gian sống sang trọng.",
    },
    {
      logo: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/452145974_505942442008956_6705839323282242519_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHhyLuNtjaXmhlN_Dx_Gl30PuxvOoAq8gI-7G86gCryAmjbzerTMR2op5SGSMlFOe6p5-ptx-O0JjTgYlwTsCjq&_nc_ohc=wrlQDLhhx7IQ7kNvwFE617_&_nc_oc=AdlJ2orXV682ZawQO7sdCtISAR7HJfarWdqt8-4l8OJV5CyWD1rizJo9BRdbK4xELDM&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=xOzbCDyblOD6bAXbl4bahw&oh=00_AfRPpAO4dbYCDpU8-ByoAhWbU9hNRNh2FUgdN1OxJOH91w&oe=68879780",
      name: "SOHO - The Global City",
      description:
        "Khu phức hợp SOHO sôi động tại The Global City, kết hợp phong cách sống hiện đại và năng động dành cho thế hệ trẻ.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full mx-auto flex-col flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Title title="Đối tác tin cậy" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tôi hợp tác với các tổ chức uy tín để đảm bảo chất lượng dự án tốt
            nhất
          </p>
        </div>

        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pb-4 justify-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group text-center w-full scale-95 p-4 shadow-md rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 flex-shrink-0"
            >
              <div className="rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {partner.logo && (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-16 h-16 text-white rounded-lg"
                  />
                )}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-gray-600 text-sm">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
