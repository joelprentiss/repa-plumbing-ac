import { useState } from 'react'
import {
  AirVent,
  Building2,
  CheckCircle2,
  ChevronRight,
  Droplets,
  Flame,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Star,
  ThermometerSun,
  Truck,
  Wrench,
  X,
} from 'lucide-react'

const phone = '512-859-2581'
const phoneHref = 'tel:5128592581'
const emails = ['britni.repaplumbing@gmail.com', 'gerry.repaplumbing@gmail.com']

const navItems = [
  ['Home', 'home'],
  ['Services', 'services'],
  ['Reviews', 'reviews'],
  ['About', 'about'],
  ['Contact', 'contact'],
]

const trustCards = [
  ['Since 1964', 'Serving Williamson and surrounding counties.', ShieldCheck],
  ['4.7 Rating', 'Based on 15 Google reviews.', Star],
  ['Licensed Service', 'Mechanical #M4828 and AC #TACLB 2373C.', CheckCircle2],
  ['Residential & Commercial', 'Plumbing, HVAC, utilities, and service work.', Building2],
]

const plumbingServices = [
  ['Water Leaks', 'Help locating and repairing water leaks before they cause larger damage.', Droplets],
  ['Drain Cleaning', 'Drain cleaning service for common clogs and flow problems.', Wrench],
  ['Water Heater Replacement', 'Replacement and service support for residential and commercial water heaters.', ThermometerSun],
  ['Rheem Water Heaters', 'Water heater replacement options including Rheem systems.', ShieldCheck],
  ['Water Lines', 'Water line service, repair, and installation support.', Droplets],
  ['Gas Lines', 'Gas line service for residential and commercial property needs.', Flame],
  ['Water Taps', 'Water tap service and utility-related plumbing work.', Wrench],
]

const hvacServices = [
  ['Residential HVAC', 'Heating and cooling service for homeowners and residential properties.', AirVent],
  ['Commercial HVAC', 'HVAC support for businesses and commercial properties.', Building2],
  ['A/C Service', 'Air conditioning service for Central Texas heat.', ThermometerSun],
  ['Heating Service', 'Heating support for seasonal comfort and system performance.', Flame],
]

const utilityServices = [
  ['Septic Systems', 'Septic system service support for rural and local properties.', Droplets],
  ['Sewer Taps', 'Sewer tap and utility-related plumbing work.', Wrench],
  ['Minor City Utilities', 'Minor city utility service work.', Building2],
  ['Lift Pumps', 'Lift pump service and related plumbing support.', AirVent],
  ['Grease Traps', 'Grease trap service for applicable commercial needs.', ShieldCheck],
  ['Backhoe Service', 'Backhoe support for plumbing, utility, and site work.', Truck],
  ['Hoe Ramming', 'Hoe ramming service for tougher excavation or site conditions.', Wrench],
]

const reviewThemes = [
  ['Fair Rates', 'Customers mention fair pricing and honest service.'],
  ['Friendly Staff', 'Customers mention helpful, friendly people.'],
  ['Good Communication', 'Customers mention that the office staff communicates well.'],
  ['Quick Response', 'Customers mention timely service and punctuality.'],
  ['Knowledgeable Technicians', 'Customers mention helpful and knowledgeable service.'],
]

