import AuthForm from "@/components/AuthForm";
import TestimonialsScroller from "@/components/TestimonialsScroller";

const Layout = async () => {
  return (
    <main className="h-screen flex">
      {/* Left side: AuthForm, centered */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-r from-white to-blue-100">
        <div className="max-w w-full p-2">
          <div className="ml-10">
            <img src="lazylines.png" alt="logo" width={40} height={40} />
            <h1 className="text-2xl font-bold text-black mb-6">Lazy Lines</h1>
            <h3 className="text-l text-black mb-6">
              <p>Start your 7-day free trial.</p>
            </h3>
          </div>

          <AuthForm />
        </div>
      </div>

      <div className="hidden md:block md:w-1/2 h-screen">
        <TestimonialsScroller />
      </div>
    </main>
  );
};

export default Layout;
