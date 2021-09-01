import * as React from 'react';

import Seo from '@/components/Seo';
import CustomLink from '@/components/links/CustomLink';

export default function HomePage() {
  return (
    <>
      <Seo templateTitle='Home' />

      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-center text-white layout'>
            <h1 className='text-2xl md:text-4xl'>
              <CustomLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
                Types of Next Rendering
              </CustomLink>
            </h1>
            <p className='mt-2 text-sm text-gray-300'>
              Demo of Next.js rendering type using time API.
            </p>

            <div className='flex flex-col space-y-2 mt-4'>
              <CustomLink href='/render/csr'>CSR</CustomLink>
              <CustomLink href='/render/ssr'>SSR</CustomLink>
              <CustomLink href='/render/ssg'>SSG</CustomLink>
              <CustomLink href='/render/isr'>ISR</CustomLink>
            </div>

            <footer className='absolute text-gray-500 bottom-2'>
              © {new Date().getFullYear()} By{' '}
              <CustomLink href='https://theodorusclarence.com?ref=tsnextstarter'>
                Theodorus Clarence
              </CustomLink>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
