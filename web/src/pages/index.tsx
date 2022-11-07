import Image from 'next/image'
import appPreviewImg from "../assets/app-nlw-copa-preview.png";
import logoImg from "../assets/logo.svg";
import usersAvatarExampleImg from "../assets/users-avatar-example.png";
import iconCheckImage from "../assets/icon-check.svg"
import { api } from '../lib/axios';
import { FormEvent, useState } from 'react';

interface HomeProps {
  poolCount: number;
  guessCount: number;
  userCount: number;
}

export default function Home(props: HomeProps) {
  const [poolTitle, setPoolTitle] = useState('')

  async function createPool(event: FormEvent) {
    event.preventDefault()

    try {
      const response = await api.post('/pools', {
        title: poolTitle,
      });

      const { code } = response.data;

      await navigator.clipboard.writeText(code);

      alert(' Pool created successfully, code has been copied to clipboard! ');
      setPoolTitle('')
    } catch (err) {
      console.log(err);
      alert('Error, please try again!');
    }
  }

  return (
    <div className='max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center'>
      <main>
        <Image src={logoImg} alt="Logo NLW Copa"/>

        <h1 className='mt-14 text-white text-5xl font-bold leading-tight'>
          Create your own sweepstake for the World Cup and share it with your friends
        </h1>

        <div className='mt-10 flex items-center gap-2'>
        <Image src={usersAvatarExampleImg} alt="Users avatar example image" />
        <strong className='text-gray-100 text-xl'>
          <span className='text-ignite-500'>+{props.userCount}</span> people are already using it
        </strong>
        </div>

        <form onSubmit={createPool} className='mt-10 flex gap-2'>
          <input 
          className='flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100'
          type="text" 
          required 
          placeholder='Give your sweepstake a name?'
          onChange={event => setPoolTitle(event.target.value)}
          value={poolTitle}
        />

          <button 
          className='bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700'
          type='submit'
          >
            Create your sweepstake
          </button>
        </form>

        <p className='mt-4 text-sm text-gray-300 leading-relaxed'>After creating your sweepstake pool, you will receive a unique code that you can use to invite others 🚀</p>

        <div className='mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100'>
          <div className='flex items-center gap-6'>
            <Image src={iconCheckImage} alt="" />
            <div className='flex flex-col'>
              <span className='font-bold 2xl:'>+{props.poolCount}</span>
              <span>Pools created</span>
            </div>
          </div>

          <div className='w-px h-14 bg-gray-600'/>

          <div className='flex items-center gap-6'>
            <Image src={iconCheckImage} alt="" />
            <div className='flex flex-col'>
              <span className='font-bold 2xl:'>+{props.guessCount}</span>
              <span>Guesses sent</span>
            </div>
          </div>
        </div>
      </main>

      <Image 
      src={appPreviewImg} 
      alt="Two smartphones showing an preview of mobile app NLW Copa" 
      quality={100}
      />
    </div>
  )
}

export const getServerSideProps = async () => {
  const [poolCountResponse, guessCountResponse, usersCountResponse] = await Promise.all([
    api.get('pools/count'),
    api.get('guesses/count'),
    api.get('users/count'),
  ])

  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessCount: guessCountResponse.data.count,
      userCount: usersCountResponse.data.count,
    }
  }
}
