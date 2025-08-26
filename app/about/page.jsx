import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-white">
      <section className="relative bg-[url(/bg2.jpg)] bg-cover bg-center bg-fixed">
        <div className="bg-black/60 py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            About <span className="text-yellow-500 italic">InkPress</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Where stories meet readers. Built for book lovers, by book lovers.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At <span className="font-semibold">InkPress</span>, our mission is
            simple: to create a digital home for book lovers to connect, share,
            and celebrate the power of stories. We believe books have the power
            to transform lives, and our goal is to make discovering and sharing
            them more meaningful.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/bg2.jpg"
            alt="Our Story"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              InkPress began with a simple idea: What if readers had a space
              where reviews felt genuine, and tracking books was effortless? We
              wanted to build more than just a review site — we envisioned a
              community where curiosity, passion, and trust drive meaningful
              conversations around books.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From a small group of passionate readers, InkPress has grown into
              a platform where thousands discover and share their next favorite
              read every day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">Authenticity</h3>
              <p className="text-gray-600">
                Every review is an honest reflection. No filters, no fake hype —
                just real readers sharing real thoughts.
              </p>
            </div>
            <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-gray-600">
                InkPress is built around people. We value respect, dialogue, and
                the connections books create between us.
              </p>
            </div>
            <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">Passion</h3>
              <p className="text-gray-600">
                We live and breathe books. Passion fuels every page we read, and
                every line of InkPress we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our Growing Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-4xl font-extrabold text-yellow-600">50K+</h3>
              <p className="text-gray-600 mt-2">Books Tracked</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-4xl font-extrabold text-yellow-600">20K+</h3>
              <p className="text-gray-600 mt-2">Reviews Shared</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-4xl font-extrabold text-yellow-600">10K+</h3>
              <p className="text-gray-600 mt-2">Readers Connected</p>
            </div>
          </div>
          <p className="text-gray-600 mt-8 max-w-3xl mx-auto">
            These numbers represent more than stats — they represent real
            connections, genuine reviews, and a thriving community of readers
            who believe in the joy of sharing books.
          </p>
        </div>
      </section>

      <section className="bg-yellow-600 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Be Part of the Story
        </h2>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
          InkPress is more than a platform — it’s a community. Join us and help
          shape the future of book discovery and reviews.
        </p>
        <Link
          href="/auth/signin"
          className="bg-white text-yellow-600 px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-200 transition"
        >
          Join InkPress
        </Link>
      </section>
    </main>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 35a84ddf958dc77eb401656c0e8cb39f215ba94c
