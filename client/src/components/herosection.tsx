import Button from "./button";

function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">

      {/* Background Glow */}
      <div
        className="
        absolute
        top-20
        left-20
        w-72
        h-72
        bg-blue-200
        rounded-full
        blur-3xl
        opacity-40
        "
      ></div>


      {/* Hero Content */}
      <div className="relative max-w-3xl">

        <h2
            className="text-7xl leading-none"
            style={{fontFamily:"Archetype Bayer"}}
            >

            Track Every
            <br/>

            <span className="text-[#8FB3C1]">
            Application.
            </span>

            </h2>


        <p className="
            mt-8
            text-xl
            text-slate-300
            max-w-xl
            mx-auto
            leading-relaxed
            ">
            Never lose track of interviews, offers,
            or follow-ups. Keep your entire job search
            organized in one place.
            </p>


        <div className="mt-8 flex justify-center gap-4">

          <Button>
            Get Started
          </Button>


          <Button variant="secondary">
            View Demo
          </Button>

        </div>

      </div>


{/* Features Section */}
<div className="relative mt-10 w-full max-w-4xl">

  <div className="flex justify-center gap-4 flex-wrap">

    <FeatureCard
      icon="📋"
      title="Track Applications"
      text="Save every application in one organized workspace."
    />

    <FeatureCard
      icon="📅"
      title="Interview Calendar"
      text="Keep track of interviews and important follow-ups."
    />

    <FeatureCard
      icon="🚀"
      title="Career Progress"
      text="Monitor your journey from application to offer."
    />

  </div>

</div>

      {/* Second Glow */}
      <div
        className="
        absolute
        bottom-10
        right-20
        w-70
        h-70
        bg-indigo-200
        rounded-full
        blur-3xl
        opacity-40
        "
      ></div>


    </section>
  );
}


function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        w-72
        rounded-3xl
        bg-white/10
        backdrop-blur-xl
        border
        border-white/10
        p-8
        transition-all
        duration-300
        hover:-translate-y-3
        hover:bg-white/15
        hover:border-[#5C7C89]
        hover:shadow-2xl
      "
    >

      <div className="text-5xl mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="text-slate-300 mt-4 leading-relaxed">
        {text}
      </p>

    </div>
  );
}


export default HeroSection;