import React from 'react'
import Image from 'next/image'
import creatorAvatar from '../assets/creatorAvatar.png'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] bg-cover before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/DrCbMMM6J6KohH4c4YfCDcdzCWGaL-MrrhyiiBLpNtqR9wykTU9PRgRYeZL0ZuRaPhi0i__fQTQ3EBHt3Fc7zpSGla5USiu6urmR3UQ=w600')] before:bg-cover before:bg-center before:opacity-60 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem] shadow-2xl`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white shadow-2xl`,
  author: `flex flex-col justify-center ml-4`,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Discover Your Next World Here!')
                    .pauseFor(2500)
                    .deleteChars(1)
                    .typeString('!!!!')
                    .pauseFor(2500)
                    .start()
                }}
              />
            </div>
            <div className={style.description}>
              Next-NFTs is one of the most popular NFT marketplace in the world.
              <br></br>
              Go start exploring!
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>Explore</button>
              <button className={style.button}>Create</button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img
              className="rounded-t-lg"
              src="https://lh3.googleusercontent.com/DrCbMMM6J6KohH4c4YfCDcdzCWGaL-MrrhyiiBLpNtqR9wykTU9PRgRYeZL0ZuRaPhi0i__fQTQ3EBHt3Fc7zpSGla5USiu6urmR3UQ=w600"
            ></img>
            <div className={style.infoContainer}>
              <Image src={creatorAvatar} height={45} width={45} alt="" />
              <div className={style.author}>
                <div className={style.name}>Dope Ape</div>
                <Link href="https://nextjs.org/docs/api-reference/next/link">
                  <a className="text-[#1868b7]">Dope NFT Club</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
