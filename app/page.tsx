'use client'

import Link from 'next/link'
import { Compass, MapPin, Search, SlidersHorizontal, UserRound, ChevronDown, ArrowUpRight } from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.png-uwI5A8ZNvAMkMsETNQ1r3EmSiqyoOq.webp'

const meetups = [
  { title: '퇴근 후 한강 러닝', category: '운동 · 러닝', place: '반포 한강공원', date: '오늘 19:30', people: '4 / 8명', color: 'sky' },
  { title: '성수 카페에서 책 읽기', category: '취미 · 독서', place: '성수동', date: '토요일 14:00', people: '2 / 5명', color: 'violet' },
  { title: '주말 사진 산책', category: '문화 · 사진', place: '서울숲', date: '일요일 11:00', people: '6 / 10명', color: 'indigo' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8fbff] text-[#17243f]">
      <header className="mx-auto flex h-[82px] max-w-[1320px] items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5" aria-label="이루 홈">
          <img src={logoUrl} alt="이루 로고" className="h-9 w-9 object-contain" />
          <span className="text-[22px] font-bold tracking-[-0.08em]">이루</span>
        </Link>
        <nav className="hidden items-center gap-9 text-[14px] font-medium text-[#74809a] md:flex">
          <Link href="/introduction" className="transition hover:text-[#478bea]">이루 소개</Link>
          <a href="#meetups" className="transition hover:text-[#478bea]">모임 찾기</a>
          <a href="#guide" className="transition hover:text-[#478bea]">이용 안내</a>
        </nav>
        <button className="flex items-center gap-2 rounded-full border border-[#e4eaf5] bg-white px-4 py-2.5 text-sm font-semibold shadow-[0_4px_16px_rgba(59,91,140,0.06)] transition hover:border-[#abd3fb]">
          <UserRound size={16} className="text-[#6a9df2]" /> 로그인
        </button>
      </header>

      <section className="mx-auto max-w-[1320px] px-6 pb-8 pt-14 lg:px-10 lg:pt-20">
        <div className="mb-11 max-w-[610px]">
          <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#6b9cf1]">FIND YOUR PEOPLE</p>
          <h1 className="text-[42px] font-bold leading-[1.17] tracking-[-0.06em] sm:text-[58px]">가볍게 만나고,<br /><span className="gradient-text">함께 이루는</span> 하루</h1>
          <p className="mt-6 text-[16px] leading-7 text-[#8390a9]">내 주변의 취향 맞는 모임을 발견하고<br className="sm:hidden" /> 새로운 사람들과 특별한 순간을 만들어보세요.</p>
        </div>

        <div id="meetups" className="grid gap-5 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
          <section className="rounded-[28px] border border-[#e9eff8] bg-white p-5 shadow-[0_12px_35px_rgba(71,112,170,0.07)] sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <div><h2 className="text-[21px] font-bold tracking-[-0.04em]">모임 찾기</h2><p className="mt-1 text-sm text-[#96a1b6]">지금 내 주변에서 열리는 모임</p></div>
              <button className="rounded-xl border border-[#edf1f7] p-2.5 text-[#7d8aa4] hover:bg-[#f7faff]" aria-label="필터 열기"><SlidersHorizontal size={18} /></button>
            </div>
            <div className="mb-5 flex items-center gap-2 rounded-2xl bg-[#f5f8fc] px-4 py-3.5 text-[#8e9ab0]"><Search size={18} /><span className="text-sm">관심 있는 모임을 검색해보세요</span></div>
            <div className="mb-6 flex gap-2 overflow-x-auto pb-1 text-sm"><button className="shrink-0 rounded-full bg-[#e8f3ff] px-4 py-2 font-semibold text-[#438de9]">전체</button><button className="shrink-0 rounded-full border border-[#edf1f7] px-4 py-2 text-[#8290a8]">운동</button><button className="shrink-0 rounded-full border border-[#edf1f7] px-4 py-2 text-[#8290a8]">취미</button><button className="shrink-0 rounded-full border border-[#edf1f7] px-4 py-2 text-[#8290a8]">문화</button></div>
            <div className="space-y-3">{meetups.map((meetup) => <article key={meetup.title} className="group flex items-center gap-4 rounded-2xl border border-[#eef2f7] p-3.5 transition hover:-translate-y-0.5 hover:border-[#c9e1fb] hover:shadow-sm"><div className={`h-[58px] w-[58px] shrink-0 rounded-[17px] bg-gradient-to-br ${meetup.color === 'sky' ? 'from-[#c7ecff] to-[#6eb4f8]' : meetup.color === 'violet' ? 'from-[#e3d6ff] to-[#9b8bf1]' : 'from-[#d6e3ff] to-[#7898ed]'}`} /><div className="min-w-0 flex-1"><div className="mb-1 flex items-center gap-2"><h3 className="truncate text-[15px] font-bold">{meetup.title}</h3><span className="hidden rounded-full bg-[#f3f6fb] px-2 py-0.5 text-[10px] font-semibold text-[#8793a9] sm:inline">{meetup.category}</span></div><p className="mb-1 text-xs text-[#8d9ab1]"><MapPin size={12} className="mr-1 inline text-[#76aaf2]" />{meetup.place} · {meetup.date}</p><p className="text-xs font-medium text-[#6c9bea]">{meetup.people}</p></div><ArrowUpRight size={17} className="text-[#c1cada] transition group-hover:text-[#6ba6f3]" /></article>)}</div>
            <button className="mt-5 flex w-full items-center justify-center gap-1 rounded-2xl py-3 text-sm font-semibold text-[#6c9bea] hover:bg-[#f5f9ff]">모임 더 보기 <ChevronDown size={16} /></button>
          </section>

          <section className="relative min-h-[570px] overflow-hidden rounded-[28px] border border-[#e3edf8] bg-[#eaf4fb] shadow-[0_12px_35px_rgba(71,112,170,0.07)]" aria-label="모임 지도 미리보기">
            <div className="map-grid absolute inset-0 opacity-70" /><div className="road road-one" /><div className="road road-two" /><div className="road road-three" />
            <div className="absolute left-5 top-5 rounded-2xl bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm sm:left-7 sm:top-7"><p className="text-xs font-semibold text-[#94a0b5]">현재 위치</p><p className="mt-1 text-sm font-bold">서울특별시</p></div>
            {[['35%','29%','sky'],['70%','38%','violet'],['48%','61%','indigo'],['78%','73%','sky']].map(([top,left,color], index) => <button key={index} className="map-pin absolute" style={{ top, left }} aria-label={`${index + 1}번째 모임 위치`}><span className={`pin-dot ${color}`} /><span className="pin-label">{[12, 8, 16, 5][index]}명</span></button>)}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm sm:bottom-7 sm:left-7 sm:right-7"><div className="flex items-center gap-2 text-sm font-semibold"><span className="h-2.5 w-2.5 rounded-full bg-[#62abf5]" /> 주변 모임 24개</div><button className="text-xs font-bold text-[#6199ed]">내 위치로 이동</button></div>
          </section>
        </div>
      </section>
    </main>
  )
}

// Tailwind classes above keep the main layout responsive; the map uses CSS-only decorative roads for this visual shell.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _unused = Compass
