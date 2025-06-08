import Image from 'next/image'

const ProfileCard = () => {
  return (
    <div className="relative w-[300px] h-[400px]">
      {/* Yellow Blobs */}
      <div className="absolute w-[200px] h-[200px] bg-[#FFF019] rounded-full -top-20 -right-10"></div>
      <div className="absolute w-[200px] h-[200px] bg-[#FFF019] rounded-full -bottom-20 -left-10"></div>

      <Image
        src="/img/FotoAbout.png"
        alt="Radithia Arlistian Saputra"
        fill
        className="rounded-2xl object-cover"
        priority
      />
    </div>
  )
}
export default ProfileCard