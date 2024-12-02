import DropdownOptions from '@/components/DropdownOptions';
import InputBox from '@/components/InputBox';
import Button from '@/components/Buttons';
import "animate.css";

export default function Home() {
  return (
    <section
      className="flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat text-white min-h-screen m-0 p-0 overflow-hidden"
      style={{ backgroundImage: 'url(/bg-3.jpg)' }}
    >
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl animate__animated animate__tada">
        Welcome to Quizzy...
      </h1>

      <section className="p-6 my-4 rounded-md shadow-md w-3/4 bg-blue-100 text-blue-900 shadow-blue-200"

      >
        <InputBox />
        <DropdownOptions />
        <div className="flex items-center justify-center">
          <Button />
        </div>
      </section>
    </section>
  );
}
