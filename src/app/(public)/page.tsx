import { Button } from "@/components/ui/button"
import Image from "next/image"

function HomePage() {
  return (
    <main className="flex flex-col align-baseline">
      <div className="grid lg:grid-cols-2 px-20 h-[80vh] items-center mt-10">
        <div className="flex justify-center">
          <div className="flex flex-col gap-5">
            <h1 className='text-xl font-bold text-primary'>
              Donate Blood, Save Lives
            </h1>
            <p className="text-sm font-semibold text-gray-700">
              Welcome to Shey Blood Donations - a platform dedicated to  connectiing donors and recepients. Register to donate eblood, donation camps, and help make a diffirence in your community.
            </p>
            <Button className="w-max">Get Started</Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            className="object-contain"
            src="/donation.png"
            alt="Donation"
            loading="eager"
            width={300}
            height={200}
            style={{ width: 'auto'}}
          />
        </div>
      </div>
    </main>
  )
}

export default HomePage
