import React from 'react';
import { Link } from 'react-router-dom';
import {
  Palette,
  Users,
  Calendar,
  IndianRupee,
  School,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export default function TalentContestsPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-rose-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative container mx-auto px-6 py-24">

          <div className="max-w-4xl">

            <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur">
              <Sparkles className="mr-2 h-4 w-4" />
              Maharashtra Olympiad Foundation
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Creative Talent
              <br />
              Contests
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-pink-100">
              Discover, nurture and celebrate creativity through Maharashtra
              Olympiad Foundation's Talent Contests. Showcase your artistic
              abilities and compete with students across Maharashtra.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-pink-600 transition hover:scale-105"
              >
                Register Now
              </Link>

              <a
                href="#contests"
                className="rounded-xl border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-pink-600"
              >
                Explore Contests
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Statistics */}

      <section className="container mx-auto px-6 py-16">

        <div className="grid gap-6 md:grid-cols-5">

          <div className="rounded-2xl bg-white p-6 text-center shadow">
            <Palette className="mx-auto mb-3 h-8 w-8 text-pink-600" />
            <h2 className="text-3xl font-bold">1</h2>
            <p className="text-gray-600">Active Contest</p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow">
            <Users className="mx-auto mb-3 h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold">III–X</h2>
            <p className="text-gray-600">Eligible Classes</p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow">
            <IndianRupee className="mx-auto mb-3 h-8 w-8 text-green-600" />
            <h2 className="text-3xl font-bold">125</h2>
            <p className="text-gray-600">Registration Fee</p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow">
            <School className="mx-auto mb-3 h-8 w-8 text-orange-600" />
            <h2 className="text-xl font-bold">Through School</h2>
            <p className="text-gray-600">Submission</p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow">
            <Calendar className="mx-auto mb-3 h-8 w-8 text-red-600" />
            <h2 className="text-xl font-bold">31 Aug</h2>
            <p className="text-gray-600">Last Date</p>
          </div>

        </div>

      </section>


      
      {/* Kalavishkar Details */}

<section className="bg-white py-20">
  <div className="container mx-auto px-6">

    <div className="mb-14 text-center">
      <h2 className="text-4xl font-bold text-gray-900">
        Kalavishkar – Maharashtra Art Talent Contest
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
        Kalavishkar aims to encourage imagination, creativity and artistic
        expression among school students. Participants will prepare a drawing
        or painting based on the prescribed themes and submit it through their
        respective schools.
      </p>
    </div>

    {/* Eligibility */}

    <div className="mb-16">
      <h3 className="mb-8 text-3xl font-bold text-gray-900">
        Eligibility Categories
      </h3>

      <div className="grid gap-6 md:grid-cols-4">

        <div className="rounded-2xl border bg-pink-50 p-6">
          <h4 className="text-xl font-bold text-pink-700">
            Category A
          </h4>
          <p className="mt-2 text-gray-700">
            Classes III & IV
          </p>
          <p className="mt-4 font-medium">
            Theme
          </p>
          <p className="text-gray-600">
            Happy Childhood
          </p>
        </div>

        <div className="rounded-2xl border bg-green-50 p-6">
          <h4 className="text-xl font-bold text-green-700">
            Category B
          </h4>
          <p className="mt-2 text-gray-700">
            Classes V & VI
          </p>
          <p className="mt-4 font-medium">
            Theme
          </p>
          <p className="text-gray-600">
            Nature & Environment
          </p>
        </div>

        <div className="rounded-2xl border bg-blue-50 p-6">
          <h4 className="text-xl font-bold text-blue-700">
            Category C
          </h4>
          <p className="mt-2 text-gray-700">
            Classes VII & VIII
          </p>
          <p className="mt-4 font-medium">
            Theme
          </p>
          <p className="text-gray-600">
            Innovation & Society
          </p>
        </div>

        <div className="rounded-2xl border bg-orange-50 p-6">
          <h4 className="text-xl font-bold text-orange-700">
            Category D
          </h4>
          <p className="mt-2 text-gray-700">
            Classes IX & X
          </p>
          <p className="mt-4 font-medium">
            Theme
          </p>
          <p className="text-gray-600">
            Creative India – Future India
          </p>
        </div>

      </div>
    </div>

    {/* Competition Highlights */}

    <div className="grid gap-8 lg:grid-cols-2">

      <div className="rounded-3xl border p-8">

        <h3 className="mb-6 text-2xl font-bold">
          Competition Highlights
        </h3>

        <ul className="space-y-4 text-gray-700">

          <li>🎨 Drawing / Painting Competition</li>

          <li>📄 A3 or A4 Size Sheet / Canvas</li>

          <li>🖍 Water Colours, Pencil Colours, Oil Paint, Crayons & Sketch Pens Allowed</li>

          <li>🏫 Submission through Participating School</li>

          <li>💰 Registration Fee: ₹125</li>

          <li>📅 Last Date: 31 August 2026</li>

        </ul>

      </div>

      <div className="rounded-3xl border p-8">

        <h3 className="mb-6 text-2xl font-bold">
          Submission Process
        </h3>

        <div className="space-y-4">

          <div className="rounded-xl bg-pink-50 p-4">
            1️⃣ Register through School
          </div>

          <div className="rounded-xl bg-pink-50 p-4">
            2️⃣ Choose Any One Topic
          </div>

          <div className="rounded-xl bg-pink-50 p-4">
            3️⃣ Prepare Your Artwork
          </div>

          <div className="rounded-xl bg-pink-50 p-4">
            4️⃣ Submit to School Coordinator
          </div>

          <div className="rounded-xl bg-pink-50 p-4">
            5️⃣ School Sends Entries to MOF
          </div>

          <div className="rounded-xl bg-pink-50 p-4">
            6️⃣ Evaluation & Awards
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* Awards & Recognition */}