function ButtonLink({ href, children, variant = 'primary', className = '' }) {
  const classes =
    variant === 'secondary'
      ? 'border border-slate-300 bg-white text-slate-950 hover:border-slate-400 hover:bg-slate-50'
      : 'bg-red-700 text-white shadow-lg shadow-red-900/15 hover:bg-red-800'

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-base font-bold transition ${classes} ${className}`}
    >
      {children}
    </a>
  )
}

function SectionHeading({ title, children, align = 'left' }) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-lg leading-8 text-slate-600">{children}</p>}
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Repa Plumbing and A/C home">
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-950 text-white">
            <Wrench size={24} strokeWidth={2.5} />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-black tracking-tight text-slate-950">Repa Plumbing & A/C</span>
            <span className="block text-xs font-bold uppercase tracking-[0.16em] text-red-700">Granger, Texas</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="text-sm font-bold text-slate-700 transition hover:text-red-700">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`mailto:${emails[0]}`} className="text-sm font-bold text-slate-600 hover:text-red-700">
            Email Us
          </a>
          <ButtonLink href={phoneHref}>
            <Phone size={18} />
            Call Now
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-slate-950 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2 py-3" aria-label="Mobile navigation">
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-md px-3 py-3 text-base font-bold text-slate-800 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <ButtonLink href={phoneHref} className="w-full">
            <Phone size={18} />
            Call Now
          </ButtonLink>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white">
      <img
        src="/images/hero-service.png"
        alt="A service technician working with mechanical equipment"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(15,23,42,0.98)_0%,rgba(15,23,42,0.9)_42%,rgba(15,23,42,0.32)_100%)]" />
      <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Plumbing & A/C Service in Granger, TX Since 1964
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
            Serving Williamson and surrounding counties with residential, commercial, plumbing, HVAC, water line, gas
            line, septic, and utility service.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={phoneHref} className="sm:min-w-52">
              <Phone size={19} />
              Call {phone}
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary" className="sm:min-w-44">
              Request Service
              <ChevronRight size={19} />
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {[
              'Serving the area since 1964',
              '4.7 Google rating',
              'Plumbing, HVAC & utility services',
              'Licensed mechanical and A/C contractor',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-100">
                <CheckCircle2 className="shrink-0 text-red-400" size={20} />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-sm">
          <div className="overflow-hidden rounded-md bg-white">
            <img
              src="/images/hero-service.png"
              alt="HVAC and utility service equipment"
              className="h-72 w-full object-cover sm:h-96"
            />
            <div className="grid gap-3 p-5 text-slate-950 sm:grid-cols-2">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.14em] text-red-700">Local Office</p>
                <p className="mt-1 font-bold">105 N Granger St.</p>
                <p className="text-slate-600">Granger, TX 76530</p>
              </div>
              <div className="rounded-md bg-slate-100 p-4">
                <p className="text-sm font-black uppercase tracking-[0.14em] text-slate-600">License</p>
                <p className="mt-1 font-bold">Mechanical #M4828</p>
                <p className="font-bold">AC #TACLB 2373C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4">
        {trustCards.map(([title, text, Icon]) => (
          <article key={title} className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
            <Icon className="text-red-700" size={25} strokeWidth={2.3} />
            <h3 className="mt-4 text-xl font-black text-slate-950">{title}</h3>
            <p className="mt-2 leading-7 text-slate-600">{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ title, text, icon: Icon }) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-100 text-red-700">
        <Icon size={22} strokeWidth={2.2} />
      </div>
      <h3 className="mt-5 text-xl font-black text-slate-950">{title}</h3>
      <p className="mt-2 leading-7 text-slate-600">{text}</p>
    </article>
  )
}

function ServicesOverview() {
  return (
    <section id="services" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Plumbing, HVAC & Utility Services">
          Repa Plumbing & A/C provides residential and commercial service across Williamson and surrounding counties.
          From water leaks and water heaters to HVAC systems, gas lines, septic work, and utility services, the team
          handles a wide range of practical service needs.
        </SectionHeading>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {[
            ['Plumbing Service', 'Leaks, drains, water heaters, water lines, gas lines, and taps.', Droplets],
            ['HVAC Service', 'Residential and commercial heating and air conditioning support.', AirVent],
            ['Utility & Site Work', 'Septic, sewer taps, minor city utilities, lift pumps, and backhoe support.', Truck],
          ].map(([title, text, Icon]) => (
            <div key={title} className="rounded-md bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <Icon className="text-red-700" size={30} />
              <h3 className="mt-5 text-2xl font-black text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceGroup({ title, services, dark = false }) {
  return (
    <section className={`${dark ? 'bg-slate-950 text-white' : 'bg-slate-50'} px-4 py-16 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <h2 className={`text-3xl font-black tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-slate-950'}`}>
          {title}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([serviceTitle, text, Icon]) => (
            <ServiceCard key={serviceTitle} title={serviceTitle} text={text} icon={Icon} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section id="reviews" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SectionHeading title="What Customers Mention">
              Review themes reflect provided customer summary details, without invented names or fake testimonials.
            </SectionHeading>
            <div className="mt-6 inline-flex flex-wrap items-center gap-3 rounded-md bg-slate-950 px-5 py-4 text-white">
              <span className="flex text-red-400" aria-label="4.7 stars">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} size={18} fill="currentColor" />
                ))}
              </span>
              <span className="font-black">4.7 stars from 15 Google reviews</span>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reviewThemes.map(([title, text]) => (
              <article key={title} className="rounded-md border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-xl font-black text-slate-950">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceArea() {
  return (
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading title="Serving Williamson and Surrounding Counties">
            Based in Granger, Texas, Repa Plumbing & A/C serves customers throughout Williamson County and nearby areas
            with plumbing, HVAC, septic, utility, and general service needs.
          </SectionHeading>
          <div className="mt-8 flex flex-wrap gap-3">
            {['Granger, TX', 'Williamson County', 'Surrounding counties'].map((area) => (
              <span key={area} className="rounded-md border border-slate-300 bg-white px-4 py-3 font-bold text-slate-800">
                {area}
              </span>
            ))}
          </div>
        </div>
        <div className="relative min-h-80 overflow-hidden rounded-md bg-slate-900 p-6 text-white shadow-lg">
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:38px_38px]" />
          <div className="relative flex h-full min-h-80 flex-col justify-between">
            <div className="max-w-sm">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-red-300">Service Area</p>
              <h3 className="mt-3 text-3xl font-black">Central Texas local service coverage</h3>
            </div>
            <div className="relative mt-10 h-40">
              <div className="absolute left-[42%] top-[35%] h-24 w-24 rounded-full border-4 border-red-400 bg-red-500/20" />
              <div className="absolute left-[48%] top-[43%] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md bg-red-700 shadow-xl">
                <MapPin />
              </div>
              <div className="absolute bottom-2 left-4 rounded-md bg-white px-4 py-3 text-sm font-black text-slate-950">
                Granger, TX
              </div>
              <div className="absolute right-4 top-2 rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm font-bold">
                Williamson County
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <img
          src="/images/shop-truck.png"
          alt="A technician preparing tools for service work"
          className="h-80 w-full rounded-md object-cover shadow-lg lg:h-[440px]"
        />
        <div>
          <SectionHeading title="A Local Company Serving Central Texas Since 1964">
            Repa Plumbing & A/C has served Williamson and surrounding counties since 1964. Based in Granger, Texas, the
            company provides practical plumbing, HVAC, septic, utility, and service work for residential and commercial
            customers.
          </SectionHeading>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Local roots in Granger',
              'Residential and commercial work',
              'Broad mechanical service capability',
              'Straightforward service communication',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-md bg-slate-50 p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-red-700" size={20} />
                <span className="font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    ['1', 'Call or Request Service', 'Tell the team what plumbing, HVAC, or utility issue you need help with.'],
    ['2', 'Get the Issue Reviewed', 'The team reviews the problem and explains the next step.'],
    ['3', 'Get the Work Handled', 'The service is completed as clearly and professionally as possible.'],
  ]

  return (
    <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">How Service Works</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">A simple path from the first call to the next practical step.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map(([number, title, text]) => (
            <article key={number} className="rounded-md border border-white/15 bg-white/5 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-red-700 text-xl font-black">
                {number}
              </span>
              <h3 className="mt-5 text-2xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text' }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-black text-slate-800">{label}</span>
      <input
        type={type}
        name={name}
        autoComplete={{ name: 'name', phone: 'tel', email: 'email' }[name]}
        className="min-h-12 rounded-md border border-slate-300 bg-white px-4 text-slate-900 outline-none focus:border-red-700 focus:ring-4 focus:ring-red-700/10"
      />
    </label>
  )
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading title="Contact Repa Plumbing & A/C">
            Call, email, or send a service request for plumbing, HVAC, septic, utility, water line, or gas line work.
          </SectionHeading>
          <div className="mt-8 space-y-4 text-slate-700">
            <a href={phoneHref} className="flex items-center gap-3 text-2xl font-black text-red-700">
              <Phone /> {phone}
            </a>
            <p className="flex gap-3 leading-7">
              <MapPin className="mt-1 shrink-0 text-red-700" />
              <span>
                <strong className="text-slate-950">Address:</strong> 105 N Granger St., Granger, TX 76530
                <br />
                <strong className="text-slate-950">Mailing Address:</strong> P.O. Box 308, Granger, TX 76530
              </span>
            </p>
            {emails.map((email) => (
              <a key={email} href={`mailto:${email}`} className="flex items-center gap-3 font-bold text-slate-800 hover:text-red-700">
                <Mail className="text-red-700" /> {email}
              </a>
            ))}
          </div>
          <ButtonLink href={phoneHref} className="mt-8 w-full sm:w-auto">
            <Phone size={19} />
            Call {phone}
          </ButtonLink>
        </div>

        <form
          className="rounded-md border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7"
          onSubmit={(event) => {
            event.preventDefault()
            setSubmitted(true)
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" />
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Email" name="email" type="email" />
            <Field label="Service Needed" name="service" />
            <label className="grid gap-2">
              <span className="text-sm font-black text-slate-800">Residential or Commercial</span>
              <select name="customerType" className="min-h-12 rounded-md border border-slate-300 bg-white px-4 text-slate-900 outline-none focus:border-red-700 focus:ring-4 focus:ring-red-700/10">
                <option>Residential</option>
                <option>Commercial</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-black text-slate-800">Preferred Contact Method</span>
              <select name="contactMethod" className="min-h-12 rounded-md border border-slate-300 bg-white px-4 text-slate-900 outline-none focus:border-red-700 focus:ring-4 focus:ring-red-700/10">
                <option>Phone</option>
                <option>Email</option>
              </select>
            </label>
            <label className="grid gap-2 sm:col-span-2">
              <span className="text-sm font-black text-slate-800">Brief Description of Problem</span>
              <textarea name="description" rows="5" className="rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-red-700 focus:ring-4 focus:ring-red-700/10" />
            </label>
          </div>
          <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-red-700 px-5 font-black text-white shadow-lg shadow-red-900/15 transition hover:bg-red-800">
            Request Service
          </button>
          {submitted ? (
            <p className="mt-4 rounded-md bg-green-50 px-4 py-3 text-sm font-bold leading-6 text-green-800">
              Service request captured on this page. Backend delivery can be connected next.
            </p>
          ) : (
            <p className="mt-4 text-sm leading-6 text-slate-600">
              This form is ready for future backend integration. For now, calling is the fastest way to reach the office.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 px-4 pb-24 pt-12 text-white sm:px-6 lg:px-8 lg:pb-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-black">Repa Plumbing & A/C, Inc.</h2>
          <p className="mt-3 leading-7 text-slate-300">
            Plumbing & A/C service in Granger, TX. Serving Williamson and surrounding counties since 1964.
          </p>
        </div>
        <div>
          <h3 className="font-black">Contact</h3>
          <div className="mt-3 space-y-2 text-slate-300">
            <p><a href={phoneHref} className="hover:text-white">{phone}</a></p>
            {emails.map((email) => (
              <p key={email}><a href={`mailto:${email}`} className="hover:text-white">{email}</a></p>
            ))}
            <p>105 N Granger St., Granger, TX 76530</p>
          </div>
        </div>
        <div>
          <h3 className="font-black">Licenses & Links</h3>
          <p className="mt-3 text-slate-300">Mechanical #M4828</p>
          <p className="text-slate-300">AC #TACLB 2373C</p>
          <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="text-sm font-bold text-slate-300 hover:text-white">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-400">
        Copyright {new Date().getFullYear()} Repa Plumbing & A/C, Inc.
      </p>
    </footer>
  )
}

function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/20 bg-slate-950 p-3 shadow-2xl lg:hidden">
      <a href={phoneHref} className="mx-auto flex min-h-12 max-w-md items-center justify-center gap-2 rounded-md bg-red-700 px-4 font-black text-white">
        <Phone size={19} />
        Call Repa Plumbing & A/C
      </a>
    </div>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ServicesOverview />
        <ServiceGroup title="Plumbing Services" services={plumbingServices} />
        <ServiceGroup title="Residential & Commercial HVAC" services={hvacServices} dark />
        <ServiceGroup title="Septic, Utility & Site Services" services={utilityServices} />
        <Reviews />
        <ServiceArea />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  )
}

export default App
