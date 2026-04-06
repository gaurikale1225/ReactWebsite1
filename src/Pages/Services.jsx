import React from "react";

const plants = [
  {
    name: "Balaji Bio Fuels",
    logo: "/img/p1.png",
    address:
      "Gut No.89, Ghosapuri, NH-211 Kumshi Road, Behind RTO Office, Ta.Dist. Beed, Maharashtra-431122",
    phone: "9322165092",
    email: "operation.virtualwhiteflame@gmail.com",
  },
  {
    name: "Virtual White Flame PVT. LTD.",
    logo: "/img/p2.png",
    address:
      "Bodhegoan, Shevgoan, Ahmednagar, Maharashtra 414001",
    phone: "9423390308",
    email: "ananta.zirpe@virtualwhiteflame.com",
  },
  {
    name: "Seva Bio Brikets",
    logo: "path/to/seva-logo.png",
    address:
      "Gat No. 77, at Divate, Post. Ladjalgoan, Tal- Shevgoan Maharashtra 414502",
    phone: "9420950022",
    email: "sevabiobrikets@gmail.com",
  },
  {
    name: "Virtual Green Energy",
    logo: "path/to/vge-logo.png",
    address:
      "Gut no. 666, Tal. Panchayat Samiti Jalna, Nr Jalna, Maharashtra, 431202",
    phone: "7821910054",
    email: "vwfpl.sales@gmail.com",
  },
];

export default function Services() {
  return (
    <section className="bg-[#f7f8f4] py-10 px-5">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-orange-600 mb-10">
        Plants
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {plants.map((plant, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex items-start space-x-4 border-l-4 border-green-600 hover:shadow-lg transition-all duration-300"
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={plant.logo}
                alt={plant.name}
                className="w-16 h-16 object-contain rounded-full bg-[#f4efe9]"
              />
            </div>

            {/* Info */}
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                {plant.name}
              </h3>

              {/* <p className="text-gray-700 flex items-start mb-2">
                <MapPin size={18} className="text-green-600 mr-2 mt-1" />
                {plant.address}
              </p> */}

              {/* <p className="text-gray-700 flex items-center mb-1">
                <Phone size={18} className="text-green-600 mr-2" />
                {plant.phone}
              </p> */}

              {/* <p className="text-gray-700 flex items-center break-all">
                <Mail size={18} className="text-green-600 mr-2" />
                {plant.email}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