<section className="bg-gray-50 py-20">
  <div className="container mx-auto px-6">

    <div className="mb-14 text-center">
      <h2 className="text-4xl font-bold text-gray-900">
        Awards & Recognition
      </h2>

      <p className="mt-4 text-lg text-gray-600">
        Outstanding participants will be recognized for their creativity and artistic excellence.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-3">

      <div className="rounded-3xl bg-white p-8 shadow-lg text-center">
        <div className="text-6xl mb-4">🏆</div>
        <h3 className="text-2xl font-bold">
          Merit Awards
        </h3>
        <p className="mt-4 text-gray-600">
          First, Second and Third winners will receive Merit Certificates and
          Mementos.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-lg text-center">
        <div className="text-6xl mb-4">🎖️</div>
        <h3 className="text-2xl font-bold">
          Participation Certificate
        </h3>
        <p className="mt-4 text-gray-600">
          Every participant receives a Certificate of Appreciation.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-lg text-center">
        <div className="text-6xl mb-4">🎨</div>
        <h3 className="text-2xl font-bold">
          Creative Excellence
        </h3>
        <p className="mt-4 text-gray-600">
          Showcase your creativity and gain recognition across Maharashtra.
        </p>
      </div>

    </div>

  </div>
</section>


{/* Frequently Asked Questions */}

<section className="bg-white py-20">

  <div className="container mx-auto px-6">

    <div className="text-center mb-14">

      <h2 className="text-4xl font-bold">
        Frequently Asked Questions
      </h2>

      <p className="mt-4 text-gray-600">
        Everything you need to know about the Talent Contest.
      </p>

    </div>

    <div className="mx-auto max-w-4xl space-y-6">

      <div className="rounded-2xl border p-6">
        <h3 className="font-bold text-lg">
          Can students register individually?
        </h3>

        <p className="mt-3 text-gray-600">
          No. Registrations are accepted only through participating schools.
        </p>
      </div>

      <div className="rounded-2xl border p-6">
        <h3 className="font-bold text-lg">
          Can artwork be submitted online?
        </h3>

        <p className="mt-3 text-gray-600">
          No. The completed artwork must be submitted to the School Coordinator,
          who will send it to the Maharashtra Olympiad Foundation.
        </p>
      </div>

      <div className="rounded-2xl border p-6">
        <h3 className="font-bold text-lg">
          Which drawing materials are allowed?
        </h3>

        <p className="mt-3 text-gray-600">
          Water Colours, Oil Paint, Pencil Colours, Crayons and Sketch Pens are
          permitted on A3 or A4 size paper or canvas.
        </p>
      </div>

      <div className="rounded-2xl border p-6">
        <h3 className="font-bold text-lg">
          What is the registration fee?
        </h3>

        <p className="mt-3 text-gray-600">
          ₹125 per participant.
        </p>
      </div>

    </div>

  </div>

</section>


{/* Call To Action */}

<section className="bg-gradient-to-r from-pink-600 via-rose-600 to-orange-500 py-20 text-white">

  <div className="container mx-auto px-6 text-center">

    <h2 className="text-5xl font-bold">
      Ready to Showcase Your Creativity?
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-xl text-pink-100">
      Register through your school and become a part of Maharashtra's biggest
      creative talent platform.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-4">

      <Link
        to="/register"
        className="rounded-xl bg-white px-8 py-4 font-semibold text-pink-600 transition hover:scale-105"
      >
        Register Now
      </Link>

      <Link
        to="/contact"
        className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-pink-600"
      >
        Contact Us
      </Link>

    </div>

  </div>

</section>

      

    </div>
  );
};


