export function Rainbow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <header className="w-fit mb-4 sm:mb-8">
        <h2 className="text-white px-2 pt-1 bg-red-600 text-xl sm:text-4xl font-light leading-5 sm:leading-7">{children}</h2>
        <h2 className="text-white px-2 bg-green-600 text-xl sm:text-4xl font-light leading-5 sm:leading-7">{children}</h2>
        <h2 className="text-white px-2 pb-1 bg-blue-600 text-xl sm:text-4xl font-light leading-5 sm:leading-7">{children}</h2>
      </header>
    </div>
  )
}