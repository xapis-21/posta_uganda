import { Children } from "react"


const StudioLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className="min-h-screen">
        {children}
    </main>
  )
}

export default StudioLayout