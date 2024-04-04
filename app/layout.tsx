import Nav from "@components/Nav"
import "@styles/globals.css"
import { ReactNode } from "react"

export const metaData = {
    title: "Promptopia",
    description: "Discover & share AI prompts"
}

type RootLayoutProps = {
    children: ReactNode
}

const RootLayout = ({children}: RootLayoutProps) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'></div>
            </div>
            <main className='app'>
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout