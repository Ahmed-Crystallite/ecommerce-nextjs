export default function UserProfile({params}) {
    return (
       <div className="py-[100px]">
        <div className="container">
        <h1 className="text-[40px] font-semibold flex items-center gap-2 mb-5">
          <span className="block border-2 border-black py-1 px-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 448 512"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
            </svg>
          </span>
          <span className="block">Profile</span>
        </h1>
            <p className="sm:text-4xl text-2xl font-medium flex items-center gap-2">User Key 
            <span className="inline-block p-2 ml-2 sm:text-2xl text-base leading-tight rounded bg-yellow-500 text-black font-light">{params.id}</span>
            </p>
        </div>
       </div>
    )
}