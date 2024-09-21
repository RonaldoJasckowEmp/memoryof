"use client";
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { useParams } from 'next/navigation';

import { Container } from '@/components/Container'
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import { PiStarLight, PiCrossLight } from "react-icons/pi";
import Post from '@/components/post';

function SocialLink({
    className,
    href,
    children,
    icon: Icon,
}: {
    className?: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    children: React.ReactNode
}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
    )
}


export default function About() {

    const params = useParams();
    const slug = params.slug;

    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={portraitImage}
                            alt=""
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                    <h1>In memory of {slug}</h1>
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        {'name'}
                    </h1>
                    <PiStarLight />
                    <PiCrossLight />

                    <div className="relative flex flex-col justify-center overflow-hidden antialiased bg-white py-6 sm:py-12"
                    >
                        <div className="absolute inset-0  bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

                        <div className="cursor-pointer block group relative z-50 group bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 after:h-[1px] after:w-[200px] after:bg-gradient-to-r after:from-transparent after:via-teal-500 after:to-transparent after:absolute after:-top-[2px] after:left-[65%] after:opacity-0 after:content-[''] hover:after:left-[30%] hover:after:opacity-100  after:transition-all"
                        >
                            <div className="mx-auto max-w-md">
                                <h1 className="text-2xl  font-bold">Biography</h1>
                                <p className="text-base/8 mt-4"> The phrase Hover over me to see magic is a playful and enticing invitation for the user to interact with the text. It suggests that there is something hidden or surprising that can be revealed by hovering over the text. This kind of interactive element can be effective in engaging users and creating a more dynamic and memorable user experience. ChatGPT wrote it. </p>
                            </div>
                        </div>
                    </div>
                    <Post/>
                </div>
                <div className="lg:pl-20">
                    <ul role="list">
                        <SocialLink href="#" icon={XIcon}>
                            Follow on X
                        </SocialLink>
                        <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                            Follow on Instagram
                        </SocialLink>
                        <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                            Follow on GitHub
                        </SocialLink>
                        <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                            Follow on LinkedIn
                        </SocialLink>
                        <SocialLink
                            href="mailto:spencer@planetaria.tech"
                            icon={MailIcon}
                            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                        >
                            spencer@planetaria.tech
                        </SocialLink>
                    </ul>
                </div>
            </div>
        </Container>
    )
}
