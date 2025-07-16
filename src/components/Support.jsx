import React from "react";

const supportData = [
  {
    heading: "What information do we collect?",
    content: [
      "Dolor enim eu tortor urna sed. Aliquam vestibulum, nulla odio nisi vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.",
      "Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.",
      "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.",
    ],
  },
  {
    heading: "How do we use your information?",
    content: [
      "Dolor enim eu tortor urna sed. Aliquam vestibulum, nulla odio nisi vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.",
      "Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque.",
    ],
  },
  {
    heading: "Do we use cookies and other tracking technologies?",
    content: [
      "Pharetra magna ac placerat vestibulum lectus mauris ultrices. Amet dictum sit amet justo donec enim diam vulputate. Facilisis sed odio morbi quis commodo odio. Risus quis varius quam quisque id diam vel.",
    ],
  },
  {
    heading: "How long do we keep your information?",
    content: [
      "Amet dictum sit amet justo donec enim diam vulputate. Facilisis sed odio morbi quis commodo odio. Risus quis varius quam quisque id diam vel.",
    ],
  },
  {
    heading: "How do we keep your information safe?",
    content: [
      "Amet dictum sit amet justo donec enim diam vulputate. Facilisis sed odio morbi quis commodo odio. Risus quis varius quam quisque id diam vel.",
    ],
  },
  {
    heading: "What are your privacy rights?",
    content: [
      "Pharetra magna ac placerat vestibulum lectus mauris ultrices. Amet dictum sit amet justo donec enim diam vulputate. Facilisis sed odio morbi quis commodo odio.",
    ],
  },
  {
    heading: "How can you contact us about this policy?",
    content: [
      "1. Lorem ipsum dolor sit amet consectetur.",
      "2. Nulla facilisi morbi tempus iaculis urna.",
      "3. Sed lectus vestibulum mattis ullamcorper.",
    ],
  },
];

const Support = () => {
  return (
    <div className="px-6 sm:px-10 md:px-20 lg:px-32 py-10 text-[#212121] font-[Inter]">
      {/* Title */}
      <h1 className="text-3xl font-semibold leading-[38px] text-center  text-[#181375] inline-block mb-6">
        Support
      </h1>

      {/* Paragraph Top Section */}
      <div className="text-sm text-gray-600 space-y-4 mb-8">
        <p>
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis.
        </p>
        <p>
          Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor.
        </p>
      </div>

      {/* FAQ Sections */}
      <div className="space-y-10">
        {supportData.map((item, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-semibold text-[#181375] mb-2">{item.heading}</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              {item.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
