import Image from "next/image";

function Powered() {
  return (
    <div className="fixed z-1 right-5 top-5 bg-dark-grey rounded-[45px] border border-gold p-2">
      <a
        className="flex flex-row justify-center items-center gap-2"
        href="https://starknet.io/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/starknet_logo.svg"
          alt="StarkNet Logo"
          height={24}
          width={24}
        />
        <span className="text-silver">Powered by Starknet</span>
      </a>
    </div>
  );
}
export default Powered;
