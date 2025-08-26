import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-dvh bg-[url(/bg2.jpg)] bg-no-repeat bg-center bg-cover bg-fixed">
      {/* Hero Section */}
      <section className="min-h-dvh bg-black/40 flex items-center justify-center">
        <div className="lg:max-w-4xl max-lg:p-3 space-y-10">
          <h1 className="text-white text-center md:text-4xl text-3xl lg:text-6xl font-extrabold">
            Welcome to <span className="italic text-yellow-500">InkPress</span>
          </h1>
          <p className="text-gray-200 text-center text-xl font-semibold">
            A digital hub where we share book reviews. Designed for book lovers
            to discover, review, and share their favourite reads. Whether you
            are a casual reader or a bookworm. InkPress lets you track books you
            have read, are reading and want to read. Write, read, and share
            honst reviews from a pasionate comunity.
          </p>

          <div className="flex max-md:flex-col items-center justify-center gap-10">
            <Link
              href={"/auth/signin"}
              className="bg-yellow-600 text-white px-10 py-5 rounded-md text-xl font-bold hover:bg-yellow-700 transition-colors duration-300 max-md:w-full text-center"
            >
              Get Started
            </Link>
            <Link
              href={"/about"}
              className="border border-gray-200 px-10 py-5 text-xl font-bold rounded-md bg-white text-black hover:bg-gray-200 transition-colors duration-300 max-md:w-full text-center"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-yellow-600 italic">InkPress</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-4">Track Your Reads</h3>
              <p className="text-gray-600">
                Keep a personal library of books you’ve read, are currently
                reading, and plan to read next.
              </p>
            </div>
            <div className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-4">Honest Reviews</h3>
              <p className="text-gray-600">
                Discover authentic reviews from passionate readers who share
                their true thoughts without filters.
              </p>
            </div>
            <div className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-4">Join a Community</h3>
              <p className="text-gray-600">
                Connect with fellow book lovers, exchange ideas, and grow your
                love for reading together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-2">1. Sign Up</h3>
              <p className="text-gray-600">
                Create your free account and join a growing community of
                bookworms.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-2">2. Explore</h3>
              <p className="text-gray-600">
                Browse trending books, discover hidden gems, and find your next
                read.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-2">3. Share</h3>
              <p className="text-gray-600">
                Post reviews, track your progress, and connect with fellow
                readers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Loved by Readers Everywhere
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-gray-600 italic">
                "InkPress helped me rediscover my love for reading. I've found
                amazing recommendations!"
              </p>
              <span className="block mt-4 font-bold">— Sarah L.</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-gray-600 italic">
                "Finally a place where reviews feel real and trustworthy. A
                must-have for every reader."
              </p>
              <span className="block mt-4 font-bold">— Daniel M.</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-gray-600 italic">
                "I love the tracking feature! I can see my yearly reading
                progress at a glance."
              </p>
              <span className="block mt-4 font-bold">— Priya K.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with InkPress
          </h2>
          <p className="mb-6 text-lg">
            Get the latest book reviews, reading tips, and community news
            delivered straight to your inbox.
          </p>
          <form className="flex max-md:flex-col gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md text-black w-full md:w-80 border border-gray-200"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md font-bold hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Start Your Reading Journey Today
        </h2>
        <Link
          href="/auth/signin"
          className="bg-yellow-600 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-yellow-700 transition"
        >
          Join InkPress
        </Link>
      </section>
    </main>
  );
}