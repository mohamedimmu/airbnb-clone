'use client';

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({
  children
}) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 lg:px-10 md:px-8 sm:px-4 px-2">
      {children}
    </div>
  )
}

export default Container
