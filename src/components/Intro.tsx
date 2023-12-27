import Link from 'next/link'

import { IconLink } from '@/components/IconLink'
import { Logo } from '@/components/Logo'
import { SignUpForm } from '@/components/SignUpForm'



function LinkedIn(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg className="h-5 w-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
        clipRule="evenodd"
      />
    </svg>
  )
}


export function Intro() {
  return (
    <>
      <div>
        <a href="https://paywind.io">
          <Logo className="inline-block h-8 w-auto" />
        </a>
      </div>
      <h1 className="mt-5 text-4xl text-white">
        <span className="text-white font-semibold"> A Journey Through Innovation</span>
      </h1>
      <p className="mt-4 text-md text-gray-300">
      This page offers a snapshot of Paywind&apos;s pivotal developments in the investment sector, emphasizing major updates and innovations that mark our journey towards enhancing your investing experience
      </p>
      <SignUpForm />
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">

        <IconLink href="https://www.linkedin.com/company/paywind"
          target="_blank"
          rel="noopener noreferrer" icon={LinkedIn} className="flex-none">
          LinkedIn Page
        </IconLink>

      </div>
    </>
  )
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">

    </p>
  )
}
